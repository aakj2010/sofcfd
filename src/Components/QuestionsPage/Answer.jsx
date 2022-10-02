import axios from 'axios';
import "./AskQuestions.css";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { env } from '../config';
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function Answer() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            title:"",
            question: "",
            answer: ""
        },
        validate: (values) => {
            let errors = {};

            if (values.title === "") {
                errors.title = "Please Enter Title";
            }

            if (values.question === "") {
                errors.question = "Please Enter Title";
            }
            if (values.answer === '') {
                errors.answer = "Please Enter Description"
            }

            if (values.tags === "") {
                errors.tags = "Please Enter Tags";
            }

            return errors;
        },
        onSubmit: async (values) => {
            // let User = await axios.post("https://62fe35d041165d66bfbb1342.mockapi.io/Teachers", values);
            await axios.post(`${env.api}/postquestions`, values);
            alert("Question Added Succesfully")
            navigate("/questions")
        }

        
    })

    const params = useParams()
    console.log(params);

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(...searchParams);

    const [counter, setCounter] = useState(0)
    let Increament = () => {
        // Counter state is incremented
        setCounter(counter + 1)
    }
    let Decreament = () => {
        // Counter state is incremented
        setCounter(counter - 1)
    }

    const [answer, setAnswer] = useState({})

    useEffect(() => {
        try {
            loadAnswer();
        } catch (error) {
            console.log(error);
        }

    }, []);

    let loadAnswer = async () => {
        try {
            let answers = await axios.get(`${env.api}/answer/${params.id}`);
            console.log(answers);
            setAnswer(answers.data)
            console.log(answers.data);
        } catch (error) {

        }

    };


    return (

        <>
            <div className="container-fluid questions">
                <div className="d-inline-flex" style={{ margin: "0 8%" }}>
                    {/* Left Sidebar added */}
                    <div
                        className="questions--LeftSidebar col-md-2 border"
                        style={{ fontSize: "14px", overflowY: "scroll" }}
                    >
                        <LeftSidebar />
                    </div>
                    <div className='answer col-md-7 '>
                        <div className='mt-3 border shadow-sm' style={{ padding: "1rem", margin: "1rem" }}>
                            <h3 className='text-center'>{answer.question}</h3>
                        </div>

                        <div className='d-inline-flex'>
                            <div class="voting  mt-5" style={{ width: "4rem" }}>
                                {/* <!-- Up button --> */}
                                <button onClick={Increament} class="voting__button">
                                    <div class="voting__triangle voting__triangle--up"></div>
                                </button>

                                {/* <!-- Number --> */}
                                <div class="voting__number">{counter}</div>

                                {/* <!-- Down button --> */}
                                <button onClick={Decreament} class="voting__button">
                                    <div class="voting__triangle voting__triangle--down"></div>
                                </button>
                            </div>
                            <div className='mt-5 mx-5'>
                                <p>{answer.answer}</p>
                            </div>
                        </div>

                        <div className=' postanswer '>
                            <form onSubmit={formik.handleSubmit}>
                                <div className='container border ask shadow-sm p-3 mb-5 bg-body rounded'>
                                    <div className="mt-1">
                                        <label className='fw-bold fs-2'>Title</label><br />
                                        <small>Be specific and imagine you’re asking a question to another person</small>
                                        <input className={`form-control ${formik.errors.question ? `input-error` : ``}`}
                                            type={"text"}
                                            value={formik.values.question}
                                            onChange={formik.handleChange}
                                            name="title" />
                                        <span style={{ color: 'red' }}>{formik.errors.question}</span>
                                    </div>
                                    <div className="mt-3">
                                        <label className='fw bold'>Body</label><br />
                                        <small>Include all the information someone would need to answer your question</small>

                                        <div class="mb-3">
                                            <textarea className={`form-control ${formik.errors.answer ? `input-error` : ``}`}
                                                name="answer" id="exampleFormControlTextarea1"
                                                rows="4"
                                                value={formik.values.answer}
                                                onChange={formik.handleChange}>
                                            </textarea>
                                            <span style={{ color: 'red' }}>{formik.errors.answer}</span>
                                        </div>

                                    </div>
                                    <div className='mt-3'>
                                        <button class="btn btn-primary" type={"submit"} value="Submit">Post ur Answer</button>
                                    </div>

                                </div>
                            </form>
                        </div>

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
            {/* <br /> */}

        </>
    )
}

export default Answer