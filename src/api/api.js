import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd1d08d2b-19c6-436a-abe9-59b5357407f1'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
};

export const profileAPI = {
    getUser(id) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    }
}

export const headerAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}