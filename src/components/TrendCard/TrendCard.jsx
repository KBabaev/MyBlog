import './TrendCard.css'
import {TRENDS_DATA} from "../../Data/TrendData";

export const TrendCard = () => {

    return (
        <div className="TrendCard">
            <h3>Trends for you</h3>
            {
                TRENDS_DATA.length && TRENDS_DATA.map((trend, id) => {
                    return (
                        <div className="trend" key={id}>
                            <span>#{trend.name}</span>
                            <span>#{trend.shares}k shares</span>
                        </div>
                    )
                })
            }
        </div>
    )
}
