import React from "react";
import "./App.css";

function App() {
  type Project = {
    name: string;
    description: string;
    github: string;
  };

  type Education = {
    logo: string;
    schoolName: string;
    degree: string;
    startYear: number;
    endYear: number;
    gpa: number;
  };

  type Skill = {
    name: string;
    logo: string;
  };

  type Experience = {
    name: string;
    jobTitle: string;
    companylogo: string;
    startYear: number;
    endYear: number;
    description: string;
  };

  const name: string = "Sanjay Sakthivel";
  const titles: string[] = ["CS Graduate Student", "Full Stack Developer", "Problem Solver"];
  const description: string = `
I’m a Master’s in CS student at Illinois Institute of Technology with 2+ years of experience as a full-stack Java developer, specializing in building AI-integrated, scalable web and mobile applications. At LTIMindtree, I developed modular Spring Boot microservices and refactored Angular codebases to improve performance, cutting API latency and post-release bugs.
I've built and contributed to projects like QuantiLearn (adaptive e-learning with Kafka & Redis), Safe Link (AI-assisted safety with Gemini), and Fair Share (OpenAI-powered expense manager). I won “Best use of MongoDB Atlas” at Uncommon Hacks. I’m passionate about backend architecture, real-time systems, and applying AI to improve user workflows.
  `;

  const educations: Education[] = [
    {
      logo: "🎓",
      schoolName: "Illinois Institute of Technology, Chicago, IL",
      degree: "Master’s in Computer Science",
      startYear: 2024,
      endYear: 2025,
      gpa: 3.77,
    },
    {
      logo: "🎓",
      schoolName: "St. Joseph’s Institute of Technology, Chennai, India",
      degree: "B.E. in Computer Science & Engineering",
      startYear: 2017,
      endYear: 2021,
      gpa: 3.38,
    },
  ];

  const skills: Skill[] = [
    { name: "Java", logo: "☕" },
    { name: "JavaScript", logo: "🟨" },
    { name: "TypeScript", logo: "🟦" },
    { name: "Python", logo: "🐍" },
    { name: "Angular", logo: "🅰️" },
    { name: "React / React Native", logo: "⚛️" },
    { name: "Spring Boot", logo: "🌱" },
    { name: "Node.js / Express", logo: "🟩" },
    { name: "MySQL", logo: "🗄️" },
    { name: "PostgreSQL", logo: "🐘" },
    { name: "MongoDB", logo: "🍃" },
    { name: "Redis", logo: "🧠" },
    { name: "Kafka", logo: "🧩" },
    { name: "AWS (EC2, S3, RDS)", logo: "☁️" },
    { name: "Docker", logo: "🐳" },
    { name: "Jenkins", logo: "🧰" },
    { name: "Maven", logo: "🧪" },
    { name: "OpenAI API / Gemini API", logo: "🤖" },
  ];

  const experiences: Experience[] = [
    {
      name: "LTIMindtree",
      jobTitle: "Software Engineer – Full Stack Java Developer",
      companylogo: "🏢",
      startYear: 2021,
      endYear: 2023,
      description:
        "Resolved production bugs to cut downtime ~20%. Automated 1K+ daily report emails (-80% manual effort). Delivered 15+ features across 10 Agile sprints. Practiced TDD (JUnit/Mockito) to reduce defects ~15%. Maintained 10K+ Angular LOC; halved release cycles and cut UI regressions ~40% via modularization.",
    },
    {
      name: "Illinois Institute of Technology",
      jobTitle: "Teaching Assistant – UI/UX",
      companylogo: "🏫",
      startYear: 2025,
      endYear: 2025,
      description:
        "Mentored 80+ students; improved design comprehension by 30% and assignment scores by 25%.",
    },
    {
      name: "Headstarter",
      jobTitle: "Software Engineering Fellow",
      companylogo: "🧑‍💻",
      startYear: 2024,
      endYear: 2024,
      description:
        "Built 2 AI-integrated apps with Next.js and OpenAI; automated workflows and enhanced UX.",
    },
  ];

  const projects: Project[] = [
    {
      name: "Safe Link",
      description:
        "React Native + Node.js + Firebase + Gemini API. Real-time safety checklists that boost crisis readiness.",
      github: "https://github.com/sanjay872/SafeLink",
    },
    {
      name: "QuantiLearn",
      description:
        "Spring Boot + PostgreSQL + Kafka + Redis. Adaptive e-learning with sub-second progress tracking.",
      github: "https://github.com/sanjay872/QuantiLearn",
    },
    {
      name: "GadgetHive",
      description:
        "Angular + Spring Boot + MySQL + AWS. CI/CD with Jenkins & AWS for zero-downtime deploys.",
      github: "https://github.com/sanjay872/GadgetHive",
    },
    {
      name: "Fair Share",
      description:
        "React Native + Node.js + Firebase + OpenAI. AI-assisted group expense splitting; reduced effort ~40%.",
      github: "https://github.com/sanjay872/FairShare",
    },
    {
      name: "FinQuest",
      description:
        "Next.js + Node.js + MongoDB. Finance quiz game with adaptive logic; increased user retention ~25%.",
      github: "https://github.com/sanjay872/finquest",
    },
    {
      name: "Dyscalculia Helper",
      description:
        "Angular + Flask (Python) + MySQL. Voice-enabled accessibility app for neurodivergent students.",
      github: "https://github.com/sanjay872/DyscalculiaHelperApp",
    },
  ];

  return (
    <div className="portfolio">
      <div className="about card">
        <div className="about_name">{name}</div>
        <div className="about_title">
          {titles.map((title, idx) => {
            return (
              <div className="about_title-item" key={idx}>
                {title}
              </div>
            );
          })}
        </div>
        <div className="about_links">
          <a href="mailto:sanjaysakthivel2000@gmail.com">sanjaysakthivel2000@gmail.com</a>
          <a href="tel:+13124519963">(312) 451-9963</a>
          <a href="https://www.linkedin.com/in/sanjaysakthivel" target="_blank" rel="noreferrer">
            linkedin.com/in/sanjaysakthivel
          </a>
          <a href="https://github.com/sanjay872" target="_blank" rel="noreferrer">
            github.com/sanjay872
          </a>
        </div>
        <div className="about_description">{description}</div>
      </div>

      <div className="educations card">
        <div className="section-title">Education</div>
        <div className="edu-list">
          {educations.map((education, idx) => {
            return (
              <div className="educations_card" key={idx}>
                <div className="educations_card-logo">{education.logo}</div>
                <div className="educations_card-info">
                  <div className="educations_card-schoolname">{education.schoolName}</div>
                  <div className="educations_card-degree">{education.degree}</div>
                  <div className="educations_card-year">
                    {education.startYear} – {education.endYear}
                  </div>
                  <div className="educations_card-gpa">GPA: {education.gpa}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="skills card">
        <div className="section-title">Skills</div>
        <div className="skills-grid">
          {skills.map((skill, idx) => {
            return (
              <div className="skills_item" key={idx} title={skill.name}>
                <div className="skills_item-logo">{skill.logo}</div>
                <div className="skills_item-name">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="experiences card">
        <div className="section-title">Experience</div>
        <div className="exp-list">
          {experiences.map((experience, idx) => {
            return (
              <div className="experiences_card" key={idx}>
                <div className="experiences_card-logo">{experience.companylogo}</div>
                <div className="experiences_card-info">
                  <div className="experiences_card-header">
                    <div className="experiences_card-jobtitle">{experience.jobTitle}</div>
                    <div className="experiences_card-year">
                      {experience.startYear} – {experience.endYear}
                    </div>
                  </div>
                  <div className="experiences_card-company">{experience.name}</div>
                  <div className="experiences_card-description">{experience.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="projects card">
        <div className="section-title">Projects</div>
        <div className="projects-grid">
          {projects.map((project, idx) => {
            return (
              <div className="projects_card" key={idx}>
                <div className="project_card-title">{project.name}</div>
                <div className="project_card-description">{project.description}</div>
                <a className="project_card-github" href={project.github} target="_blank" rel="noreferrer">
                  View on GitHub →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
