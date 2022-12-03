import "./App.css";
import { useState } from "react";
import Question from "./Question/Question.jsx";
import Questions from "./data.js";

function App() {
  const [data, setdata] = useState(Questions);
  return (
    <>
      <div className=" w-75 m-auto bg-white shadow-lg mt-5 p-5 rounded">
        <div className="row">
          <div className="col-md-3 mt-3">
            <div className="item">
              <h3>Questions And Answers About Login</h3>
            </div>
          </div>
          <div className="col-md-9">
            <div className="item">
              {data.map((ques) => {
                return <Question {...ques} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
