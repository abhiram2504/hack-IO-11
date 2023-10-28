function Complaints() {
  return (
    <div>
      <h1>Complaints</h1>
      <p>
        If you have any complaints, please don't hesitate to contact us. We value your feedback and will do our best to address your concerns.
      </p>
      <form>
        <label htmlFor="complaint">Your Complaint:</label>
        <textarea id="complaint" name="complaint" rows="4" cols="50"></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
