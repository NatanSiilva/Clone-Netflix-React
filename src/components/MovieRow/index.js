import React, { useState } from 'react';
import './MovieRow.css';


export default ({title, items}) => {

    const [scrollx, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth / 2)
        if(x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2)
        let listWidth = items.results.length * 150
        if((window.innerWidth - listWidth) > x) {
            x = (window.innerWidth - listWidth) - 60
        }

        setScrollX(x)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <i className="material-icons" style={{fontSize: 50}}>navigate_before</i>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <i className="material-icons" style={{fontSize: 50}}>navigate_next</i>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollx,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}