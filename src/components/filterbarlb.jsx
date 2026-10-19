import '../styles/components/_filter.scss'

function LbFilters({ type, setType, scope, setScope }) {

    return (
        <div className="filters">

            <select aria-label='filter leaderboard type (global / friends)' value={scope} onChange={(e) => setScope(e.target.value)}>
                <option value="global">Global</option>
                <option value="friends">Friends</option>
            </select>


            <select aria-label='filter leaderboard type (winrate / points)' value={type} onChange={(e) => setType(e.target.value)}>
                <option value="wr">Winrate</option>
                <option value="score">Score</option>
            </select>

        </div>
    )
}

export default LbFilters