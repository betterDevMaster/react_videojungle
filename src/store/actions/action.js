import {
  FILE_UPLOAD, 
  SET_THEME,
  SET_CROSS_DOMAIN_DATA,
  GUEST_USER,
  LANGUAGE_CONST,
  SETTINGS_CONST, 
} from '../constants/constants';

export function onReduxLangaugeChange(langauge) {
    return (dispatch) => {
        dispatch({
            type: LANGUAGE_CONST,
            payload: langauge
        })
    }
}

export function changeSettings(settings){
    return(dispatch)=>{
        dispatch({
            type: SETTINGS_CONST,
            payload:settings
        }) 
    }
}

export function onGuestUserChange(settings){
    return(dispatch)=>{
        dispatch({
            type: GUEST_USER,
            payload:settings
        }) 
    }
}


export function onSetCrossDomainData(data) {
    
    return(dispatch)=> {
        dispatch({
            type:SET_CROSS_DOMAIN_DATA,
            payload:data,
        })
    }
}

export function onSelectedChannelHandle(selected){
  return(dispatch)=>{
      dispatch({
          type:'SELECTED_CHANNEL',
          payload:selected
      }) 
  }
}

export function onMyChannelListHandle(list){
  return(dispatch)=>{
      dispatch({
          type:'MY_CHANNEL_LIST',
          payload:list
      }) 
  }
}

export const videoUpload = (file) => {
  return {
    type: FILE_UPLOAD,
    file,
  }
}


export const setTheme = theme => {
  return {
    type: SET_THEME,
    theme,
  }
}

