import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaBtc, FaEthereum } from "react-icons/fa";
import { BsArrowDownCircleFill } from "react-icons/bs";
import "./Modal.css";

function Modal({ amountOne, amountTwo, closeModal, confirmHandler }) {
    return (
        <div className="modalBg">
            <div className="modalContainer">
                <div className="modalTitle">
                    <h4>Confrim Swap</h4>
                    <button onClick={() => closeModal(false)}>
                        <AiFillCloseCircle size={30} color="white" />
                    </button>
                </div>
                <div className="modalReport">
                    <div className="inputContainer align-items-center p-3 mb-3">
                        <div>
                            <h1 className="fw-bold ms-2">{amountOne}</h1>
                        </div>
                        <div className="modalSymbolBox me-2">
                            <FaBtc size={25} color="#EF8E19" /> <h4>BTC</h4>
                        </div>
                    </div>
                    <div className="modalArrowIcon">
                        <BsArrowDownCircleFill size={40} />
                    </div>
                    <div className="inputContainer align-items-center p-3 mb-3">
                        <div>
                            <h1 className="fw-bold ms-2">{amountTwo}</h1>
                        </div>
                        <div className="modalSymbolBox me-2">
                            <FaEthereum size={25} color="#5F7AE3" />
                            <h4>ETH</h4>
                        </div>
                    </div>
                    <div className="modalBtns">
                        <button onClick={confirmHandler}>Confrim</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
