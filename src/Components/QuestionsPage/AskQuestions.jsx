import React from 'react'
import "./AskQuestions.css";
import { useFormik } from "formik";
import axios from "axios";
import { env } from '../config';
import { useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import { Link } from "react-router-dom";

function AskQuestions() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            title: "",
            question: "",
            tags: "",
            answer: "",
            votes: "",
            views: ""
        },
        validate: (values) => {
            let errors = {};

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
             await axios.post(`${env.api}/postquestions`, values);
            alert("Question Added Succesfully")
            navigate("/questions")
        }

    })
    return (
        <>
            <div className='container mt-5 mb-5'>
                <h3>Ask a Public Questions</h3>
            </div>

            <div className=' askform '>

                <form onSubmit={formik.handleSubmit}>
                    <div className='container col-lg-6 border askform shadow-sm p-3 mb-5 bg-body rounded'>
                        <div className="mt-1">
                            <label className='fw-bold fs-2'>Title</label><br />
                            <small>Be specific and imagine you’re asking a question to another person</small>
                            <input className={`form-control ${formik.errors.question ? `input-error` : ``}`}
                                type={"text"}
                                value={formik.values.question}
                                onChange={formik.handleChange}
                                name="question" />
                            <span style={{ color: 'red' }}>{formik.errors.question}</span>
                        </div>
                        <div className="mt-3">
                            <label className='fw bold'>Body</label><br />
                            <small>Include all the information someone would need to answer your question</small>

                            <div class="btn-group border " role="group" aria-label="First group">
                                <button type="button" class="btn btn-link text-secondary"> Links</button>
                                <button type="button" class="btn btn-link text-secondary"> Images</button>
                                <button type="button" class="btn btn-link text-secondary"> Styling / Headers</button>
                                <button type="button" class="btn btn-link text-secondary"> Lists</button>
                                <button type="button" class="btn btn-link text-secondary"> Code</button>
                                <button type="button" class="btn btn-link text-secondary"> Blockqoutes</button>
                                <button type="button" class="btn btn-link text-secondary"> Html</button>
                                <button type="button" class="btn btn-link text-secondary"> Tables</button>
                                <button type="button" class="btn btn-link "> More</button>
                            </div>
                            <div class="mb-3">
                                <textarea className={`form-control ${formik.errors.answer ? `input-error` : ``}`}
                                    name="answer" id="exampleFormControlTextarea1"
                                    rows="4"
                                    value={formik.values.answer}
                                    onChange={formik.handleChange}>
                                </textarea>
                                <span style={{ color: 'red' }}>{formik.errors.answer}</span>
                            </div>
                            <div className="mt-3">
                                <label className='fw-bold fs-2'>Tags</label><br />
                                <small>Add up to 5 tags to describe what your question is about</small>
                                <input className={`form-control ${formik.errors.tags ? `input-error` : ``}`}
                                    type={"text"}
                                    value={formik.values.tags}
                                    onChange={formik.handleChange}
                                    name="tags"
                                    placeholder='eg. c++,java,python' />
                                <span style={{ color: 'red' }}>{formik.errors.tags}</span>
                            </div>

                        </div>
                        <div className='mt-3'>
                            <button class="btn btn-primary" type={"submit"} value="Submit">Review Question</button>
                        </div>

                    </div>
                </form>

            </div>



        </>
    )
}

export default AskQuestions