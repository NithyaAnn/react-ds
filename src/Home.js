import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // Uses props if passed, otherwise falls back to react-router-dom
    if (onNavigate) {
      onNavigate('lifecycle');
    } else {
      navigate('/lifecycle');
    }
  };

  const nonModelHighlights = [
    {
      title: "Data Engineering & Infrastructure",
      desc: "Before any model runs, scalable pipelines must be built to reliably ingest, clean, and validate millions of data points.",
      icon: "bi-diagram-3-fill text-info"
    },
    {
      title: "Exploratory Analysis & Business Intelligence",
      desc: "Many real-world challenges don't require ML. Often, statistical testing or a clear dashboard provides all the needed clarity.",
      icon: "bi-graph-up-arrow text-success"
    },
    {
      title: "Deployment & Operational Rigor",
      desc: "Integrating models into production software with low latency and real-time monitoring is where true business value is delivered.",
      icon: "bi-gear-wide-connected text-warning"
    }
  ];

  const pillars = [
    {
      title: "Mathematics & Statistics",
      tools: "Linear algebra, Probability, Hypothesis testing, Optimization",
      role: "Ensures analyses are mathematically sound and statistical inferences are valid.",
      icon: "bi-calculator text-primary"
    },
    {
      title: "Software & Systems",
      tools: "Python, R, SQL, Git, Docker, Cloud Platforms (AWS/GCP)",
      role: "Builds scalable pipelines, manages databases, and deploys solutions into production.",
      icon: "bi-terminal text-success"
    },
    {
      title: "Domain Expertise",
      tools: "Business operations, healthcare protocols, aviation, finance",
      role: "Frames the right questions, understands context, and translates data into strategy.",
      icon: "bi-briefcase text-warning"
    }
  ];

  return (
    <div className="bg-light min-vh-100 pb-5">
      
      {/* HERO SECTION */}
      <section className="bg-dark text-white py-5 shadow-sm">
        <div className="container py-4 text-center">
          <h1 className="display-4 fw-bold mb-3">
            Beyond the Hype: What Data Science Really Is
          </h1>
          <p className="lead text-light opacity-75 mx-auto mb-4" style={{ maxWidth: '800px' }}>
            At its core, Data Science is the art and engineering of turning raw, noisy data into actionable decisions. Every time Netflix recommends a show, a bank flags a suspicious credit card transaction, or a medical system detects early signs of illness, data science is doing the heavy lifting behind the scenes.
          </p>
          <div className="p-3 bg-secondary bg-opacity-25 rounded-3 d-inline-block border border-secondary border-opacity-50">
            <p className="mb-0 text-light small fw-medium">
              <i className="bi bi-diagram-3 me-2 text-warning"></i>
              Data science sits at the intersection of <strong>statistics</strong>, <strong>computer science</strong>, and <strong>domain expertise</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* WHY IT ISN'T JUST BUILDING MODELS */}
      <section className="container py-5">
        <div className="row justify-content-center text-center mb-4">
          <div className="col-lg-8">
            <h2 className="fw-bold">Why Data Science Isn't Just "Building Models"</h2>
            <p className="text-muted">
              A widespread misconception is that data science revolves entirely around training complex machine learning models. In reality, a model is only a small piece of a much larger engine.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {nonModelHighlights.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3 bg-white">
                <div className="card-body">
                  <div className="fs-1 mb-3">
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="py-5 bg-white border-top border-bottom">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-6">The Core Pillars</h2>
            <p className="text-muted">To succeed in data science, teams draw upon three foundational skill sets.</p>
          </div>

          <div className="row g-4">
            {pillars.map((pillar, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="card h-100 border-0 shadow-sm bg-light rounded-4">
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="display-5 mb-3">
                      <i className={`bi ${pillar.icon}`}></i>
                    </div>
                    <h5 className="fw-bold mb-2">{pillar.title}</h5>
                    <p className="text-muted small mb-3 flex-grow-1">{pillar.role}</p>
                    <div className="pt-3 border-top mt-auto">
                      <small className="text-secondary fw-semibold d-block mb-1">Key Tools & Concepts:</small>
                      <small className="text-dark fw-medium">{pillar.tools}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MERGED KEY TAKEAWAY & LIFECYCLE BANNER WITH ENLARGED BUTTON */}
      <section className="container mt-5">
        <div className="card bg-dark text-white border-0 shadow-lg rounded-4 p-4 p-md-5">
          <div className="row align-items-center">
            
            {/* LEFT TEXT CONTENT */}
            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill">
                  End-to-End Process
                </span>
              </div>

              <h3 className="fw-bold mb-2">Decision-making and value come first.</h3>
              <p className="text-light opacity-75 mb-0">
                Data science isn't just about algorithms; it's about decision-making and value creation. 
                High-performing data science teams prioritize domain understanding, data architecture, and 
                practical operational impact long before tuning hyper-parameters.
              </p>
            </div>

            {/* RIGHT ENLARGED CTA BUTTON WITH INTEGRATED BADGES */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <button 
                onClick={handleNavigate} 
                className="btn btn-primary w-100 p-4 rounded-4 shadow text-start border-0 position-relative hover-elevation transition-all"
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="fw-bold fs-4">Explore the 5-Step Lifecycle <u>here</u></span>
                  <i className="bi bi-arrow-right-circle-fill fs-2"></i>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-white bg-opacity-25 text-white border border-white border-opacity-25 py-2 px-3 fw-normal">
                    1. Problem Formulation
                  </span>
                  <span className="badge bg-white bg-opacity-25 text-white border border-white border-opacity-25 py-2 px-3 fw-normal">
                    2. Data Cleaning
                  </span>
                  <span className="badge bg-white bg-opacity-25 text-white border border-white border-opacity-25 py-2 px-3 fw-normal">
                    3. EDA
                  </span>
                  <span className="badge bg-white bg-opacity-25 text-white border border-white border-opacity-25 py-2 px-3 fw-normal">
                    4. Modeling
                  </span>
                  <span className="badge bg-white bg-opacity-25 text-white border border-white border-opacity-25 py-2 px-3 fw-normal">
                    5. Deployment
                  </span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;