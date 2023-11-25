/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";


const Resume = (props) => {
  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skills, setSkills] = useState([]);
  const [skillMessage, setSkillMessage] = useState("");

  useEffect(() => {
    if (props.data) {
      const { education, work, skills, skillmessage } = props.data;
      setEducation(education || []);
      setWork(work || []);
      setSkills(skills || []);
      setSkillMessage(skillmessage || "");
    }
  }, [props.data]);

  const renderEducation = education.map((edu) => (
    <div key={edu.school}>
      <h3>{edu.school}</h3>
      <p className="info">
        {edu.degree} <span>&bull;</span>
        <em className="date">{edu.graduated}</em>
      </p>
      <p>{edu.description}</p>
    </div>
  ));

  const renderWork = work.map((job) => (
    <div key={job.company}>
      <h3>{job.company}</h3>
      <p className="info">
        {job.title}
        <span>&bull;</span> <em className="date">{job.years}</em>
      </p>
      <p>{job.description}</p>
    </div>
  ));

  const renderSkills = skills.map((skill) => {
    const backgroundColor = getRandomColor();
    const className = `bar-expand ${skill.name.toLowerCase()}`;
    const width = skill.level;

    return (
      <li key={skill.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skill.name}</em>
      </li>
    );
  });

  return (
    <section id="resume">
      <Slide left duration={1300}>
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{renderEducation}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{renderWork}</div>
            </div>
          </div>
        </div>
      </Slide>

      <Slide left duration={1300}>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillMessage}</p>
            <div className="bars">
              <ul className="skills">{renderSkills}</ul>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default Resume;
