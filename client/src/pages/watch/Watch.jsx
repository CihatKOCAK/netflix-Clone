import { ArrowBackOutlined } from "@mui/icons-material"
import "./watch.scss";
import { useHistory } from "react-router-dom";

export default function Watch() {

  let history = useHistory();
  function handleOnClick() {
      history.push('/');
  }

  return (
    <div className="watch">
      <div className="back" onClick={handleOnClick} >
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="http://techslides.com/demos/sample-videos/small.mp4"
         />
    </div>
  );
}