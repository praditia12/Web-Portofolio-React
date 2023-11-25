import { useState, useEffect } from 'react'
import './App.css'
import ReactGA from "react-ga";
import Header from "./Component/Header";
import About from "./Component/About";
import Resume from "./Component/Resume";
import Contacts from "./Component/Contacts";
import Portofolio from "./Component/Portofolio";
import Footer from "./Component/Footer";

function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);

    const getResumeData = async () => {
      try {
        const response = await fetch("./resumeData.json");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResumeData(data);
      } catch (error) {
        console.error("Error fetching resume data:", error);
        alert("Error fetching resume data. Please try again.");
      }
    };

    getResumeData();
  }, []);

  return (
    <>
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portofolio data={resumeData.portofolio} />
      <Contacts data={resumeData.main} />
      <Footer data={resumeData.main} />
    </>
  )
}

export default App
