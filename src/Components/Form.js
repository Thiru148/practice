import styles from "../style.module.css"
import shortid from "shortid"
const Form =({project,setProject,projectList,setProjectList})=>{
   const handleChange = (event)=>{
        setProject(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        setProjectList([...projectList,{name:project,id:shortid.generate()}])
        console.log(projectList)
        setProject("")
    }
    return(
        <div>
            <form className={styles.projectfrm} onSubmit={handleSubmit}>
                <input 
                className = {styles.input}
                onChange = {handleChange}
                value ={project}
                type = "text"
                 placeholder = "name of the project">  
                 </input>
                <button 
                className={styles.btn}
                type = "submit"
                >ADD</button>
            </form>
        </div>
    )
}
export default Form