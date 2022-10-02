import React from "react";
import "./Questions.css";
import { Link } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import UserQuestions from "./UserQuestions";
import Pagination from "./Pagination";

function QuestionPage() {
  return (
    <>
    <div className="container-fluid questions">
      <div className="row" style={{ margin: "0 8%" }}>
        {/* Left Sidebar added */}
        <div
          className="questions--LeftSidebar col-md-2 border"
          style={{ fontSize: "14px", overflowY: "scroll" }}
        >
          <LeftSidebar />
        </div>
        <div
          className="questions--body col-md-7" 
        >
          <div>
            <div className="d-flex justify-content-between my-3">
              <h2 className="font-weight-normal" style={{ fontSize: "28px" }}>
                Top Questions
              </h2>
              <Link to="/ask_a_question"
                className="btn btn-primary btn-small"
                style={{ fontSize: "14px" }}
                size="sm"
                type = "button"
              >
                Ask Question
              </Link>
            </div>
          </div>
          <div className="d-flex justify-content-End">
            {/* <p style={{ fontSize: "16px" }}>22,058,922 questions</p> */}
            <div className="border" style={{ fontSize: "12px", lineHeight: "10px" }}>
              <button className="btn border-right active btn-secondary disabled">Interesting</button>
              <button className="btn  border-right"> 
                <small
                  className="bg-primary text-light px-1 rounded"
                  style={{ forntSize: "7px" }}
                >
                  252
                </small>&nbsp;
                 Bountied{" "}
              </button>
              <button className="btn border-right">Hot</button>
              <button className="btn border-right">Week</button>
              <button className="btn border-right">Month</button>
            </div>
          </div>
          <hr />
          {/* Users Questionsadded */}
          <UserQuestions />

          {/* Pagination added */}
          <Pagination />
        </div>

        {/* Right Sidebar added */}
        <div
          className="questions-rightSidebar col-md-3"
          style={{ fontSize: "12px", lineHeight: "10px" }}
        >
          <RightSidebar />
        </div>
      </div>
    </div>
  </>
  )
}

export default QuestionPage;