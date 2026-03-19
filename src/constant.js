// Skills Section Logo
import ExcelLogo from '../src/assets/Skills/MicrosoftExcel.png'
import PowerBiLogo from '../src/assets/Skills/PowerBi.png'
import PythonLogo from '../src/assets/Skills/Python.png'
import SnowFlakeLogo from '../src/assets/Skills/Snowflake.png'
import SqlServerLogo from '../src/assets/Skills/SqlServer.png'
import StatisticsLogo from '../src/assets/Skills/Statistics.png'
import TableauLogo from '../src/assets/Skills/Tableau.png'
import AwsLogo from '../src/assets/Skills/Aws.png'
import LoanAnalysisProfilePIcture from '../src/assets/Projects_Images/LoanProjectProfile.png'
import RenewableEnergyProfilePIcture from '../src/assets/Projects_Images/RenewableEnergy.png'
import AgricultureProfilePIcture from '../src/assets/Projects_Images/AgricultureProject.png'


//--------------------------------------------------------------
import StoryTellingLogo from '../src/assets/Skills/StoryTelling.png'
import BussinessAcumenLogo from '../src/assets/Skills/BussinessAcumen.png'
import CollaborationLogo from '../src/assets/Skills/Collaboration.png'
import CriticalThinkingLogo from '../src/assets/Skills/Criticalthinking.png'
import AttentionToDetailLogo from '../src/assets/Skills/AttentionToDetails.png'

// Education Logo
import KiitLogo from '../src/assets/Education/Kiit.png'
import KarimCityLogo from '../src/assets/Education/KarimCityLogo.png'
import MpsLogo from '../src/assets/Education/MpsLogo.png'

// JSON Skills Section 
export const SkillsInfo = [
  {
    title: 'Hard Skills',
    skills: [
      { name: 'Microsoft Excel', logo: ExcelLogo },
      { name: 'Power Bi', logo: PowerBiLogo },
      { name: 'Python', logo: PythonLogo },
      { name: 'Snowflake', logo: SnowFlakeLogo },
      { name: 'Sql Server', logo: SqlServerLogo },
      { name: 'Statistics', logo: StatisticsLogo },
      { name: 'Tableau', logo: TableauLogo },
      { name: 'Aws', logo: AwsLogo },
    ],
  },
  {
    title: 'Soft Skills',
    skills: [
      { name: 'Data Storytelling', logo: "" },
      { name: 'Critical Thinking', logo: "" },
      { name: 'Business Acumen', logo: "" },
      { name: 'Attention to Detail', logo: "" },
      { name: 'Probelm Solving', logo: "" },
      { name: 'Curiosity & Creativity', logo: "" },
    ],
  }
]
export const education = [
  {
    id: 0,
    img: KiitLogo,
    school: "Kiit University, Bhubaneswar",
    date: "April 2022 - April 2025",
    grade: "8.42 CGPA",
    desc: "I have completed my Bachelor of Computer Applications (BCA)  from Kiit University . During my time at Kiit, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Kiit University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachelor of Computer Applications (BCA)",
  },
  {
    id: 1,
    img: KarimCityLogo,
    school: "Karim City College (Mango Campus)",
    date: "October 2019 - March 2021",
    grade: "58%",
    desc: "I completed my class 12 education from Karim City College (Mango Campus),  under the JAC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "JAC(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: MpsLogo,
    school: "Madhusudhan Public School, Chakradharpur ",
    date: "Apr 2009 - March 2019",
    grade: "78.0%",
    desc: "I completed my class 10 education from , Madhusudhan Public School Chakradharpur  under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];
export const projects = [
  {
    id: 0,
    title: "🏦 Loan Analysis & Financial Risk Intelligence Ecosystem 📊",
    description:"Developed a comprehensive, end-to-end Business Intelligence solution to analyze loan distributions, applicant demographics, and financial risk. This project transforms raw transactional data from an on-premises SQL Server into an automated, high-performance reporting ecosystem within Microsoft Fabric and Power BI Service.",
    image: LoanAnalysisProfilePIcture,
    tags: ["Microsoft Sql Server","Microsoft Fabric (Dataflow Gen1)","Data Modeling & ETL","DAX","Power BI Desktop"],
    // github: "",
    fabriclink: "https://app.fabric.microsoft.com/links/-VBoS1okuv?ctid=4cd4cf7a-dd63-42c5-84ae-7a78944c55e9&pbi_source=linkShare",
  },
  {
    id: 1,
    title: "Renewable Energy Consumption: End-to-End Cloud Data Pipeline and Dashboard ",
    description:"Successfully architected and implemented a robust data pipeline to analyze global renewable energy trends. This project involved migrating raw data from AWS S3 into Snowflake via secure IAM integration, and ultimately visualizing key insights in Tableau.",
    image: RenewableEnergyProfilePIcture,
    tags: ["Cloud Storage & Security (AWS) ","Data Warehousing & Integration (Snowflake)"," Interactive Analytics (Tableau)","DAX","Power BI Desktop"],
    // github: "",
    fabriclink: "https://www.linkedin.com/in/roshan-gope-21228a247/details/projects/",
  },
  {
    id: 2,
    title: "🌾 End-to-End Agricultural Data Analytics Pipeline: From Cloud Storage to Insightful Dashboards 🚀",
    description:"Successfully architected and implemented  a comprehensive data analytics project that bridges the gap between raw cloud storage and actionable business intelligence in the Agriculture Sector. This project showcases a full-scale integration of AWS, Snowflake, and Power BI.",
    image: AgricultureProfilePIcture,
    tags: [" AWS (S3, IAM)","Snowflake (SQL, External Stages, Integrations)","SQL","Power BI Desktop"],
    // github: "",
    fabriclink: "https://www.linkedin.com/feed/update/urn:li:activity:7437564355933540352/",
  },
]