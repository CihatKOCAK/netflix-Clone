import "./listItem.scss";
import { Add, PlayArrow, ThumbDown, ThumbUp } from "@mui/icons-material"
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  //console.log(item);
  let description = item.overview;
  if (description.length > 150) {
    description = description.substring(0, 150) + '...';
  }
  let date;
  if (item.first_air_date) {
    date = item.first_air_date.substring(0, 4);
  }
  else if (item.release_date) {
    date = item.release_date.substring(0, 4);
  }
  let history = useHistory();
  function handleOnClick() {
    history.push('/watch');
  }

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}

      onMouseLeave={() => setIsHovered(false)}
    >

      <img
        src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
        alt=""

      />
      {isHovered &&
        (

          <div className="itemInfo" key={item.id.toString()}  >
            <h3>{item.title}{item.name}</h3>
            <div className="icons">
              <PlayArrow onClick={handleOnClick} className="icon" />
              <Add className="icon" />
              <ThumbUp className="icon" />
              <ThumbDown className="icon" />
            </div>
            <div className="itemInfoTop" >
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span >{date}</span>
            </div>
            <div className="desc">
              {description}
            </div>
            <div className="vote">{" %" + item.vote_average * 10}</div>
          </div>

        )}
    </div>
  );
}