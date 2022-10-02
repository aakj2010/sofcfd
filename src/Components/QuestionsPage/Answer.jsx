import axios from 'axios';
import "./AskQuestions.css";
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { env } from '../config';
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function Answer() {

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
            loaduser();
        } catch (error) {
            console.log(error);
        }

    }, []);

    let loaduser = async () => {
        try {
            let answers = await axios.get(`${env.api}/answer/${params.id}`);
            console.log(answers);
            setAnswer(answers.data)
            console.log(answers.data);
        } catch (error) {

        }
    };
    return (
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
                    <div className='mt-3'>
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
    )
}

export default Answer