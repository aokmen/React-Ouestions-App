import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import InterviewAccord from "./components/InterviewAccord";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [img,setImg] = useState("")
  const [imgRandom,setImgRandom] = useState(0)

   const func = (e) => {
  
    setImgRandom(Math.trunc(Math.random() * 1000))
    setImg(`https://picsum.photos/id/${imgRandom}/1200/800`)
   }
    

  return (
   
    <div className="App">
      <Header />
      <div className=" text-center">
      <button className="btn-image" onClick={func}>Change Image Background</button>
      </div>     
      <InterviewAccord/>
      <img  src={img} alt={imgRandom}  className="bg-color"/>
    </div>
  );
}

export default App;
