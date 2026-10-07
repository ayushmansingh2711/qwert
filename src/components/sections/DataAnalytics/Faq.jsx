import React from "react";
import FAQ from "../../common/FAQ";

  
const items = [
    {
        title: "What is Data Analytics?",
        text: "Data Analytics is the process of examining, interpreting, and visualizing data to uncover trends, patterns, and insights for better decision-making.",
      },
      {
        title: "How does Data Analytics work?",
        text: "It involves data collection, cleaning, statistical analysis, visualization, and predictive modeling to derive meaningful business insights.",
      },
      {
        title: "What are the applications of Data Analytics?",
        text: "Data Analytics is used in business intelligence, financial analysis, healthcare, marketing, supply chain management, and more.",
      },
      {
        title: "Do I need coding skills to learn Data Analytics?",
        text: "Basic knowledge of Python or SQL is beneficial, but many tools allow data analysis without extensive coding.",
      },
      {
        title: "What career opportunities are available in Data Analytics?",
        text: "You can become a Data Analyst, Business Analyst, Data Scientist, Financial Analyst, or BI Developer.",
      }
];

const items2 = [
    {
        title: "Which tools are used in Data Analytics?",
        text: "Popular tools include Python, R, SQL, Power BI, Tableau, Excel, and Apache Spark for big data analysis.",
      },
      {
        title: "What is the difference between Data Analytics and Data Science?",
        text: "Data Analytics focuses on analyzing past data for insights, while Data Science includes predictive modeling and machine learning.",
      },
      {
        title: "Is Data Analytics an in-demand skill?",
        text: "Yes, companies rely on data-driven insights to make strategic decisions, making data analytics a highly valuable skill.",
      },
      {
        title: "Can Data Analytics help in business growth?",
        text: "Absolutely! Data analytics helps businesses optimize operations, improve customer experience, and drive better performance.",
      },
      {
        title: "How can I start learning Data Analytics?",
        text: "Start with Python, Excel, or SQL, then explore visualization tools like Tableau and machine learning basics. Hands-on projects enhance learning.",
      },
];



const Faq = () => {
  return (

      <div>
        <FAQ items={items} items2={items2}/>
      </div>
);
};


  

export default Faq;
