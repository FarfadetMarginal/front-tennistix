import { formatDate } from '../utils/formatdate';
import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import apiService from '../services/apiService'

function MatchDisplay({ matches }) {
    const { accessToken } = useAuth()
    const [pronosDone, setPronosDone] = useState({}) // { match_id: prono choisi }
    const [pronoError, setPronoError] = useState({})

    const handleProno = async (matchId, prono) => {
        try {
            await apiService.prono(accessToken, matchId, prono)
            setPronosDone(prev => ({ ...prev, [matchId]: prono }))
        } catch (err) {
            setPronoError(prev => ({ ...prev, [matchId]: err.message }))
        }
    }
    return (
        <div className="matches">

            {matches.map(match => (
                <div className="match" key={`${match.type}-${match.id}`}>

                    <div className="match-header">
                        <span>{match.tournament}</span>
                        <span>{match.tour.toUpperCase()}</span>
                    </div>

                    {/* Affiché si le match est scheduled */}
                    {match.type === 'live' && (
                        <div className="match-score">
                            <div className="match-details"><p>{match.player1}</p><p className='match-details-live'><span className='match-details-games'>{match.scorep1}</span><span className='match-details-points'>{match.pointp1}</span></p></div>
                            <div className="match-details"><p>{match.player2}</p><p className='match-details-live'><span className='match-details-games'>{match.scorep2}</span><span className='match-details-points'>{match.pointp2}</span></p></div>                        
                        </div>
                    )}



                    {/* Affiché si le match est terminé ou live */}
                    {match.type === 'finished' && (
                        <div className="match-score">
                            <div className="match-details"><p>{match.player1}</p><span>{match.scorep1}</span></div>
                            <div className="match-details"><p>{match.player2}</p><span>{match.scorep2}</span></div>
                        </div>
                    )}

                    {/* Affiché si le match est scheduled */}
                    {match.type === 'incoming' && (
                        <div className="match-infos">
                            <span>{formatDate(match.date)}</span>
                        </div>
                    )}

                    {/* Boutons prono si le match est scheduled */}
                    {match.type === 'incoming' && (
                        <div className="pronos">
                            {pronosDone[match.id] ? (
                                // Prono déjà posé — affiche le choix
                                <>                                
                                    <div className="match-details">
                                        <p>{match.player1}</p>
                                         <p>Prono posé :</p>
                                    </div>
                                    <div className="match-details">
                                        <p>{match.player2}</p>
                                         <p>{pronosDone[match.id] === 1 ? match.player1 : match.player2}</p>
                                    </div>
                               </>
                            ) : (
                                // Boutons de prono
                                <>
                                    <div className="match-details">
                                        <p>{match.player1}</p>
                                        <button onClick={() => handleProno(match.id, 1)}>Prono</button>
                                    </div>
                                    <div className="match-details">
                                        <p>{match.player2}</p>
                                        <button onClick={() => handleProno(match.id, 2)}>Prono</button>
                                    </div>
                                </>
                            )}
                            {pronoError[match.id] && <p className="error">{pronoError[match.id]}</p>}
                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}

export default MatchDisplay