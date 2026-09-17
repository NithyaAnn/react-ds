import React from 'react';

const Later = ({ onNavigate }) => {
  return (
    <div className="bg-light min-vh-100">

      THIS PAGE IS LIKE THE DOCUMENTATION & REQTS FOR THE ENTIRE APP
      <br/>
      Things remaining:
      <br/>
      Lifecycle page content
      <br/>
      Case Study content then - model running page
      <hr/>
      <h1>For Lifecycle page</h1>
  
      <br></br>

      <h1>For Case Study Page</h1>
      A top header/hero describing the project in short. 
      * step 1: Problem formulation //Include the answers from chat keep as carousels or slides.
      <br/>slide 1 in carousel - The Domain, <br/>slide 2 in carousel - 
      Business Objectives, <br/>slide 3 - Open ended qns
      <br/>
      * step 2: clearly mention steps done and attach scnshots for the matter.
      our dataset link: https://www.kaggle.com/datasets/johndddddd/customer-satisfaction. 
      .... xls format so use read_excel() function. 

      Data cleaning & Preparation:
      Inspecting srructure & datatypes: shape attribute gives (129880,23) meaning there are 129880 rows and 23 columns initially in the dataset.
      head() - understood that id is not a contributing factor hence drop it.
      //gpt answer to be attached as slides may be.
      Meaning of head(), tail() and sample() very short one-line stmts.<br/>
      info() - gives a quick overview - column, along with number of non-null values, 
      datatype etc are seen there.

      In our dataset, datatype conversions reqd. Plus Arrival Delay in Minutes has null values, so data cleaning reqd. Taking Departure Delay in minutes. Showing that DS is iterative in nature.
      <br/> valuecounts(), 2 categories explain it. 
      <br/> nunique 6 for majority bcz ratings 0,1,2,3,4,5. 
    </div>
  );
};

export default Later;