import {FaCheckDouble, FaEdit, FaRegTrashAlt} from "react-icons/fa";

const Task = ({task, index, deleteTask, singleTask, setComplete}) => {
  return (
    <div className={task.completed ? "task completed" : "task"}>
        <p>
            <b>{index + 1}. </b>
            {task.name}
        </p>
        <div className="task-icons">
            <FaCheckDouble color="red" onClick={() => setComplete(task) }/>
            <FaEdit color="green" onClick={ () => singleTask(task) }/>
            <FaRegTrashAlt color="blue" onClick={ () => deleteTask(task._id) }/>
        </div>
    </div>
  )
}

export default Task