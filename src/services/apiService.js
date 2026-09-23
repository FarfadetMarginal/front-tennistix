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

    async getlive(signal){
        const req = await fetch(`${BASE_URL}/match/live`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },
    async getincoming(signal){
        const req = await fetch(`${BASE_URL}/match/incoming`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },
    async getfinishedatp(signal){
        const req = await fetch(`${BASE_URL}/match/finishedatp`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    },
    async getfinishedwta(signal){
        const req = await fetch(`${BASE_URL}/match/finishedwta`, {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            signal
        })

        if(!req.ok){
            const data = await req.json()
            throw new Error(data.message)
        }
        return await req.json()
    }
}

export default apiService;