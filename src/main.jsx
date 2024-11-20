import { createRoot } from "react-dom/client";

import avatar from "./assests/avatar.png";
import yahoo from "./assests/yahoo.png";
import facebook from "./assests/facebook.png";
import gmail from "./assests/gmail.webp";
import call from "./assests/call.png";
import message from "./assests/message.webp";

import "./main.css";

let root = document.getElementById("root");

createRoot(root).render(
    <>
        <div className="main">
            <div className="card">
                <div className="cardTop">
                    <div className="cardImg"></div>
                    <div className="dataImg">
                        <h2>Aaron Peters</h2>
                        <p class="para1">
                            Calle  0000 70707
                            Kerala, India
                        </p>
                        <div className="imgs">
                            <img className="img1" src={yahoo} alt="Yahoo" />
                            <img className="img" src={facebook} alt="" />
                            <img className="img" src={gmail} alt="" />
                        </div>
                    </div>
                </div>
                <hr className="dashed-line" />

                <div className="cardBottom">
                    <div className="left">
                        <img className="call" src={call} alt="" />
                        <span>
                            +91-8590853964
                        </span>
                    </div>
                    <hr className="dashed-line2" />
                    <div className="right">
                        <img className="call" src={message} alt="" />
                        <span>
                            jk0007@gmail.come
                        </span>
                        
                    </div>
                </div>
            </div>
        </div>

    </>
)