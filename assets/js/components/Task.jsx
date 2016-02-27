import React, { PropTypes } from "react"


const EditableTask = ({ id, text, done, selectTask, updateTask, deleteTask }) => {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      updateTask(id, input.value, done);
      selectTask(-1);
     }}>

      <input type="text" placeholder="Task" defaultValue={text} ref={node => {
        input = node;
      }}/>

      <button type="submit">UPDATE</button>

      <button onClick={e => {
        e.preventDefault();
        selectTask(-1);
        deleteTask(id);
      }}>DELETE
      </button>
    </form>
  );
};

const NonEditableTask = ({ id, text, selectTask }) => {
  return (
    <div onClick={e => selectTask(id)}>
      {text}
    </div>
  );
};

const Task = ({ id, text, done, selected, selectTask, updateTask, deleteTask }) => {
  if (selected) {
    return <EditableTask
      id={id}
      text={text}
      done={done}
      selectTask={selectTask}
      updateTask={updateTask}
      deleteTask={deleteTask}
    />;

  } else {
    return <NonEditableTask
      id={id}
      text={text}
      selectTask={selectTask}
    />;
  }
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  selectTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default Task