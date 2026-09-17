import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lifecycle = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate('case-study');
    } else {
      navigate('/case-study');
    }
  };

  const lifecycleSteps = [
    {
      num: "1",
      title: "Problem Formulation",
      desc: (
        <div>
          <p className="mb-3">
            Effective problem framing connects business strategy with data exploration by establishing clear context before writing code:
          </p>
          
          <p className="mb-2">
            <strong>• Domain Understanding:</strong> Gain a comprehensive grasp of the industry ecosystem, operational workflows, and passenger touchpoints. Without understanding how the domain operates, you risk building mathematically sound models that solve the wrong real-world problems.
          </p>

          <p className="mb-2">
            <strong>• Defining Business Objectives:</strong> Shift the focus away from abstract metrics like <em>"predicting satisfaction"</em> toward measurable operational goals. Framing questions around actionable business outcomes—such as <em>"How can we reduce churn among premium passengers over the next 90 days?"</em>—ensures your technical outputs deliver tangible value.
          </p>

          <p className="mb-0">
            <strong>• Asking Open-Ended Questions:</strong> Formulate broad, curiosity-driven hypotheses regarding user friction, service gaps, and operational bottlenecks. Interrogating the problem space early guides what specific data features need to be collected, aggregated, or engineered in later stages.
          </p>
        </div>
      ),
    },
    {
      num: "2",
      title: "Data Collection & Cleaning",
      desc: (
        <div>
          <p className="mb-3">
            The business objective defined in Step 1 guides the collection of the right data. Often taking up to <strong>80% of the total engineering effort</strong>, real-world data is inherently messy, incomplete, and inconsistently formatted.
          </p>

          <h6 className="fw-bold text-dark mt-3 mb-2">1. Data Collection</h6>
          <p className="mb-2">
            Data collection is the systematic process of gathering, measuring, and acquiring raw information from primary or secondary sources to train models, test hypotheses, and drive decisions.
          </p>

          <ul className="list-unstyled ms-2 mb-3">
            <li className="mb-1">
              <strong>• Core Methods of Collection:</strong>
              <ul className="ps-3 mt-1 text-muted">
                <li><strong>APIs & Web Scraping:</strong> Pulling live data from web pages or software endpoints automatically.</li>
                <li><strong>Databases & Logs:</strong> Extracting historical records from SQL/NoSQL databases or server logs.</li>
                <li><strong>IoT & Streaming:</strong> Gathering continuous live inputs from smart devices and physical sensors.</li>
                <li><strong>Surveys & Experiments:</strong> Designing user questionnaires or A/B tests for human-centric metrics.</li>
              </ul>
            </li>
            <li className="mb-1 mt-2">
              <strong>• Data Types & Sources:</strong>
              <ul className="ps-3 mt-1 text-muted">
                <li><strong>Quantitative vs. Qualitative:</strong> Numerical values (prices, counts, delays) vs. descriptive text, audio, or video logs.</li>
                <li><strong>Primary vs. Secondary:</strong> First-hand internal tracking vs. pre-existing public or third-party datasets.</li>
              </ul>
            </li>
            <li className="mb-1 mt-2">
              <strong>• Best Practices & Challenges:</strong>
              <ul className="ps-3 mt-1 text-muted">
                <li><strong>Data Quality:</strong> Eliminating missing values, noise, and collection errors early.</li>
                <li><strong>Ethics & Privacy:</strong> Complying with regulations (like GDPR) through data anonymization.</li>
                <li><strong>Scalability:</strong> Managing high-volume data streams without crashing infrastructure.</li>
              </ul>
            </li>
          </ul>

          <h6 className="fw-bold text-dark mt-3 mb-2">2. Data Cleaning & Preparation</h6>
          <p className="mb-2">
            Raw datasets are rarely model-ready upon retrieval. Essential data cleaning tasks include:
          </p>
          <ul className="ps-3 mb-0 text-muted">
            <li>Inspecting structure and data types using functions and packages like Pandas (<code>df.info()</code>, <code>df.describe()</code>, <code>df.isnull()</code>).</li>
            <li>Checking, dropping, or filtering unwanted and duplicate values.</li>
            <li>Replacing missing or unknown values using imputation techniques (mean, median, mode, or model-based filling).</li>
            <li>Stripping anomalies, outliers, and fixing inconsistent string formats.</li>
          </ul>
        </div>
      ),
    },
    {
      num: "3",
      title: "Exploratory Data Analysis (EDA)",
      desc: (
        <div>
          <p className="mb-3">
            Using statistical summaries and visual plots, analysts explore data distributions, uncover hidden correlations, and test initial hypotheses. Insights uncovered during EDA often solve business problems directly without requiring complex machine learning models.
          </p>

          <h6 className="fw-bold text-dark mt-3 mb-2">1. Key Analysis Techniques</h6>
          <p className="mb-2">
            EDA relies on multi-layered statistical methods to systematically inspect data across different dimensions and scales:
          </p>

          <ul className="list-unstyled ms-2 mb-3">
            <li className="mb-1">
              <strong>• Analytical Scopes:</strong>
              <ul className="ps-3 mt-1 text-muted">
                <li><strong>Univariate Analysis:</strong> Examining individual feature distributions, central tendencies, and skewness.</li>
                <li><strong>Outlier Detection:</strong> Spotting anomalous data points, entry errors, or extreme variations that distort metrics.</li>
                <li><strong>Multivariate Analysis:</strong> Understanding complex relationships, dependencies, and feature interactions using heatmaps and scatter matrices.</li>
              </ul>
            </li>
          </ul>

          <h6 className="fw-bold text-dark mt-3 mb-2">2. Iterative Lifecycle Integration</h6>
          <p className="mb-2">
            EDA is not a linear dead-end—findings at this stage serve as an active feedback loop for the entire pipeline:
          </p>
          <ul className="ps-3 mb-0 text-muted">
            <li>Revealing data gaps, bias, or unfeasible goals, which requires a loop back to <strong>Step 1 (Problem Formulation)</strong> to refine business objectives.</li>
            <li>Identifying missing transformations or dirty features, requiring a return to <strong>Step 2 (Data Collection & Cleaning)</strong> for further feature engineering.</li>
          </ul>

          <h6 className="fw-bold text-dark mt-3 mb-2">3. Case Study: Non-Predictive & Exploratory Datasets</h6>
          <p className="mb-2">
            Not all datasets are meant for predictive modeling. A prime example is the <a href="https://www.kaggle.com/datasets/truecue/worldsustainabilitydataset" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-underline">Kaggle World Sustainability Dataset</a> (compiled by TrueCue):
          </p>
          <ul className="ps-3 mb-0 text-muted">
            <li><strong>Clean Yet Non-Predictive Data:</strong> Even when a dataset is clean and structured, the underlying domain metrics (e.g., global environmental indices, socio-economic metrics across countries) may represent complex observational time-series where training a standard ML model is either unfeasible or statistically invalid.</li>
            <li><strong>EDA as the End Deliverable:</strong> In these scenarios, the goal of data science shifts away from model training toward rigorous <strong>correlation analysis, hypothesis testing, and trend visualization</strong>. The exploratory insights themselves—such as identifying global metric trade-offs or temporal shifts—deliver the final decision-making value to stakeholders without requiring Machine Learning.</li>
          </ul>
        </div>
      ),
    },
    {
      num: "4",
      title: "Modeling & Machine Learning",
      desc: (
        <div>
          <p className="mb-3">
            When predictive power is required, machine learning algorithms perform pattern recognition at scale by analyzing high-dimensional historical features to uncover complex, non-linear relationships and automate decision-making across massive datasets.
          </p>

          <h6 className="fw-bold text-dark mt-3 mb-2">1. Data Splitting & Screening</h6>
          <p className="mb-2">
            To build robust models that generalize well to unseen real-world scenarios, the dataset is systematically partitioned and benchmarked:
          </p>

          <ul className="list-unstyled ms-2 mb-3">
            <li className="mb-1">
              <strong>• Splitting Frameworks:</strong>
              <ul className="ps-3 mt-1 text-muted">
                <li><strong>Train-Test Split:</strong> Partitioning data into training sets (to learn patterns) and test sets (to evaluate unbiased performance).</li>
                <li><strong>Algorithm Screening:</strong> Utilizing a lower dimensional representation of the training data to benchmark multiple algorithm families quickly and identify which models are expected to work best.</li>
              </ul>
            </li>
          </ul>

          <h6 className="fw-bold text-dark mt-3 mb-2">2. Algorithm Selection & Optimization</h6>
          <p className="mb-2">
            Data scientists evaluate a spectrum of algorithms based on data complexity, interpretability requirements, and scale constraints:
          </p>
          <ul className="ps-3 mb-0 text-muted">
            <li>Ranging from linear models (Linear/Logistic Regression) to ensemble methods (Random Forest, XGBoost) and Deep Neural Networks.</li>
            <li>Tuning hyper-parameters and optimizing evaluation metrics (such as Precision, Recall, ROC-AUC, or RMSE) to align with core business priorities.</li>
          </ul>
        </div>
      ),
    },
    {
      num: "5",
      title: "Deployment & Monitoring",
      desc: (
        <div>
          <p className="mb-3">
            A machine learning model creates operational value only when integrated into live software systems. Continuous deployment ensures models serve real-time predictions while <strong>production feedback loops</strong> guard against degradation as real-world conditions evolve.
          </p>

          <h6 className="fw-bold text-dark mt-3 mb-2">1. System Integration & Serving</h6>
          <p className="mb-2">
            Transitioning models from local development environments into scalable software architectures:
          </p>

          <ul className="list-unstyled ms-2 mb-3">
            <li className="mb-1">
              <strong>• Production Delivery:</strong>
              <ul className="ps-3 mt-1 text-muted">
                <li><strong>APIs & Microservices:</strong> Exposing model endpoints (via REST or gRPC) for seamless consumption by web apps, mobile clients, or backend services.</li>
                <li><strong>Batch vs. Real-Time Pipelines:</strong> Deploying for low-latency point predictions or scheduled large-scale batch processing.</li>
              </ul>
            </li>
          </ul>

          <h6 className="fw-bold text-dark mt-3 mb-2">2. Monitoring & Model Governance</h6>
          <p className="mb-2">
            Post-deployment maintenance to ensure reliability, accuracy, and operational health over time:
          </p>
          <ul className="ps-3 mb-0 text-muted">
            <li><strong>Data & Concept Drift:</strong> Tracking shift in feature distributions and prediction decay as underlying real-world behaviors change.</li>
            <li><strong>Automated Retraining Loops:</strong> Triggering pipeline re-runs with fresh data to refresh model weights and maintain peak accuracy.</li>
          </ul>
        </div>
      ),
    }
  ];

  return (
    <div className="bg-light min-vh-100 pb-5">
      
      {/* MERGED DARK HERO & VISUAL PIPELINE OVERVIEW */}
      <section className="bg-dark text-white py-5 shadow-sm mb-5">
        <div className="container py-4 text-center">
          <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill mb-3 px-3 py-2 fs-6">
            End-to-End Pipeline
          </span>
          <h1 className="display-4 fw-bold mb-3">
            The Data Science Lifecycle
          </h1>
          
          <div className="p-3 bg-secondary bg-opacity-25 rounded-3 d-inline-block border border-secondary border-opacity-50 mb-5">
            <p className="mb-0 text-light small fw-medium">
              <i className="bi bi-arrow-repeat me-2 text-warning"></i>
              Data science is <strong>iterative</strong> — insights gained at step 5 often refine the goals defined in step 1.
              The image below shows how raw data is converted to insights. The main steps for it are also detailed just beneath the image.
            </p>
          </div>

          {/* EMBEDDED PIPELINE IMAGE CARD */}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="p-3 bg-secondary bg-opacity-10 rounded-4 border border-secondary border-opacity-25">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                  alt="Data Science Lifecycle Overview" 
                  className="img-fluid rounded-3 shadow-lg border border-secondary border-opacity-25"
                  style={{ maxHeight: '420px', width: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE STEPS SECTION */}
      <section className="container">
        <div className="row g-4 justify-content-center">
          {lifecycleSteps.map((step) => (
            <div className="col-lg-10" key={step.num}>
              <div className="card border-0 shadow-sm rounded-4 bg-white overflow-hidden">
                <div className="card-body p-4 d-md-flex align-items-start gap-4">

                  <div className="flex-grow-1">
                    <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                      <h4 className="fw-bold mb-0">{step.num}. {step.title}</h4>
                    </div>
                    <div className="text-muted mb-0">{step.desc}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER: CASE STUDY NAVIGATION */}
      <section className="container mt-5">
        <div className="card bg-dark text-white border-0 shadow-lg rounded-4 p-4 p-md-5">
          <div className="row align-items-center">
            
            {/* LEFT TEXT CONTENT */}
            <div className="col-lg-6">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill">
                  Practical Application
                </span>
              </div>

              <h3 className="fw-bold mb-2">See the Lifecycle in Action</h3>
              <p className="text-light opacity-75 mb-0">
                Theory is best understood through real-world examples. Explore how this 5-step lifecycle is applied to analyze 120k+ passenger records and predict airline loyalty in our interactive case study.
              </p>
            </div>

            {/* RIGHT ENLARGED CTA BUTTON */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <button 
                onClick={() => window.open('https://colab.research.google.com/drive/13gayaWtmMCIpuxS_xQ_hh1wnYZXVyKmU?usp=sharing', '_blank', 'noopener,noreferrer')} 
                className="btn btn-primary w-100 p-4 rounded-4 shadow text-start border-0 position-relative transition-all"
              >
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <span className="fw-bold fs-4">Explore the Airline Case Study <u>here</u></span>
                  <i className="bi bi-box-arrow-up-right fs-3"></i>
                </div>

                <div className="d-flex flex-wrap gap-2">
                  <span className="badge bg-white bg-opacity-25 text-white border border-white border-opacity-25 py-2 px-3 fw-normal">
                    <i className="bi bi-airplane me-1"></i> Airline Satisfaction
                  </span>
                  <span className="badge bg-white bg-opacity-25 text-white border border-white border-opacity-25 py-2 px-3 fw-normal">
                    120k+ Records
                  </span>
                  <span className="badge bg-white bg-opacity-25 text-white border border-white border-opacity-25 py-2 px-3 fw-normal">
                    Google Colab
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

export default Lifecycle;