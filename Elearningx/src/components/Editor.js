import {React,useState} from 'react';
import { ControlledEditor } from '@monaco-editor/react';
import { FaLaptopCode } from "react-icons/fa";
import { VscOutput } from "react-icons/vsc";
/*
const requestBody = {
    method : 'POST',
    headers : { 'Content-type': 'application/json',
              Authorization : 'Token 32038959-b5d4-41f4-8c47-1d0a8f73606a',
              'Access-Control-Allow-Origin' : '*'},
    body : JSON.stringify({"files": [{"name": "main.py", "content": input}]})
  };
  const getOutput = async () => {
    const response = await fetch('https://run.glot.io/languages/python/latest',requestBody);
    const data = await response.json();
    console.log(data);
    setOutput(data);
  }
  // const requestBody = {
  //   method : 'POST',
  //   headers : { 'Content-type': 'application/json'},
  //   body : JSON.stringify({"language" : "python","input" : input})
  // };
  // const getOutput = async () => {
  //   const response = await fetch('http://localhost:8000/submit',requestBody);
  //   const data = await response.json();
  //   console.log(data);
  //  // setOutput(data);
  // };
var apiUrl = "https://judge0-ce.p.rapidapi.com/";
var apiAuth = {
    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
    "x-rapidapi-key": "5461fe29efmsh4a2d0f0a4e07fa5p1278dajsn73080f2bdf88" // Your RapidAPI Key
};
*/
const Editor = (props) => {
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [status,setStatus] = useState('');
  const [error,setError] = useState('');
  const res = ["3 3","7 5"];
  let r = "";
  res.forEach(x =>{
    r += x;
    r += " ";
  });
  console.log(r);
  const stdin = r;

  const languages = {
      "cpp" : 52,
      "csharp" : 51,
      "java" : 62,
      "python" : 71,
      "javascript" : 63 
  }
  
  const apiUrl = "https://judge0-ce.p.rapidapi.com";
  const apiAuth = {
    "Content-type": "application/json",
    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
    "x-rapidapi-key": "5461fe29efmsh4a2d0f0a4e07fa5p1278dajsn73080f2bdf88" // Your RapidAPI Key
  };
  const encode = (str) => {
    return btoa(unescape(encodeURIComponent(str || "")));
  };
   const decode = (bytes) => {
    var escaped = escape(atob(bytes || ""));
    try {
        return decodeURIComponent(escaped);
    } catch {
        return unescape(escaped);
    }
  }
  const handleResult = (d) => {
    setStatus(d.status.description);
    setOutput(decode(d.stdout));
    setError(decode(d.stderr));
  }

//   const handleresultAsync = d => {
//     return new Promise((resolve,reject) => {
//         setTimeout((d) => {
//              resolve([d.status.description,decode(d.stdout),decode(d.stderr)]);
//         },1500,d);
//     });
// }
  
  const data = {
    stdin : ''/*encode(stdin)*/,
    source_code: encode(input),
    language_id: languages[props.language]
  };
  const requestBody = {
    method : 'POST',
    headers : apiAuth,
    body : JSON.stringify(data,null)
  };
  const getOutput = async () => {
    const response = await fetch(apiUrl + `/submissions?base64_encoded=true&wait=true`,requestBody);
    const data = await response.json();
    //setTimeout(fetchSubmission.bind(null, data.token),1000);
     handleResult(data);
    // setStatus(result[0]);
    // setOutput(result[1]);
    // setError(result[2]);

  }
  return (
    // <div>
    //   <ControlledEditor language="python" value = {input} onChange = {(e,v) => setInput(v)} />
    // </div>
    <div className = "row">
    <div className="col-6 borderT">
        <div className="headL row ">
            <span className = "mx-2" style = {{fontSize : "2.5em"}}><FaLaptopCode/></span>
            <span className="mx-2 mt-4 font-weight-bold">CODE HERE</span>
        </div>
        <div className="row Eheight">
            <ControlledEditor language={props.language} value = {input} onChange = {(e,v) => setInput(v)} />
        </div>
        <div className="btn btn-success" onClick = {() => {getOutput()}}>Run...</div>
    </div>
    <div className="col-6" style = {{height : "500px"}}>
        <div style = {{width : "420px",height : "500px"}} className = "borderT">
            <div style = {{height : "60px",backgroundColor : "#dbe2ef",display : "flex",alignItems : "center"}}>
                <div>
                    <VscOutput style = {{fontSize : "2.5em",color : "#3f72af"}} className = "mt-2 mx-2"/>
                </div>
                <div className = "mt-2 font-weight-bold" style = {{color : "#3f72af"}}>OUTPUT</div>
            </div>
            <p>{output}</p>
            <p>{status}</p>
            <p>{error}</p>
        </div>
    </div>
    </div>
  )
}
export default Editor
