// const browserUrl = Window.location.href

// const isLocalHost = browserUrl.includes('localhost')


// const BASE_URL = isLocalHost
//     ? 'http://localhost:3000/api/v1'
//     : 'https://jsonplaceholder.typicode.com'

import BASE_URL from '../config';


const apiService = {
    // async getPosts(signal) {
    //     const controller = new AbortController()

    //     const req = await fetch(`${BASE_URL}/posts`, {
    //         signal
    //     })

    //     if(!req.ok){
    //         throw new Error(`Error HTTP: ${req.status}`)
    //     }
    //     return await req.json()

    // },

    async login(email, password, signal){
        const req = await fetch(`${BASE_URL}/auth/login`, {
            method : 'post',
            headers : {
                'Content-Type' : 'application/json'
            },
            credentials: 'include',
            body : JSON.stringify({email, password}),
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async register(pseudo, email, password, signal){
        const req = await fetch(`${BASE_URL}/auth/register`, {
            method : 'post',
            headers : {
                'Content-Type' : 'application/json'
            },
            credentials: 'include',
            body : JSON.stringify({pseudo, email, password}),
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async forgotpass(email, signal){
        const req = await fetch(`${BASE_URL}/auth/forgot-password`, {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email}),
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async resetpass(token, email, newPassword, signal){
        const req = await fetch(`${BASE_URL}/auth/reset-password/${token}`, {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email, newPassword}),
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async getlive(accessToken, signal){
        const req = await fetch(`${BASE_URL}/match/live`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },
    async getincoming(accessToken, signal){
        const req = await fetch(`${BASE_URL}/match/incoming`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },
    async getfinishedatp(accessToken, signal){
        const req = await fetch(`${BASE_URL}/match/finishedatp`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },
    async getfinishedwta(accessToken, signal){
        const req = await fetch(`${BASE_URL}/match/finishedwta`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async refresh(signal) {
        const req = await fetch(`${BASE_URL}/auth/refresh`, {
            method: 'POST',
            credentials: 'include',
            signal
        })

        const data = await req.json()

        if (!req.ok) {
            throw new Error(data.message)
        }

        return data
    },

    async prono(accessToken, match_id, prono, signal){
        const req = await fetch(`${BASE_URL}/prono/new`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body : JSON.stringify({match_id, prono}),
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async sendRequest(accessToken, id, signal){
        const req = await fetch(`${BASE_URL}/friends/send/${id}`, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async acceptRequest(accessToken, id, signal){
        const req = await fetch(`${BASE_URL}/friend/accept/${id}`, {
            method : 'PATCH',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async declineRequest(accessToken, id, signal){
        const req = await fetch(`${BASE_URL}/friend/decline/${id}`, {
            method : 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async getFriends(accessToken, signal){
        const req = await fetch(`${BASE_URL}/friend/list`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async getLb(accessToken, type = 'score', scope = 'global', signal){
        const req = await fetch(`${BASE_URL}/user/leaderboard?type=${type}&scope=${scope}`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async getUsers(accessToken, query, signal){
        const req = await fetch(`${BASE_URL}/user/search?q=${encodeURIComponent(query)}`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },

    async getPlayers(accessToken, signal){
        const req = await fetch(`${BASE_URL}/player/players`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },
}

export default apiService;