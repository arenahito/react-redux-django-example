import React from "react"
import { connect } from "react-redux"
import * as TaskActions from "../actions/TaskAction"
import NewTask from "../components/NewTask"

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: text => dispatch(TaskActions.addTask(text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTask);
