import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/projecy-2.png";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `Data Engineer & Analytics Specialist with 4+ years of experience in designing and optimizing large-scale data pipelines across diverse cloud platforms (AWS, Azure, GCP). Skilled in building scalable data solutions using Hadoop, Spark, Kafka, AWS Glue, Redshift, and Snowflake. Proficient in Python, SQL, and Java for distributed computing and ETL/ELT pipeline optimization. Adept at implementing machine learning models, automating workflows, and enabling real-time data processing to drive data-driven solutions. Passionate about leveraging technology to solve complex data challenges and deliver actionable insights that enhance business decision-making.`;

export const ABOUT_TEXT = `I am a Data Engineer & Analytics Specialist with a Master’s degree from the University of North Texas and over four years of experience in designing and optimizing large-scale data pipelines across cloud platforms like AWS, Azure, and GCP. With expertise in big data technologies such as Hadoop, Spark, Kafka, AWS Glue, Redshift, and Snowflake, I specialize in building scalable, high-performance data solutions. I am proficient in Python, SQL, and Java for distributed computing and ETL/ELT optimization. Passionate about solving complex data challenges, I leverage machine learning models, automate workflows, and enable real-time data processing to drive actionable insights. My goal is to harness the power of data to enhance business decision-making and operational efficiency.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Present",
    role: "Data Engineer",
    company: "Progressive Insurance",
    description: `Designed and implemented end-to-end data pipelines using AWS Lambda and Snowflake, optimizing data movement and storage for scalability and performance. Developed and automated ETL processes with AWS Glue and Python scripts, improving data transformation and reporting efficiency. Ensured data integrity, security, and compliance while integrating internal and external data sources via AWS services. Optimized SQL queries for faster performance and applied debugging techniques to resolve data-related issues, enhancing system reliability.`,
    technologies: ["ETL", "Cloud", "DBMS", "Python"],
  },
  {
    year: "Sep 2021 - Dec 2022",
    role: "Data Engineer",
    company: "Optum Health",
    description: `Designed and standardized multi-layered data models (Bronze, Silver, Gold) to ensure clean and reliable datasets for regulatory reporting and healthcare analytics. Developed high-performance ETL pipelines using PySpark, optimizing data transformation and reducing query execution time by 50%. Implemented SCD Type 1 & Type 2 in Amazon Redshift for historical tracking and compliance. Built interactive dashboards in Power BI and Tableau, increasing decision-making speed by 30%. Automated CI/CD pipelines with AWS CodePipeline & Jenkins, improving deployment efficiency. Integrated Amazon SageMaker with TensorFlow & PyTorch for predictive modeling, enhancing fraud detection and claims processing. Established real-time monitoring with Grafana, Splunk, and Prometheus, reducing downtime by 40%. Leveraged Docker & Kubernetes for containerized, scalable data pipelines, cutting infrastructure costs by 25%.`,
    technologies: ["Amazon Redshift", "Docker", "Power BI", "TensorFlow"],
  },
  {
    year: "Jan 2020 - Sep 2021",
    role: "Data Analyst",
    company: "ADP",
    description: `This experience involves partnering with business stakeholders to gather data requirements, improving data analytics capabilities, and optimizing ETL pipelines for better performance. The individual designed scalable ETL solutions using tools like Informatica PowerCenter, Talend, and Apache NiFi, and worked with cloud data warehouses such as AWS Redshift, Snowflake, and Azure Synapse Analytics. They implemented automated validation and error-handling mechanisms, enhanced data quality, and built custom data models for business intelligence tools like Tableau, Power BI, and Apache Superset. The role also involved collaboration with data analysts and scientists for AI-driven insights and ensuring data governance, security, and compliance with industry standards.`,
    technologies: ["AWS", "Tableau", "Data Governance"],
  },
  
];

export const PROJECTS = [
  {
    title: "Weather Impact on Accident Severity Analysis",
    image: project1,
    description:
      "I analyzed the impact of weather on accident severity in NYC using the Motor Vehicle Collisions dataset and found that bad weather, high traffic, and peak hours increase accident severity. I employed Logistic Regression and Random Forest models for prediction, with Random Forest delivering better results. The analysis involved data preprocessing, including cleaning, imputation, and feature engineering, leading to actionable insights for improving traffic safety and management. I also conducted a comprehensive analysis of pharmacy wholesale data from 2007 to 2010, utilizing advanced data visualization techniques such as line, radar, funnel, pie, and cluster charts to identify key trends. This helped optimize order profitability and led to recommendations for top-performing drugs and markets to improve business strategies.",
    technologies: ["Data Integration", "Logistic Regression", "Random Forest", "Data Visualization"],
  },
  {
    title: "Lay-Offs Analysis",
    image: project2,
    description:
      "The work involved extracting and integrating data using SQL for detailed analysis. Exploratory Data Analysis (EDA) was conducted, along with statistical methods like ANOVA, to uncover insights into the impact of the global recession. Linear Regression models were then built on the processed data to identify departmental variations, offering actionable recommendations for strategic decision-making.",
    technologies: ["SQL", "Exploratory Data Analysis", "ANOVA", "Linear Regression"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Netlfix Analysis",
    image: project4,
    description:
      "A comprehensive analysis of Netflix's dataset was conducted using Open Refine and GCP Big Query. The goal was to derive actionable insights to optimize content strategy, improve TRP (Television Rating Points), and drive global subscriptions",
    technologies: ["Open Refine", "GCP Big Query", "Data Analysis", "Content Strategy Optimization "],
  },
  {
    title: "Spotify Project",
    image: project5,
    description:
      "The Spotify project involved using AWS Cloud for scalable data storage and processing, and PySpark for distributed data processing and analysis. This approach enabled the efficient handling of large-scale datasets to uncover insights and drive data-driven decisions for Spotify.",
    technologies: ["AWS Cloud", "PySpark", "Big Data Analytics", "Data Engineering "],
  },
  {
    title: "Spotify Project",
    image: project5,
    description:
      "An ELT pipeline was built for a retail company to process POS transactions, inventory updates, and customer behavior data. Snowflake was used for cloud data warehousing, with optimizations like materialized views and clustering to enhance query performance. Apache Airflow automated workflows, reducing data latency by 60%. Dashboards were developed in Tableau for sales forecasting, product demand analysis, and customer segmentation.",
    technologies: ["Snowflake", "Apache Airflow", "dbt", "Tableau "],
  },
];

export const CONTACT = {
  phoneNo: "+1(940)567-8892",
  email: "sivad8516@gmail.com",
};
