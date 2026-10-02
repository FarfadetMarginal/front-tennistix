import { formatDate } from '../utils/formatdate';

function MatchDisplay({ matches }) {
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
                        <div className="match-infos">
                            <div className="match-details"><p>{match.player1}</p><span>{match.scorep1}</span></div>
                            <div className="match-details"><p>{match.player2}</p><span>{match.scorep2}</span></div>
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
                            <div className="match-details"><p>{match.player1}</p><button>Prono</button></div>
                            <div className="match-details"><p>{match.player2}</p><button>Prono</button></div>
                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}

export default MatchDisplay