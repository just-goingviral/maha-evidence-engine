# EviAtlas - Evidence Heatmap Visualization
# MAHA Evidence Engine Component

library(shiny)
library(ggplot2)
library(dplyr)
library(tidyr)
library(viridis)
library(plotly)
library(DT)

# Define UI
ui <- fluidPage(
  # Include custom CSS
  tags$head(
    tags$style(HTML("
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      }
      .navbar {
        background-color: #1e40af;
        color: white;
        padding: 1rem 2rem;
        margin-bottom: 2rem;
      }
      .navbar h1 {
        margin: 0;
        font-size: 1.5rem;
      }
      .sidebar {
        background-color: #f3f4f6;
        padding: 1.5rem;
        border-radius: 0.5rem;
      }
      .main-panel {
        padding: 0 1.5rem;
      }
      .info-box {
        background-color: #dbeafe;
        border: 1px solid #60a5fa;
        border-radius: 0.5rem;
        padding: 1rem;
        margin-bottom: 1rem;
      }
    "))
  ),
  
  # Navigation bar
  div(class = "navbar",
    h1("EviAtlas - MAHA Evidence Engine"),
    p("Intervention × Outcome Evidence Heatmaps", style = "margin: 0; opacity: 0.9;")
  ),
  
  # Main layout
  sidebarLayout(
    sidebarPanel(
      class = "sidebar",
      h3("Filter Options"),
      
      selectInput("dataset", "Select Dataset:",
                  choices = c("Natural Healing Interventions" = "natural_healing",
                             "Upload Custom CSV" = "custom")),
      
      conditionalPanel(
        condition = "input.dataset == 'custom'",
        fileInput("file", "Choose CSV File",
                 accept = c(".csv"))
      ),
      
      hr(),
      
      selectInput("outcome_filter", "Filter by Outcome:",
                  choices = c("All" = "all"),
                  multiple = TRUE),
      
      selectInput("intervention_filter", "Filter by Intervention:",
                  choices = c("All" = "all"),
                  multiple = TRUE),
      
      sliderInput("evidence_threshold", "Minimum Evidence Strength:",
                  min = 0, max = 10, value = 0, step = 0.5),
      
      hr(),
      
      radioButtons("color_scheme", "Color Scheme:",
                   choices = c("Viridis" = "viridis",
                              "Heat" = "heat",
                              "Cool" = "cool",
                              "MAHA Brand" = "maha")),
      
      actionButton("reset_filters", "Reset Filters", 
                   class = "btn btn-secondary",
                   style = "width: 100%;")
    ),
    
    mainPanel(
      class = "main-panel",
      
      div(class = "info-box",
          h4("About EviAtlas"),
          p("This heatmap visualizes the strength of evidence for various interventions across different health outcomes. 
            Darker colors indicate stronger evidence. Click on cells to see detailed information.")
      ),
      
      tabsetPanel(
        tabPanel("Heatmap", 
                 plotlyOutput("heatmap", height = "600px"),
                 br(),
                 h4("Selected Cell Details"),
                 verbatimTextOutput("cell_info")),
        
        tabPanel("Data Table",
                 h4("Evidence Data"),
                 DTOutput("data_table")),
        
        tabPanel("Statistics",
                 h4("Evidence Summary Statistics"),
                 plotOutput("stats_plot", height = "400px"),
                 br(),
                 h4("Top Evidence Combinations"),
                 tableOutput("top_evidence"))
      )
    )
  )
)

# Define server logic
server <- function(input, output, session) {
  
  # Load or generate data
  evidence_data <- reactive({
    if (input$dataset == "natural_healing") {
      read.csv("data/seeds/evidence-matrix.csv", stringsAsFactors = FALSE)
    } else if (input$dataset == "custom" && !is.null(input$file)) {
      read.csv(input$file$datapath, stringsAsFactors = FALSE)
    } else {
      data.frame()
    }
  })
  
  # Update filter choices based on data
  observe({
    req(evidence_data())
    
    outcomes <- unique(evidence_data()$Outcome)
    interventions <- unique(evidence_data()$Intervention)
    
    updateSelectInput(session, "outcome_filter",
                     choices = c("All" = "all", outcomes))
    
    updateSelectInput(session, "intervention_filter",
                     choices = c("All" = "all", interventions))
  })
  
  # Filter data
  filtered_data <- reactive({
    req(evidence_data())
    
    data <- evidence_data()
    
    # Apply filters
    if (!"all" %in% input$outcome_filter && length(input$outcome_filter) > 0) {
      data <- data %>% filter(Outcome %in% input$outcome_filter)
    }
    
    if (!"all" %in% input$intervention_filter && length(input$intervention_filter) > 0) {
      data <- data %>% filter(Intervention %in% input$intervention_filter)
    }
    
    data <- data %>% filter(Evidence_Strength >= input$evidence_threshold)
    
    data
  })
  
  # Create heatmap
  output$heatmap <- renderPlotly({
    req(filtered_data())
    
    # Prepare data for heatmap
    heatmap_data <- filtered_data() %>%
      select(Intervention, Outcome, Evidence_Strength) %>%
      pivot_wider(names_from = Outcome, values_from = Evidence_Strength, values_fill = 0)
    
    # Convert to matrix
    row_names <- heatmap_data$Intervention
    heatmap_matrix <- as.matrix(heatmap_data[,-1])
    rownames(heatmap_matrix) <- row_names
    
    # Define color scale based on selection
    colors <- switch(input$color_scheme,
                    "viridis" = viridis(100),
                    "heat" = heat.colors(100),
                    "cool" = topo.colors(100),
                    "maha" = colorRampPalette(c("#ffffff", "#60a5fa", "#1e40af"))(100))
    
    # Create interactive heatmap
    plot_ly(
      x = colnames(heatmap_matrix),
      y = rownames(heatmap_matrix),
      z = heatmap_matrix,
      type = "heatmap",
      colorscale = list(c(0, colors[1]), c(1, colors[100])),
      hovertemplate = paste("<b>Intervention:</b> %{y}<br>",
                           "<b>Outcome:</b> %{x}<br>",
                           "<b>Evidence Strength:</b> %{z}<br>",
                           "<extra></extra>")
    ) %>%
      layout(
        title = "Evidence Strength Heatmap",
        xaxis = list(title = "Outcomes", tickangle = -45),
        yaxis = list(title = "Interventions"),
        margin = list(b = 100)
      )
  })
  
  # Display cell information
  output$cell_info <- renderPrint({
    d <- event_data("plotly_click")
    if (is.null(d)) {
      cat("Click on a cell to see detailed information")
    } else {
      intervention <- d$y
      outcome <- d$x
      strength <- d$z
      
      detail <- filtered_data() %>%
        filter(Intervention == intervention, Outcome == outcome)
      
      if (nrow(detail) > 0) {
        cat(paste("Intervention:", intervention, "\n"))
        cat(paste("Outcome:", outcome, "\n"))
        cat(paste("Evidence Strength:", strength, "/10\n"))
        if ("Study_Count" %in% names(detail)) {
          cat(paste("Number of Studies:", detail$Study_Count[1], "\n"))
        }
        if ("Quality_Score" %in% names(detail)) {
          cat(paste("Quality Score:", detail$Quality_Score[1], "/5\n"))
        }
      }
    }
  })
  
  # Data table
  output$data_table <- renderDT({
    filtered_data() %>%
      datatable(options = list(pageLength = 15, scrollX = TRUE))
  })
  
  # Statistics plot
  output$stats_plot <- renderPlot({
    req(filtered_data())
    
    # Summary by intervention
    summary_data <- filtered_data() %>%
      group_by(Intervention) %>%
      summarise(
        Mean_Evidence = mean(Evidence_Strength, na.rm = TRUE),
        .groups = "drop"
      ) %>%
      arrange(desc(Mean_Evidence))
    
    ggplot(summary_data, aes(x = reorder(Intervention, Mean_Evidence), y = Mean_Evidence)) +
      geom_bar(stat = "identity", fill = "#1e40af") +
      coord_flip() +
      labs(
        title = "Average Evidence Strength by Intervention",
        x = "Intervention",
        y = "Mean Evidence Strength"
      ) +
      theme_minimal() +
      theme(
        plot.title = element_text(size = 16, face = "bold"),
        axis.text = element_text(size = 12)
      )
  })
  
  # Top evidence table
  output$top_evidence <- renderTable({
    filtered_data() %>%
      arrange(desc(Evidence_Strength)) %>%
      head(10) %>%
      select(Intervention, Outcome, Evidence_Strength) %>%
      rename("Evidence Strength" = Evidence_Strength)
  })
  
  # Reset filters
  observeEvent(input$reset_filters, {
    updateSelectInput(session, "outcome_filter", selected = "all")
    updateSelectInput(session, "intervention_filter", selected = "all")
    updateSliderInput(session, "evidence_threshold", value = 0)
    updateRadioButtons(session, "color_scheme", selected = "viridis")
  })
}

# Run the app
shinyApp(ui = ui, server = server)
