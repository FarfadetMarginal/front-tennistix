import '../styles/components/_filter.scss'

function Filters({ tour, setTour, matchType, setMatchType }) {

    return (
        <div className="filters">

            <select aria-label='filter match type (All / ATP / WTA)' value={tour} onChange={(e) => setTour(e.target.value)}>
                <option value="all">All</option>
                <option value="atp">ATP</option>
                <option value="wta">WTA</option>
            </select>


            <select aria-label='filter match date (live / incoming / finished)' value={matchType} onChange={(e) => setMatchType(e.target.value)}>
                <option value="live">Live</option>
                <option value="incoming">Incoming</option>
                <option value="finished">Finished</option>
            </select>

        </div>
    )
}

export default Filters
