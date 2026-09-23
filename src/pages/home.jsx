import { useState, useEffect } from "react"
import Filters from "../components/filterbar"
import MatchDisplay from "../components/matchdisplay"
import apiService from '../services/apiService';
import '../styles/pages/_home.scss'


const Home = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [matches, setMatches] = useState([])
    const [tour, setTour] = useState("all")
    const [matchType, setMatchType] = useState("live")

    useEffect(() => { 
        const controller = new AbortController();
        async function loadMatches() {
            try {
                setLoading(true); 
                setError(null);
                const [ liveData, incomingData, finishedATPData, finishedWTAData ] = await Promise.all([ apiService.getlive(controller.signal), apiService.getincoming(controller.signal), apiService.getfinishedatp(controller.signal), apiService.getfinishedwta(controller.signal) ]);

                 const live = (liveData.data || []).map(match => ({
                    id: match.id,
                    player1: match.players?.p1?.name ?? "Joueur inconnu",
                    player2: match.players?.p2?.name ?? "Joueur inconnu",
                    tour: match.tour,
                    tournament: match.tournament,
                    date: match.scheduled_time,
                    type: "live",
                    scorep1: match.score?.games[0],
                    scorep2: match.score?.games[1]
                }))

                const incoming = (incomingData.data || []).map(match => ({
                    id: match.id,
                    player1: match.player1_name ?? "Joueur inconnu",
                    player2: match.player2_name ?? "Joueur inconnu",
                    tour: match.tour,
                    tournament: match.tournament,
                    date: match.start_time,
                    type: "incoming"
                }))

                const finishedATP = (finishedATPData.data || []).map(match => ({
                    id: match.id,
                    player1: match.players?.p1?.name ?? "Joueur inconnu",
                    player2: match.players?.p2?.name ?? "Joueur inconnu",
                    tour: match.tour,
                    tournament: match.tournament,
                    date: match.scheduled_time,
                    type: "finished",
                    winner: match.winner,
                    scorep1: match.score?.games[0],
                    scorep2: match.score?.games[1]
                }))

                const finishedWTA = (finishedWTAData.data || []).map(match => ({
                    id: match.id,
                    player1: match.players?.p1?.name ?? "Joueur inconnu",
                    player2: match.players?.p2?.name ?? "Joueur inconnu",
                    tour: match.tour,
                    tournament: match.tournament,
                    date: match.scheduled_time,
                    type: "finished",
                    winner: match.winner,
                    scorep1: match.score?.games[0],
                    scorep2: match.score?.games[1]
                }))

                setMatches([
                    ...live,
                    ...incoming,
                    ...finishedATP,
                    ...finishedWTA
                ])

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

    const filteredMatches = matches.filter(match => {

        const tourOk =
            tour === "all" || match.tour === tour

        const typeOk =
            match.type === matchType

        return tourOk && typeOk
    })

    if(loading) {
        return <p>Chargement...</p>
    }

    if (error) { 
        return <p>{error}</p>; 
    }

  return (
    <>
    <main className="homemain">
        <img className="lillogo" src="logotx.webp" alt="logo tennistix" />

        <Filters
            tour={tour}
            setTour={setTour}
            matchType={matchType}
            setMatchType={setMatchType}
        />

        <section className="sectionmatches">
            <MatchDisplay matches={filteredMatches} />
        </section>
        <p>{error}</p>
    </main>
    </>
  )
}

export default Home