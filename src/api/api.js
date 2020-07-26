import axios from 'axios';

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'dd6b68ad-d256-4143-a283-2cab7797fefc'
    }   
})

export const usersAPI = {
    getUsers (onPageUsers, currentPage) {
        return instance.get(`users?count=${onPageUsers}&page=${currentPage}`).then(res=>res.data)
    },
    unfollowUsers(userId) {
        return instance.delete(`follow/${userId}`).then(res=>res.data)
    },
    followUsers(userId,{}) {
        return instance.post(`follow/${userId}`,{}).then(res=>res.data)
    }
}

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(res=>res.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(res=>res.data)
    },
    changeStatus(status) {
        return instance.put(`profile/status/`, {
            status:status
        }).then(res=>res.data)
    }
}

export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`).then(res=>res.data)
    },
    getLogin(email, password, rememberMe) {
        return instance.post(`auth/login`, {email:email, password:password, rememberMe:rememberMe}).then(res=>res.data)
    },
    getLogout() {
        return instance.delete(`auth/login`).then(res=>res.data)
    }
}