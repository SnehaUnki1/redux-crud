// create
export function addUser(data) {
    return {
        type: "ADD_USER",
        payload: data
    }
}


// update
export function updateUser(data) {
    return {
        type: "UPDATE_USER",
        payload: data
    }
}

// delete
export function deleteUser(id) {
    return {
        type: "DELETE_USER",
        payload: id
    }
}