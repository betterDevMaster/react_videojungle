export function postOptions(data) {
    return {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
}
export function getOptions(data) {
    return {
        method: "get",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        data: JSON.stringify(data),
    }
}

export function postLoginOptions(data) {
    return {
        method: "post",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    }
}

export function postOptionsforFile(data) {
    return {
        method: "post",
        headers: {
            Accept: "application/json",
            //'Content-Type': 'application/json',
        },
        body: data,
    }
}
