import React, { useEffect, useState } from 'react'
import 'bootstrap'
import { Link } from 'react-router-dom'
import NavBar from '../Navbar'
import { NavBar2 } from '../NavBar2'
import Error from './Error'

export const Problem = (props) => {
    return (
        <div className="my-3">
            <div className="card shadow-lg">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">difficulty : {props.difficulty}</p>
                    <Link to={`/problem/${props.lang}/${props.name}`}> <button className="btn btn-primary my-3">Solve Challenge</button></Link>
                </div>
            </div>
        </div>
    )
}

const ProblemList = ({ match }) => {

    const [problem, setProblem] = useState([]);
    const [isLogged, setIsLogged] = useState(sessionStorage.getItem("token"));
    const reqBody = {
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    }
    const fetchProblems = async () => {
        try {
            console.log("params " + match.params.id);
            const reponse = await fetch(`http://localhost:8080/problem/all/${match.params.id}`, reqBody);
            const data = await reponse.json();
            console.log(data);
            setProblem(data);
        } catch (e) {
            <Error />
        }

    }

    useEffect(() => {
        fetchProblems();
    }, [])

    return (
        <div className="container-fluid p-0">
            {isLogged ? <NavBar2 /> : <NavBar />}
            <div className="row my-3 justify-content-center">
                <h3>Problems</h3>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <ul>
                        {
                            problem.map(p => (
                                <Problem name={p.problemName} difficulty={p.difficulty} lang={p.tags} />
                            ))
                        }
                    </ul>
                </div>
                <div className="col-2"></div>
            </div>

        </div>
    )
}

export default ProblemList
