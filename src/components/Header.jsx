import logo from "../assets/quiz-logo.png"
// import axios from 'axios'
export default function Header(){
//    const fetchData = async() =>{
//     try{ const test= await axios.get("https://api.jsonserve.com/Uw5CrX")
//     console.log(test);
    
//     }
//     catch(err){
//         console.log("error",err.message);
//     }
   
// }
// fetchData()
    return(
        <header>
            <img src={logo} alt="LOGO" />
            <h1>Quiz</h1>
        </header>
    )
}