import { useState } from "react";
import {arrowdown,arrowup} from "./../helper/icon"

const Question = ({ question, answer, id }) => {
const [show, setShow] = useState(true)
    
const handClick = () => {
    setShow(!show)
}
  return (
    <div className="card-main">
        { show ? 
        (<div className="cards">
            <div className="question"><h2>{id}- {question}</h2> 
                <span onClick={handClick} className="icon">
                    {arrowdown}
                </span>
            </div>
        </div>)
        :
        (<div className="cards">
            <div className="question"><h2>{id}- {question}</h2> 
                <span onClick={handClick} className="icon">
                    {arrowup}
                </span>
            </div>
            <p className="answer">{answer}</p>
        </div>)
    }
       
       
    </div>
  );
};

export default Question;
