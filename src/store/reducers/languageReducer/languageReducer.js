import {
  LANGUAGE_CONST,
} from "../../constants/constants";
import {
  MainTextEnglish, MainTextKorean, MainTextJapanese} from "../../../utils/LanguageConst";
const initialstate = {
  languageType : MainTextEnglish
}

export default (state = initialstate, action) => {
    if(action.type === LANGUAGE_CONST) {
        let lang = {};
        if(action.data === "English") {
            lang = MainTextEnglish;
        } else if (action.data === "한국어") {
            lang = MainTextKorean;
        } else if (action.data === "日本語") {
            lang = MainTextJapanese;
        }
        return {...state, languageType: lang};
    }
    return state;
}