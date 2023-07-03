function ProjectForm(){
    function onSubmit(e){
        e.preventDefault();
        console.log("Submitted")
    }
    return (
        <form className = "form" onSubmit={onSubmit}>
            <h3> Add New Project </h3>
            <label htmlFor="name">Name</label>
            <input type = "text" id ="name" name="name"></input>
            <textarea id="about" name="about"></textarea>
            <button type="submit">Add Project</button>
        </form>
    )
}
export default ProjectForm