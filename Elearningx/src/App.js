import React from "react";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Forgot from "./Forgot";
import { Quiz } from './components/Quiz'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Test from './components/Test'
import decode from 'jwt-decode'
import Java1 from './components/java/Java1'
import Java2 from './components/java/Java2'
import Java3 from './components/java/Java3'
import Java4 from './components/java/Java4'
import Python1 from './components/python/Python1'
import Python2 from './components/python/Python2'
import Python3 from './components/python/Python3'
import Python4 from './components/python/Python4'
import Csharp1 from './components/csharp/Csharp1'
import Csharp2 from './components/csharp/Csharp2'
import Csharp3 from './components/csharp/Csharp3'
import Csharp4 from './components/csharp/Csharp4'
import Cpp1 from './components/cpp/Cpp1'
import Cpp2 from './components/cpp/Cpp2'
import Cpp3 from './components/cpp/Cpp3'
import Cpp4 from './components/cpp/Cpp4'
import Javascript1 from './components/nodejs/Javascript1'
import Javascript2 from './components/nodejs/Javascript2'
import Javascript3 from './components/nodejs/Javascript3'
import Javascript4 from './components/nodejs/Javascript4'
import AddCourse from './components/AddCourse'
import AddQuiz from './components/AddQuiz'
import ProblemList from './components/ProblemList'
import SolveChallenge from "./components/SolveChallenge";
import Form from './Form'
import Register1 from './Register1'
import Error from "./components/Error";
function App() {
  const checkAuth = () => {
    try {
      const { exp } = decode(sessionStorage.getItem("token"));
      console.log(exp);
      return exp > new Date().getTime();
    } catch (e) { }
  }
  const checkRole = () => {
    return sessionStorage.getItem("role") === 'role_admin' ? true : false
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Register1" component={Register1} />
        <Route path="/Forgot" component={Forgot} />
        <Route path="/quiz/:id" component={Quiz} />
        <Route path="/cpp" component={Cpp1} />
        <Route path="/python" component={Python1} />
        <Route path="/java" component={Java1} />
        <Route path="/javascript" component={Javascript1} />
        <Route path="/csharp" component={Csharp1} />
        <Route path="/test/:id" component={Test} />
        <Route path="/Cpp2" component={Cpp2} />
        <Route path="/Cpp3" component={Cpp3} />
        <Route path="/Cpp4" component={Cpp4} />
        <Route path="/Python2" component={Python2} />
        <Route path="/Python3" component={Python3} />
        <Route path="/Python4" component={Python4} />
        <Route path="/Java2" component={Java2} />
        <Route path="/Java3" component={Java3} />
        <Route path="/Java4" component={Java4} />
        <Route path="/Javascript2" component={Javascript2} />
        <Route path="/Javascript3" component={Javascript3} />
        <Route path="/Javascript4" component={Javascript4} />
        <Route path="/Csharp2" component={Csharp2} />
        <Route path="/Csharp3" component={Csharp3} />
        <Route path="/Csharp4" component={Csharp4} />
        <Route path="/AddCourse" component={checkRole() ? AddCourse : Login} />
        <Route path="/AddQuiz/:id" component={checkRole() ? AddQuiz : Login} />
        <Route path="/problems/:id" component={ProblemList} />
        <Route path="/problem/:id/:name" exact component={SolveChallenge} />
        <Route path="/form" component={Form} />
        <Route path="/errorpage" component={Error} />


      </Switch>
    </Router>
  );
}
export default App;