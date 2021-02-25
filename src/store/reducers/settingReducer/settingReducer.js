import { de } from "date-fns/locale"
import { REACT_ALERT, SETTINGS_CONST } from "../../constants/constants"

const INITIAL_STATE = {
    themeType: "confident dark",
    reactalert: { open: false, type: "", title: "", message: "" },
}

export default (states = INITIAL_STATE, action) => {
    let theme = INITIAL_STATE.themeType

    if (action.type === SETTINGS_CONST) {
        try {
            let { themeType, languageType } = action.payload

            // Theme
            if (themeType === "color") {
                theme = "color-theme"
            } else if (themeType === "dark") {
                theme = "confident dark"
            } else {
                theme = "bright-theme"
            }
        } catch (error) {}
        // over
    } else if (action.type == REACT_ALERT) {
        const strAlert = { ...action.data }
        return { ...states, reactalert: strAlert }
    }

    switch (action.type) {
        case SETTINGS_CONST:
            return {
                ...states,
                themeType: theme,
            }

        default:
            return states
    }
}
