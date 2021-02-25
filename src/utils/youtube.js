export function getArrFromCurrentIndex(allData, selectedData, length) {
    const index = allData.findIndex((x) => x.title === selectedData.title)
    const minIndex = index - length < 0 ? 0 : index - length
    const maxIndex = index + length + 1 > allData.length ? allData.length : index + length + 1
    const slicedArr = allData.slice(minIndex, maxIndex)
    return { slicedArr: slicedArr, index: index }
}

export function calcDuration(duration) {
    var duration = parseInt(duration)
    var sec_num = parseInt(duration, 10) // don't forget the second param
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor((sec_num - hours * 3600) / 60)
    var seconds = sec_num - hours * 3600 - minutes * 60

    var numHur = hours
    if (hours < 10) {
        hours = "0" + hours
    }
    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    return numHur !== 0 ? hours + ":" + minutes + ":" + seconds : minutes + ":" + seconds
}

export function calcPassDays(date) {
    const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
    const firstDate = new Date()
    const secondDate = new Date(date)
    const oriDiffDays = Math.abs((firstDate - secondDate) / oneDay)
    const diffDays = Math.round(oriDiffDays)
    var ret = ""
    if (oriDiffDays < 1) ret = Math.round(oriDiffDays * 24) + " hours ago"
    else ret = diffDays + " days ago"
    if (diffDays > 31) ret = Math.floor(diffDays / 31) + " months ago"
    if (Math.floor(diffDays / 31) > 12) ret = Math.floor(diffDays / 31 / 12) + " years ago"

    return ret
}

export function calcSubTitle(value) {
    if (!value || value === undefined) return 0
    var like = ""
    if (value.length > 6) {
        like = Math.floor(value / 1000000)
        return like + "M"
    } else if (value.length > 3) {
        like = Math.floor(value / 1000)
        return like + "k"
    } else {
        like = value
        return like
    }
}
