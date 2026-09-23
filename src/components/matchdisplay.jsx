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

                    <div className="players">
                        <p>{match.player1}</p>
                        <p>{match.player2}</p>
                    </div>

                    {/* Affiché si le match est terminé ou live */}
                    {(match.type === 'finished' || match.type === 'live') && (
                        <div className="match-score">
                            <span>{match.scorep1}</span>
                            <span>{match.scorep2}</span>
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
                            <button>Prono 1</button>
                            <button>Prono 2</button>
                        </div>
                    )}
                </div>
            ))}

        </div>
    )
}

export default MatchDisplay