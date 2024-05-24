import { useState } from "react"
import {useNavigate} from "react-router-dom"


function CreateTask() {
    const [taskName, setTaskName] = useState("")
    const [taskDesc, setTaskDesc] = useState("")
    const [loading, setLoading] = useState(false)
    const [showAlert,setShowAlert] = useState(false)

    const navigate = useNavigate()

    const onTaskDescChange = (e) => {
        setTaskDesc(e.target.value)
    }
    const onTaskNameChange = (e) => {
        setTaskName(e.target.value)
    }

    const createTask = (taskData) => {
        // fetch("http://localhost:8000/task/create",{method:"POST",headers:{'Content-Type':"application/json"},body:JSON.stringify(taskData)}).then(function(res){
        //     return res.json()
        // }).then(function(result){
        //     console.log("data saved successfully")
        // })
        setLoading(true);
        fetch("http://localhost:8000/task/create", { method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify(taskData) }).then(function (res) {
            return res.json()
        }).then(function (result) {
            if(result._id){
                setShowAlert(true)
            }
            console.log("data saved successfully")
            navigate("/tasks")
            setLoading(false);
        }).catch(function (error) {
            console.error("Error:", error);
            setLoading(false);
        })


    }



    const saveTask = (e) => {
        e.preventDefault();
        let taskData = {
            taskName,
            taskDesc,
            status: "not_started",
            assigned: true
        }

        createTask(taskData)
    }

    return (
        <div className="container">
            <h4>Create Task Page</h4>
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">

                    <form onSubmit={saveTask}>
                        <div className="form-group" style={{ padding: '15px' }}>
                            <label >Task Name</label>
                            <input type="text" className="form-control" value={taskName} onChange={onTaskNameChange} />
                        </div>
                        <div className="form-group" style={{ padding: '15px' }}>
                            <label >Task Description</label>
                            <input type="text" className="form-control" value={taskDesc} onChange={onTaskDescChange} />
                        </div>
                        <div style={{ padding: '15px' }}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
           {showAlert && <div className="row">
                <div className="col-md-3 mt-4">
                    <div class="alert alert-success" role="alert">
                        Task created successfully!!
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default CreateTask