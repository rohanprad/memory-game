import React from 'react'

function Gameboard(props) {
    const { clubs, updateScore } = props
    const shuffle = array => {
        array.sort(() => Math.random() - 0.5);
    }
    shuffle(clubs)
    return (
        <div className="container">
            {clubs.map(club => {
                return (
                    <div key={club.name} className="clubDiv" onClick={updateScore} id={club.name}>
                        <img src={club.logo} alt="Club Logo" id={club.name} />
                        <p id={club.name}>{club.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Gameboard