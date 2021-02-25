import React from "react"
import ReactDOM from "react-dom"
import App from "./App.jsx"
import { Provider } from "react-redux"
import store from "./store/index"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { lightTheme } from "./config/themes/lightTheme"

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={lightTheme}>
            <App />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("App")
)
