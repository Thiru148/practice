import Project from "./Project"
const ProjectList = ({projectList,setProjectList})=>{
    return(
        <div>
            {projectList.map((projectitem) =>(
                <Project
                setProjectList = {setProjectList}
                key  ={projectitem.id}
                projectitem = {projectitem}
                projectList ={projectList}
                />
            ))}      
        </div>
    )
}
export default ProjectList