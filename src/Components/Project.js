import styles from "../style.module.css"
const Project =({projectList,setProjectList,projectitem})=>{
    const handleDelete = ()=>{
        setProjectList(
            projectList.filter(item=>item.id !==projectitem.id)
            )
    }
    return(
        <div>
            <div className = {styles.projectitem}>
                <h3 className={styles.projectname}>{projectitem.name}</h3>
                <button
                    onClick ={handleDelete}
                    className = {styles.deletebtn}>
                DONE
                </button>
            </div>
        </div>
    )
}
export default Project