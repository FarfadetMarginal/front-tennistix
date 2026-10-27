const BASE_URL = import.meta.env.PROD ? '/api/v1' : 'https://tennistix.onrender.com/api/v1';
//qd c'est en local ça fais comme dhab avec render, si c'est en dev ça recup depuis vercel

export default BASE_URL;