import { useState } from "react"
import apiService from '../services/apiService';

function MatchDisplay() {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [live, setLive] = useState([])
    const [atp, setAtp] = useState([])
    const [wta, setWta] = useState([])
    const [incoming, setIncoming] = useState([])

    useEffect(() => { 
        const controller = new AbortController();
        async function loadMatches() {
            try {
                setLoading(true); 
                setError(null);
                const [ liveData, incomingData, finishedATPData, finishedWTAData ] = await Promise.all([ apiService.getlive(controller.signal), apiService.getincoming(controller.signal), apiService.getfinishedatp(controller.signal), apiService.getfinishedwta(controller.signal) ]);

                setLive(liveData.data || []);
                setIncoming(incomingData.data || []);
                setAtp(finishedATPData.data || []);
                setWta(finishedWTAData.data || []);

            } catch (err) {
                if(err.name !== 'AbortError') {
                console.error('Loading error: ', err)
                setError(err.message)
                }
            } finally {
                // Le finally s'exécute quoi qu'il arrive, après tout ce qui vient avant
                if(!controller.signal.aborted){
                setLoading(false)
                // Rediriger sur la page profile
                }
            }
        }
        loadMatches()

        return () => { controller.abort(); };
    }, []);

    if(loading) {
        return <p>Chargement...</p>
    }

    if (error) { 
        return <p>{error}</p>; 
    }

  return (
    <>
        <section className="sectionmatch">
            

        </section>
        <p>{error}</p>
    </>
  )
}

export default MatchDisplay