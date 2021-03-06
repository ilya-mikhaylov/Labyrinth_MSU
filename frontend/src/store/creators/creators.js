import {
  FULL_FIELD,
  ADD_VALUE,
  CHANGE_VALUE,
  EXP_FIELD,
  CHANGE_COMP,
  NEW_VALUE,
  START_POS,
  AUTH_SUCCESS,
  AUTH_LOGOUT,
  MOVE_UP,
  MOVE_DOWN,
  MOVE_LEFT,
  MOVE_RIGHT,
  SAVE_EXP,
  KEYBOARD_ACTION, DELETE_ACTION, MOUSE_ACTION,
} from '../actions/actions';


export const FULLFIELD = (field) => {         // отрисовка пустого поля в конструкторе
  return {
    type: FULL_FIELD,
    field,
  };
};

export const ADDVALUE = (index, change) => {        //
  return {
    type: ADD_VALUE,
    index,
    change,
  };
};

export const CHANGEVALUE = (index, changedValue) => {
  return {
    type: CHANGE_VALUE,
    index,
    changedValue,
  };
};

export const EXPFIELD = (field) => {
  return {
    type: EXP_FIELD,
    field,
  };
};

export const CHANGECOMP = (index, newComp) => {
  return {
    type: CHANGE_COMP,
    index,
    newComp
  }
};

export const NEWVALUE = (index, newValue) => {
  return {
    type: NEW_VALUE,
    index,
    newValue
  };
};

export const STARTPOS = (index) => {
  return {
    type: START_POS,
    index
  }
};

export const MOVEUP = (time) => {
  return {
    type: MOVE_UP,
    time
  }
};

export const MOVEDOWN = (time) => {
  return {
    type: MOVE_DOWN,
    time
  }
};

export const MOVELEFT = (time) => {
  return {
    type: MOVE_LEFT,
    time
  }
};

export const MOVERIGHT = (time) => {
  return {
    type: MOVE_RIGHT,
    time
  }
};

export const KEYBOARDACTION = (value, time) => {
  return {
    type: KEYBOARD_ACTION,
    value,
    time
  }
};

export const DELETEACTION = () => {
  return {
    type: DELETE_ACTION
  }
};

export const MOUSEACTION = (value, time) => {
  return {
    type: MOUSE_ACTION,
    value,
    time
  }
};

export const fetchField = () => {
  return async (dispatch) => {
    const response = await fetch('/index/getField');
    const result = await response.json();
    dispatch(FULLFIELD(result));
  };
};

export const expField = (id) => {
  return async (dispatch) => {
    const response = await fetch(
        '/index/getExpField',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id
          }),
        }
    );
    const result = await response.json();
    dispatch(EXPFIELD(result));
  };
};

export const saveExp = (id, expName, moves, envName, expNumber, expAnimal, expType, expFeeding) => {
  return async () => {
    const response = await fetch(
        '/index/saveExp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id,
            expName,
            moves,
            envName,
            expNumber,
            expAnimal,
            expType,
            expFeeding
          }),
        }
    );
  }
};

export const AUTHSUCCESS = (token) => {
  return {
    type: AUTH_SUCCESS,
    token,
  };
};
