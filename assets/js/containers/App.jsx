import React from "react"
import { connect } from "react-redux"
import TaskList from "./TaskList"
import AddTask from "./AddTask"
import * as TaskAction from "../actions/TaskAction"


class App extends React.Component {

  componentWillMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>
        <h1>react-redux-django-example</h1>
        <AddTask />
        <div style={{height: "10px"}}></div>
        <TaskList />

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTasks: () => {
      dispatch(TaskAction.fetchTasks());
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

