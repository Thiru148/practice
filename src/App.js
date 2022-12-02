import Header from "./Components/Header";
import Form from "./Components/Form";
import {useState} from "react"
import ProjectList from "./Components/ProjectList";
function App() {
const [project, setProject] = useState("")
const [projectList, setProjectList] = useState([])
  return (
    <div className="App">
     <Header/>
     <Form
     project = {project}
     setProject = {setProject}
     projectList = {projectList}
     setProjectList = {setProjectList}
     />
     <ProjectList
      projectList = {projectList}
      setProjectList = {setProjectList}
     />
    </div>
  );
}

export default App;
