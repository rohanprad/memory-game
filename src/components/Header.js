import React from 'react'

function Header(props) {
    return (
        <header>
            <img src='https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/270px-Premier_League_Logo.svg.png' alt="Premier League Logo" />
            <div className="scoreboard">
                <h3>Score: {props.score}</h3>
                <h3>Best: {props.bestScore}</h3>
            </div>
        </header>
    )
}

export default Header