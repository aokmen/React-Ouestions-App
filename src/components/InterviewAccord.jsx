import data from "./../helper/data"
import Question from "./Question"



const InterviewAccord = () => {
    
  return (

    <div className="container">
       {data.map((item,i)=>(<Question {...item} key={i}/>))}
    </div>

  )
}

export default InterviewAccord

// {data.map((item,i)=>(<Question {...item} key={i}/>))}