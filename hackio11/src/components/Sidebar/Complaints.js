import React from "react";
import "./Complaints.css";

function Complaints() {
  return (
    <div className="complaints-container">
      <h1 className="complaints-heading">Complaints</h1>
      <p className="complaints-text">
        If you have any complaints, please don't hesitate to contact us. We value your feedback and will do our best to address your concerns.
      </p>
      <form className="complaints-form">
        <label htmlFor="complaint" className="complaint-label">Your Complaint:</label>
        <textarea id="complaint" name="complaint" rows="4" cols="50" className="complaint-textarea"></textarea>
        <button type="submit" className="complaint-submit">Submit</button>
      </form>
    </div>
  );
}

export default Complaints;
