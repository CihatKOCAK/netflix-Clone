import { PlayArrow } from "@mui/icons-material";
import InfoIcon from '@mui/icons-material/Info';
import "./featured.scss"

export default function Featured({type, item}) {
    let genres = [];
    for(let i in item.genres) {
      genres.push( item.genres[i].name);
    }
    //console.log(item)
    let description = item.overview;
    if(description.length > 200) {
      description = description.substring(0, 200)+'...';
    }
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt="" />
            <div className="info">
               <a> {item.first_air_date.substring(0,4)} | {item.seasons.length } Seasson | {genres.join(', ')}</a>
                <span className="desc">{description} </span>
                <div className="buttons">
                    <button className="play">
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


