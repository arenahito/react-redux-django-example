import * as ActionTypes from "./ActionTypes"


export function fetchTasks() {
  return dispatch => {
    fetch("http://localhost:8000/api/tasks").then(
      response => {
        response.json().then(data => {
          dispatch({
            type: ActionTypes.FETCH_TASKS_SUCCESS,
            data
          });
        });
      },
      error => {
        error.json().then(data => {
          dispatch({
            type: ActionTypes.FETCH_TASKS_ERROR,
            data
          });
        });
      }
    );
  }
}

export function addTask(text) {
  return dispatch => {
    fetch("http://localhost:8000/api/tasks", {
      method: "post",
      body: JSON.stringify({
        text
      })
    }).then(
      response => {
        response.json().then(data => {
          dispatch({
            type: ActionTypes.ADD_TASK_SUCCESS,
            data
          });
        });
      },
      error => {
        error.json().then(data => {
          dispatch({
            type: ActionTypes.ADD_TASK_ERROR,
            data
          });
        });
      }
    );
  }
}

export function updateTask(id, text, done) {
  return dispatch => {
    fetch("http://localhost:8000/api/tasks/" + id, {
      method: "put",
      body: JSON.stringify({
        text,
        done
      })
    }).then(
      response => {
        response.json().then(data => {
          dispatch({
            type: ActionTypes.UPDATE_TASK_SUCCESS,
            data
          });
        });
      },
      error => {
        error.json().then(data => {
          dispatch({
            type: ActionTypes.UPDATE_TASK_ERROR,
            data
          });
        });
      }
    );
  }
}

export function deleteTask(id) {
  return dispatch => {
    fetch("http://localhost:8000/api/tasks/" + id, {
      method: "delete"
    }).then(
      response => {
        response.json().then(data => {
          dispatch({
            type: ActionTypes.DELETE_TASK_SUCCESS,
            data
          });
        });
      },
      error => {
        error.json().then(data => {
          dispatch({
            type: ActionTypes.DELETE_TASK_ERROR,
            data
          });
        });
      }
    );
  }
}

export function selectTask(id) {
  return {
    type: ActionTypes.SELECT_TASK,
    id
  }
}

