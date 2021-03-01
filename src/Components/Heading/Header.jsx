import React from 'react'
import HeaderStructure from './headerStructure'
import HeaderArr from './headerArr'
function Header() {
    return (
      <div className="header-section">
        <h1>Featured games</h1>
        <div className="header-div">
          {HeaderArr.map((game) => (
            <HeaderStructure key={game.id} games={game} />
          ))}
        </div>
      </div>
    )
}

export default Header