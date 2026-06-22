import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <h1>Student Profile Dashboard</h1>

      <div className="students">
        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Rahul"
          />
          <h2>Rahul Sharma</h2>
          <p>Course: B.Tech CSE</p>
          <p>Year: 3rd Year</p>
          <p>CGPA: 8.7</p>
        </div>

        <div className="card">
          <img
            src="https://via.placeholder.com/150"
            alt="Priya"
          />
          <h2>Priya Singh</h2>
          <p>Course: BCA</p>
          <p>Year: 2nd Year</p>
          <p>CGPA: 9.1</p>
        </div>
      </div>
    </div>
  );
}

export default App;