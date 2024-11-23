const axios = require('axios');

async function createUser(data) {
    const url = 'https://reqres.in/api/users';
    const response = await axios.post(url, data);
    return response.data;
}

async function getUserById(userId) {
    const url = `https://reqres.in/api/users/${userId}`;
    const response = await axios.get(url);
    return response.data;
}

async function updateUser(userId, data) {
    const url = `https://reqres.in/api/users/${userId}`;
    const response = await axios.put(url, data);
    return response.data;
}

async function deleteUser(userId) {
    const url = `https://reqres.in/api/users/${userId}`;
    const response = await axios.delete(url);
    return response.status; // 204 indicates success
}

module.exports = { createUser, getUserById, updateUser, deleteUser };
