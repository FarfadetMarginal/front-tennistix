import { useState, useEffect } from 'react'
import projetsData from '../data/projets.json'

const Test = () => {

    interface Projet {
        title: string
        descr: string
    }

    const [data, setData] = useState<Projet[]>([])
    useEffect(() => {
       setData(projetsData)
    }, [])

    return (
        <>
         {data.map(el => (
            <article>
                <h2>{el.title}</h2>
                <p>{el.descr}</p>
            </article>
         ))}

        </>
    )
}

export default Test