const videoSearch = (state = { key: "", selectedData: {}, allData: [] }, action) => {
    switch (action.type) {
        case "YOUTUBE_SEARCH":
            return { ...state, key: action.value }
        case "YOUTUBE_SELECT":
            return { ...state, allData: action.allData, selectedData: action.selectedData, key: action.key }
        default:
            return state
    }
}

export default videoSearch
