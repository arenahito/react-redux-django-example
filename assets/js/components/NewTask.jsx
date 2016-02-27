import React, { PropTypes } from "react"

const NewTask = ({ addTask }) => {
  let input;

  return (
    <form onSubmit={e => {
      e.preventDefault();
      addTask(input.value);
      input.value = "";
    }}>
      <input type="text" placeholder="Task" ref={node => {
        input = node;
      }} />
      <button type="submit">ADD</button>
    </form>
  );
};

NewTask.propTypes = {
  addTask: PropTypes.func.isRequired
};

export default NewTask