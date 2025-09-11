# EviAtlas

This Shiny app visualizes evidence strength across intervention–outcome pairs.

## Data

The default dataset is stored in [`data/seeds/evidence-matrix.csv`](../../data/seeds/evidence-matrix.csv). The Dockerfile copies this directory into the container at `data/seeds` so the app can read the CSV directly.

To use a different dataset, choose **Upload Custom CSV** within the app and provide a file with the columns `Intervention`, `Outcome`, `Evidence_Strength`, `Study_Count`, and `Quality_Score`.
