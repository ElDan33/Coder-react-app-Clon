import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun} from '@fortawesome/free-solid-svg-icons'


const ModeToggle = () => {
    
    const appHeader = document.querySelector(".App-header");
    const label = document.querySelector(".label");
    const ball = document.querySelector(".ball");



    return (
        <>
            <div>
                <input onClick={()=>{appHeader.classList.toggle("App-header-dark");
                                        label.classList.toggle("label-dark");
                                        ball.classList.toggle("ball-dark");
                                    }} 
                    type="checkbox" className="checkbox" id="checkbox"
                />
                <label htmlFor="checkbox" className="label">
                    <FontAwesomeIcon icon={faMoon} />
                    <FontAwesomeIcon icon={faSun} />
                    <div className="ball"/>
                </label>
            </div>
        </>
    )
}

export default ModeToggle