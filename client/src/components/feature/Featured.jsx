import { PlayArrow } from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import "./featured.scss";

import { useHistory } from "react-router-dom";

export default function Featured({ type, item }) {
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }
    //console.log(item)
    let description = item.overview;
    if (description.length > 200) {
        description = description.substring(0, 200) + '...';
    }
    let history = useHistory();
    function handleOnClick() {
        history.push('/watch');
    }
    return (
        <div className="featured">
            <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt="" />
            <div className="info">
                <a> {item.first_air_date.substring(0, 4)} | {item.seasons.length} Seasson | {genres.join(', ')}</a>
                <span className="desc">{description} </span>
                <div className="buttons">
                    <button className="play" onClick={handleOnClick} >
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoIcon />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}


