import axios from "axios";
import {profileType} from "../types/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd1d08d2b-19c6-436a-abe9-59b5357407f1'
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollow(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    follow(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    }
};

export const profileAPI = {
    getProfile(id: number) {
        return instance.get(`profile/${id}`)
            .then(response => response.data)
    },
    getStatus(id: number = 27264) {
        return instance.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status})
            .then(response => {
                return response.data
            })
    },
    savePhoto(photos: string) {
        const formData = new FormData();
        formData.append('image', photos);

        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => response.data)
    },
    saveProfile(profile: profileType) {
        return instance.put('profile', profile).then(
            response => response.data
        )
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: string | null= null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url').then(
            response => response.data
        )
    }
}
