import React from 'react';
import NavBar from '../NavBar/NavBar';
import portrait from '../../assets/Sarah_in_clouds_narrow.png';
import './PortfolioApp.css';

const featuredProjects = [
  {
    title: 'HardScope Creator Campaign Analytics',
    summary:
      'Built a creator analytics app that turns YouTube performance data into dashboards brand partnership teams can act on.',
    details: [
      'Flask and SQLite backend for ingestion, rollups, and analytics APIs',
      'React dashboard with trend views, top performers, and creator health signals',
      'Real YouTube Data API ingestion and automated backend tests'
    ],
    stack: 'Python, Flask, SQLite, React, Chart.js, REST APIs',
    link: 'https://github.com/Sarah0ravari/hardscope-creator-campaign-analytics'
  },
  {
    title: 'Mood Queue',
    summary:
      'Created an internal support tool for tracking mood trends so teams can spot operational friction earlier.',
    details: [
      'Streamlit interface for lightweight daily usage',
      'Google Sheets integration for simple shared storage',
      'Plotly charts for fast visibility into sentiment trends'
    ],
    stack: 'Python, Streamlit, Google Sheets API, Plotly',
    link: 'https://github.com/Sarah0ravari/mood-queue'
  },
  {
    title: 'MarsVision',
    summary:
      'Contributed to an open-source Mars surface feature detection library focused on applied computer vision for scientific exploration.',
    details: [
      'Worked with sliding-window image classification workflows',
      'Used PyTorch and Scikit-learn models for terrain detection',
      'Integrated planetary datasets for experimentation and evaluation'
    ],
    stack: 'Python, PyTorch, Scikit-learn, Scientific Data Pipelines',
    link: 'https://github.com/Sarah0ravari/marsvision-enhanced'
  }
];

const experienceHighlights = [
  'Software engineer and data-focused builder with experience across analytics systems, internal tools, and applied ML.',
  'Active in the Bay Area tech community and motivated by practical products that make messy data easier to use.',
  'Interested in software engineering, data engineering, machine learning, and analytics-driven product work.'
];

const skillGroups = [
  {
    heading: 'Languages',
    items: ['Python', 'SQL', 'Java', 'C++', 'C#', 'JavaScript']
  },
  {
    heading: 'Data and Cloud',
    items: ['BigQuery', 'Apache Spark', 'Airflow', 'Google Cloud', 'SQLite', 'Google Sheets API']
  },
  {
    heading: 'ML and Analytics',
    items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'Data Visualization', 'Experimentation']
  },
  {
    heading: 'Product and App',
    items: ['React', 'Flask', 'FastAPI', 'Streamlit', 'REST APIs', 'Dashboard Design']
  }
];

const credentials = [
  'Master’s thesis: Optimizing Solar Energy Efficiency Using Machine Learning Models (California State University, Northridge, 2024)',
  'Google Cloud Professional Data Engineer, in progress',
  'Engineer Data for Predictive Modeling with BigQuery ML Skill Badge',
  'AWS Academy Cloud Foundations'
];

const resumeSnapshot = [
  {
    heading: 'Target Roles',
    items: [
      'Software Engineer',
      'Data Engineer',
      'Machine Learning Engineer',
      'Analytics-Focused Product Builder'
    ]
  },
  {
    heading: 'Core Strengths',
    items: [
      'Building APIs, dashboards, and internal tools',
      'Turning raw or messy data into usable products',
      'Blending engineering execution with product thinking',
      'Working across analytics, cloud, and applied ML workflows'
    ]
  },
  {
    heading: 'What Recruiters Should Know',
    items: [
      'Based in the Bay Area, California',
      'Open to software, data, and ML-focused opportunities',
      'Active in open-source and technical community work',
      'Full resume available on request or through LinkedIn'
    ]
  }
];

function PortfolioApp() {
  return (
    <div className="appShell">
      <NavBar />
      <main>
        <section className="heroSection" id="home">
          <div className="heroCopy">
            <p className="eyebrow">Sarah (Sadaf) Draper</p>
            <h1>Software engineer for data products and tools.</h1>
            <div className="focusInline">
              <p className="focusLabel">Current focus</p>
              <p className="focusText">Analytics engineering, dashboards, and AI-powered product workflows</p>
            </div>
            <p className="heroText">
              I design practical software that turns raw data into dashboards, APIs, and workflows people can
              actually use. My work lives at the intersection of analytics, automation, and applied machine
              learning.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="#projects">
                View Projects
              </a>
              <a className="secondaryButton" href="https://www.linkedin.com/in/sadaf-draper/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="secondaryButton" href="https://github.com/Sarah0ravari" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
            <div className="heroStats">
              <div>
                <strong>Bay Area, CA</strong>
                <span>Open to software, data, and ML-focused roles</span>
              </div>
              <div>
                <strong>23 public repos</strong>
                <span>Projects across analytics, apps, ML, and open source</span>
              </div>
            </div>
          </div>
          <div className="heroVisual">
            <div className="portraitFrame">
              <img alt="Sarah Draper portrait" src={portrait} />
            </div>
          </div>
        </section>

        <section className="sectionBlock" id="about">
          <div className="sectionHeading">
            <p className="sectionLabel">About</p>
            <h2>Building software that makes data easier to trust and easier to act on.</h2>
          </div>
          <div className="aboutGrid">
            <div className="aboutPanel">
              <p>
                My background spans analytics systems, cloud platforms, open-source collaboration, and machine
                learning. I like building tools that simplify messy workflows and give teams clearer signals for
                decision-making.
              </p>
              <p>
                The projects I enjoy most combine technical depth with product thinking: ingesting real data,
                shaping it into something reliable, and presenting it in a way that helps people move faster.
              </p>
            </div>
            <div className="highlightList">
              {experienceHighlights.map((item) => (
                <div className="highlightCard" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sectionBlock" id="projects">
          <div className="sectionHeading">
            <p className="sectionLabel">Featured Work</p>
            <h2>Projects that show how I think across engineering, analytics, and product delivery.</h2>
          </div>
          <div className="projectGrid">
            {featuredProjects.map((project) => (
              <article className="projectCard" key={project.title}>
                <p className="projectTag">{project.stack}</p>
                <h3>{project.title}</h3>
                <p className="projectSummary">{project.summary}</p>
                <ul>
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View repository
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="sectionBlock" id="skills">
          <div className="sectionHeading">
            <p className="sectionLabel">Skills</p>
            <h2>A blend of software engineering, analytics, and machine learning experience.</h2>
          </div>
          <div className="skillsGrid">
            {skillGroups.map((group) => (
              <div className="skillCard" key={group.heading}>
                <h3>{group.heading}</h3>
                <div className="pillRow">
                  {group.items.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sectionBlock" id="resume">
          <div className="sectionHeading">
            <p className="sectionLabel">Resume</p>
            <h2>A public-safe snapshot of my experience without exposing personal information.</h2>
          </div>
          <div className="resumeGrid">
            {resumeSnapshot.map((group) => (
              <div className="resumeCard" key={group.heading}>
                <h3>{group.heading}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="resumeNote">
            <p>
              This site intentionally shows only public, recruiter-relevant information. Direct contact details,
              private documents, and other personal information are not displayed here.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="https://www.linkedin.com/in/sadaf-draper/" target="_blank" rel="noreferrer">
                View LinkedIn Profile
              </a>
              <a className="secondaryButton" href="https://github.com/Sarah0ravari" target="_blank" rel="noreferrer">
                Review GitHub Work
              </a>
            </div>
          </div>
        </section>

        <section className="sectionBlock" id="credentials">
          <div className="sectionHeading">
            <p className="sectionLabel">Credentials</p>
            <h2>Academic work, certifications, and evidence of continued learning.</h2>
          </div>
          <div className="credentialsLayout">
            <div className="credentialCard">
              <h3>Publication</h3>
              <p>
                Master’s thesis on improving solar energy efficiency using GRU, LSTM, and CNN models.
              </p>
              <a
                href="https://scholarworks.calstate.edu/concern/file_sets/7p88cr18f"
                target="_blank"
                rel="noreferrer"
              >
                Read publication
              </a>
            </div>
            <div className="credentialCard">
              <h3>Certifications and Training</h3>
              <ul>
                {credentials.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="contactStrip" id="contact">
          <div>
            <p className="sectionLabel">Let’s Connect</p>
            <h2>Available for roles where software, analytics, and product thinking come together.</h2>
          </div>
          <div className="contactActions">
            <a className="primaryButton" href="https://www.linkedin.com/in/sadaf-draper/" target="_blank" rel="noreferrer">
              Message on LinkedIn
            </a>
            <a className="secondaryButton" href="https://github.com/Sarah0ravari" target="_blank" rel="noreferrer">
              Explore GitHub
            </a>
            <a className="secondaryButton" href="https://www.kaggle.com/sarahriravari" target="_blank" rel="noreferrer">
              Kaggle
            </a>
            <a className="secondaryButton" href="https://www.youtube.com/@DailyDataHero" target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a className="secondaryButton" href="https://www.linkedin.com/company/dailydatahero/" target="_blank" rel="noreferrer">
              DailyDataHero
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PortfolioApp;
