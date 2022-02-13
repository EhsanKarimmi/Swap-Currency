import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiSettings } from "react-icons/fi";
import { FaBtc, FaEthereum } from "react-icons/fa";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import Modal from "./Components/Modal";
import { Col } from "reactstrap";

function App() {
    const [balanceOne, setBalanceOne] = useState(100);
    const [balanceTwo, setBalanceTwo] = useState(0);
    const [inputOne, setInputOne] = useState();
    const [inputTwo, setInputTwo] = useState();
    const [modalShow, setModalShow] = useState(false);

    const inputHandlerOne = (event) => {
        setInputOne(event.target.value);
        setInputTwo(event.target.value * 10);
        console.log(inputOne);
        console.log(inputTwo);
    };

    const inputHandlerTwo = (event) => {
        setInputOne(event.target.value / 10);
        setInputTwo(event.target.value);
    };

    const swapBtnHandler = () => {
        if (inputOne && inputOne) {
            setModalShow(true);
        }
    };

    const confirmHandler = () => {
        setBalanceOne(balanceOne - inputOne);
        setBalanceTwo(balanceTwo + inputTwo);
        setModalShow(false);
    };

    return (
        <div className="App vh-100 d-flex align-items-center justify-content-center">
            <Col className=" m-0 p-0  col-4">
                <Col className="swapContainer p-3 ">
                    <Col className="w-100">
                        <div className="swapTitle d-flex justify-content-between align-items-center mb-4">
                            <h6 className="fw-bold ">Swap</h6>
                            <FiSettings
                                className="float-end setting"
                                size={20}
                            />
                        </div>
                    </Col>
                    <div>
                        <div className="inputContainer p-3 mb-3">
                            <div className="inputOne">
                                <input
                                    type="number"
                                    placeholder="0.0"
                                    className=""
                                    value={inputOne}
                                    onChange={inputHandlerOne}
                                />
                            </div>
                            <div className="symbolBox">
                                <div className="d-flex justify-content-between align-items-center fw-bold fs-5">
                                    <FaBtc size={25} color="#EF8E19" /> BTC
                                </div>
                                <p className="opacity-25 balance">
                                    Balance:{balanceOne}
                                </p>
                            </div>
                        </div>
                        <div className="arrowIcon">
                            <BsFillArrowDownCircleFill size={40} />
                        </div>

                        <div className="inputContainer p-3 mb-2">
                            <div className="inputTwo">
                                <input
                                    type="number"
                                    placeholder="0.0"
                                    className=""
                                    value={inputTwo}
                                    onChange={inputHandlerTwo}
                                />
                            </div>
                            <div className="symbolBox">
                                <div className="d-flex justify-content-between align-items-center fw-bold fs-5">
                                    <FaEthereum size={25} color="#5F7AE3" /> ETH
                                </div>
                                <p className="opacity-25 balance">
                                    Balance:{balanceTwo}
                                </p>
                            </div>
                        </div>
                    </div>
                    <p className="note mb-2">1 BTC = 10 ETH</p>

                    <div>
                        <button className="swapBtn" onClick={swapBtnHandler}>
                            {inputOne ? "SWAP" : "Enter a Amount"}
                        </button>
                    </div>
                    {modalShow && inputOne && inputTwo && (
                        <Modal
                            amountOne={inputOne}
                            amountTwo={inputTwo}
                            closeModal={() => setModalShow(false)}
                            confirmHandler={confirmHandler}
                        />
                    )}
                </Col>
            </Col>
        </div>
    );
}

export default App;
