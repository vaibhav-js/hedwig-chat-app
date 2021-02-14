const users = []

// ADD A USER
const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // VALIDATE THE DATA
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    // CHECK FOR EXISTING USER
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //  VALIDATE USERNAME
    if (existingUser) {
        return {
            error: 'Username is in use!'
        }
    }

    // STORE USER
    const user = { id, username, room }
    users.push(user)
    return { user }
}

// REMOVE A USER
const removeUser = (id) => {
        const index = users.findIndex((user) => user.id === id)

        if (index !== -1) {
            return users.splice(index, 1)[0]
        }
    }
    // GET USER
const getUser = (id) => {
    const userFound = users.find((user) => user.id === id)
    return userFound
}

// GET USERS IN ROOM 
const getUsersInRoom = (room) => {
    const usersFound = users.filter((user) => user.room === room)
    return usersFound
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}