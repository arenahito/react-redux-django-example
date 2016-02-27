import React, { PropTypes } from "react"
import { connect } from "react-redux"
import * as TaskActions from "../actions/TaskAction"
import Task from "../components/Task"

const TaskList = ({ selectedId, tasks, selectTask, updateTask, deleteTask }) => (
  <div>
    {tasks.map(task =>
      <Task
        key={task.id}
        {...task}
        selected={task.id == selectedId}
        selectTask={selectTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    )}
  </div>
);

TaskList.propTypes = {
  selectedId: PropTypes.number.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  selectTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    selectedId: state.tasks.selectedId,
    tasks: state.tasks.tasks
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTask: id => dispatch(TaskActions.selectTask(id)),
    updateTask: (id, text, done) => dispatch(TaskActions.updateTask(id, text, done)),
    deleteTask: id => dispatch(TaskActions.deleteTask(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
