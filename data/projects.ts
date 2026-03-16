export const projects = [
  {
    title: "Azure End-to-End Data Engineering Pipeline",
    description: "Architected a Medallion Architecture ETL pipeline ingesting 1M+ records from Azure SQL via Data Factory with incremental loading and Logic Apps monitoring. Processed scalable data in Databricks using Auto Loader, Spark Streaming, and reusable Python classes. Built a Star Schema data warehouse in Synapse Analytics supporting SCD Type-2 updates.",
    tech: ["Azure Data Factory", "Databricks", "PySpark", "Azure Synapse", "Logic Apps", "Star Schema"],
    github: "https://github.com/utsav89k/azure_end-to-end_pipeline",
    live: "",
  },
  {
    title: "Airbnb Data Pipeline — Snowflake & DBT",
    description: "Implemented secure data ingestion from AWS S3 into Snowflake using external stages, file formats, and IAM-based access control. Transformed Snowflake data using DBT with macros, incremental loading, and Upsert logic to create curated datasets. Built a Snowflake data warehouse using One Big Table (OBT) and Star Schema models with a metadata-driven pipeline using Jinja.",
    tech: ["Snowflake", "DBT", "AWS S3", "Jinja", "IAM", "Data Warehousing"],
    github: "https://github.com/utsav89k/DE_Project_Snowflake_DBT",
    live: "",
  },
  {
    title: "Sales Data Processing & Analytics Pipeline",
    description: "Developed a Spark declarative pipeline for sales data using Auto CDC to support incremental change data capture and automated data ingestion. Applied data quality validations using expectations to enforce business rules and automate pipeline orchestration.",
    tech: ["PySpark", "Databricks", "Delta Live Tables", "Unity Catalog", "Azure Key Vault", "Auto CDC"],
    github: "https://github.com/utsav89k/spark_declarative_pipeline_prj",
    live: "",
  },
  {
    title: "Covid-19 Data Analysis & Visualization",
    description: "Web-scraped COVID-19 data from 'Our World in Data' and examined global trends in cases, deaths, and vaccination adoption using SQL. Generated interactive Tableau dashboards with trend lines, geospatial views, and forecasting models to enable ~25% faster insight discovery.",
    tech: ["Python", "SQL", "Tableau", "PostgreSQL", "BeautifulSoup", "Pandas"],
    github: "https://github.com/utsav89k/Covid19_vaccination_Analysis",
    live: "",
  },
  {
    title: "Retail Store Analysis Pipeline",
    description: "Built an Automated data pipeline using AWS Glue and AWS Lambda triggers for ETL workflows, improving reporting efficiency by 30%. Analyzed and created an interactive Power BI dashboard with DAX to uncover sales trends, top performing products, and customer purchase pattern.",
    tech: ["AWS Glue", "AWS Lambda", "Power BI", "DAX", "ETL"],
    github: "https://github.com/utsav89k/Store-sales-analysis",
    live: "",
  },
  {
    title: "Plant Disease Prediction (CNN)",
    description: "Engineered a CNN based deep learning model to detect and classify plant leaf diseases using 10,000 labeled images, achieving 83% accuracy. Deployed a Streamlit based web app enabling automated, real-time disease prediction to support early crop health monitoring.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit", "OpenCV", "NumPy"],
    github: "https://github.com/utsav89k/data_warehouse-project",
    live: "",
  },
];
