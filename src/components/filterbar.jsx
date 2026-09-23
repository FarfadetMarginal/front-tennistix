import '../styles/components/_filter.scss'

function Filters({ tour, setTour, matchType, setMatchType }) {

    return (
        <div className="filters">

            <select value={tour} onChange={(e) => setTour(e.target.value)}>
                <option value="all">All</option>
                <option value="atp">ATP</option>
                <option value="wta">WTA</option>
            </select>


            <select value={matchType} onChange={(e) => setMatchType(e.target.value)}>
                <option value="live">Live</option>
                <option value="incoming">Incoming</option>
                <option value="finished">Finished</option>
            </select>

        </div>
    )
}

export default Filters