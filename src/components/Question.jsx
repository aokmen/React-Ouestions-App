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

{/* <div>{ show ? (<div className="question"><h2>{question}</h2><div onClick={handClick}>{arrowdown}</div></div>):(<div className="answer"><h2>{question}</h2><div onClick={handClick}>{arrowup}</div><p>{answer}</p></div>) }
</div> */}


// const [show,showSet] = useState(true)
// const handClick = () => {
//     showSet(!show)}

// { question, answer }