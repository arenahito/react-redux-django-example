import * as ActionTypes from "../actions/ActionTypes"


const initialState = {
  selectedId: -1,
  tasks: []
};


const tasks = (state=initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TASKS_SUCCESS:
      return {
        selectedId: state.selectedId,
        tasks: state.tasks.concat(action.data)
      };

    case ActionTypes.SELECT_TASK:
      return {
        selectedId: action.id,
        tasks: state.tasks
      };

    case ActionTypes.ADD_TASK_SUCCESS:
      return {
        selectedId: state.selectedId,
        tasks: [action.data].concat(state.tasks)
      };

    case ActionTypes.UPDATE_TASK_SUCCESS:
      return {
        selectedId: state.selectedId,
        tasks: state.tasks.map(state => {
          if (state.id == action.data.id) {
            return action.data;
          } else {
            return state;
          }
        })
      };

    case ActionTypes.DELETE_TASK_SUCCESS:
      return {
        selectedId: state.selectedId,
        tasks: state.tasks.filter(task => (task.id != action.data.id))
      };

    default:
      return state
  }
};

export default tasks
