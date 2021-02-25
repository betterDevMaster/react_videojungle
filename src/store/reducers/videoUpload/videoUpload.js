import { FILE_UPLOAD } from '../../constants/constants';

const initialState = {
  file: null,
}

export const videoUpload = (state = initialState, action) => {
  switch (action.type) {
    case FILE_UPLOAD:
      return {
        ...state,
        file: action.file,
      };
    default:
      return state;
  }
}