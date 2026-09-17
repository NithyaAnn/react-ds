function CaseStudy(){
    return(
        <div>
            {/* 3. FEATURED CASE STUDY PREVIEW */}
      <section id="case-study" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Project Walkthrough</h2>
          <p className="text-muted">Learn by exploring a real-world machine learning problem</p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow rounded-4 overflow-hidden">
              <div className="row g-0 align-items-center">
                <div className="col-md-5 bg-primary text-white p-4 p-lg-5 text-center">
                  <i className="bi bi-airplane-engines display-1 mb-3 d-block"></i>
                  <h3 className="fw-bold">Airline Satisfaction</h3>
                  <span className="badge bg-warning text-dark px-3 py-2 mt-2">120k+ Records</span>
                </div>
                <div className="col-md-7 p-4 p-lg-5">
                  <h4 className="fw-bold mb-3">Predicting Passenger Loyalty & Experience</h4>
                  <p className="text-muted mb-4">
                    Walk step-by-step through exploratory data analysis, feature selection, and model training in Python, culminating in an interactive React deployment.
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    <span className="badge bg-light text-dark border">Scikit-Learn</span>
                    <span className="badge bg-light text-dark border">XGBoost</span>
                    <span className="badge bg-light text-dark border">React</span>
                    <span className="badge bg-light text-dark border">ONNX / API</span>
                  </div>
                  <button 
                    onClick={() => onNavigate && onNavigate('case-study')} 
                    className="btn btn-outline-primary fw-bold"
                  >
                    Start Tutorial & Case Study <i className="bi bi-box-arrow-up-right ms-1"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
        
    );
}
export default CaseStudy;