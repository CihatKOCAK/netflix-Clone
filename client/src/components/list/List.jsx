import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react";

export default function List({ title, items }) {
    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const listRef = useRef();
    
    
    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${230 + distance}px)`;
        }
        if (direction === "right" && slideNumber < 5) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-230 + distance}px)`;
        }
    };
    
    return (
        <div className="list">
            <span className="listTitle">{title}</span>
            <div className="wrapper">
                <ArrowBackIos
                    className="sliderArrow left"
                    onClick={() => handleClick("left")}
                    style={{ display: !isMoved && "none" }}
                />
                <div className="container" ref={listRef}>
                    {items.results.length > 0 && items.results.map((item,key) => (
                        
                        <ListItem key={key} item={item} index = {key}/>  
                    
                    ))}
                </div>
                <ArrowForwardIos
                    className="sliderArrow right"
                    onClick={() => handleClick("right")}
                />
            </div>
        </div>
    );
}