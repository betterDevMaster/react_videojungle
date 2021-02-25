import { DARK_THEME } from '../../constants/constants';
import { LIGHT_THEME } from '../../constants/constants';
import { SET_THEME } from '../../constants/constants';

const initialState = {
  theme: LIGHT_THEME,
}

export const themes = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
}