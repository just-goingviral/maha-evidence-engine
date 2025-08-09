# EviAtlas Dockerfile
FROM rocker/shiny:latest

# Install system dependencies
RUN apt-get update && apt-get install -y \
    libcurl4-openssl-dev \
    libssl-dev \
    libxml2-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install R packages
RUN R -e "install.packages(c('shiny', 'ggplot2', 'dplyr', 'tidyr', 'viridis', 'plotly', 'DT'), repos='https://cloud.r-project.org/')"

# Create app directory
RUN mkdir -p /srv/shiny-server/eviatlas
WORKDIR /srv/shiny-server/eviatlas

# Copy app files
COPY app.R .
COPY ../../branding /srv/shiny-server/branding
COPY ../../data/seeds /srv/shiny-server/data

# Create custom shiny-server configuration
RUN echo "run_as shiny; \
         server { \
           listen 3838; \
           location / { \
             site_dir /srv/shiny-server; \
             log_dir /var/log/shiny-server; \
             directory_index on; \
             app_dir /srv/shiny-server/eviatlas; \
           } \
         }" > /etc/shiny-server/shiny-server.conf

# Expose port
EXPOSE 3838

# Run shiny server
CMD ["/usr/bin/shiny-server"]
