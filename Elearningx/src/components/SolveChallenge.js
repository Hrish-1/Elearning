import React, { useEffect, useState } from 'react'
import 'bootstrap'
import ProblemEditor from './ProblemEditor'
import Error from './Error'
import NavBar from '../Navbar'
import { NavBar2 } from '../NavBar2'

const SolveChallenge = ({ match }) => {

    const [isLogged, setIsLogged] = useState(sessionStorage.getItem("token"));
    const [x, setX] = useState('');
    const [y, setY] = useState('');
    const [problemInfo, setProblemInfo] = useState({
        "problemName": "",
        "difficulty": "",
        "tags": "",
        "description": "",
        "testCases": ""
    });


    const reqBody = {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    }

    const getProblemDetails = async () => {
        try {
            const response = await fetch(`http://localhost:8080/problem/one/${match.params.id}/${match.params.name}`, reqBody);
            const data = await response.json();
            console.log(data);
            setProblemInfo(data);
            for (var x of data.testCases) {

                setX(prev => prev.concat(x.input + " "));
            }

            for (var y of data.testCases) {

                setY(prev => prev.concat(y.output + " "));
            }

            console.log(problemInfo);
            //setIp();
        } catch (e) {
            console.log(e);
            <Error />
        }

        //setI('');
    }

    useEffect(() => {
        getProblemDetails();
    }, []);

    return (
        <div className="container-fluid p-0">
            {isLogged ? <NavBar2 /> : <NavBar />}
            {/* <NavBar2 /> */}
            <div className="problemcontent">
                <p>{problemInfo.problemName}</p>
                <p>{problemInfo.difficulty}</p>
                <p>{problemInfo.tags}</p>
                <div dangerouslySetInnerHTML={{ __html: problemInfo.description }} />
                <ProblemEditor
                    tags={problemInfo.tags}
                    testi={x}
                    testo={y}
                />
            </div>

        </div>
    )
}

export default SolveChallenge
