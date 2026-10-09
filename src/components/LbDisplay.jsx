function LbDisplay({ data, type }) {
    return (
        <div className="leaderboard">
            {data.map((row, index) => (
                <div className="lb-row" key={row.pseudo}>
                    <span className="lb-pp"><img src={`/avatars/${row?.pp}`} alt="profile picture" /></span>
                    <div className="lbd2">
                        <span className="lb-pseudo">{row.pseudo}</span>
                        {type === 'score' 
                            ? <span className="lb-value">{row.score} pts</span>
                            : <span className="lb-value">{row.winrate}%</span>
                        }
                    </div>
                    <span className="lb-rank">{index + 1}</span>
                </div>
            ))}
            {data.length === 0 && <p>Aucun résultat</p>}
        </div>
    )
}

export default LbDisplay