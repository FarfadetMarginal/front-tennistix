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
        const req = await fetch(`${BASE_URL}/login`, {
            method : 'post',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({email, password}),
            signal
        })

        if(!req.ok){
            throw new Error(`Error HTTP: ${req.status}`)
        }
        return await req.json()
    },

    async register(pseudo, email, password, signal){
        const req = await fetch(`${BASE_URL}/register`, {
            method : 'post',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({pseudo, email, password}),
            signal
        })

        if(!req.ok){
            throw new Error(`Error HTTP: ${req.status}`)
        }
        return await req.json()
    }
}

export default apiService;