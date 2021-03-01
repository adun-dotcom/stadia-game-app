import React from 'react'
import ContentStructure from './contentStructure'
import Data2 from './Data2'
import LogoPro from '../LogoPro.svg'
import Data1 from './Data1'

function Content() {
  const styles = {
    width: '350px',
    height: '50px',
    fontSize: '2rem',
    marginBottom:'2rem'
  }
    return (
      <>
        {/* section1 */}
        <section className="section">
          <img src={LogoPro} alt=""/>
          <h2>Play games in all their glory for free with Stadia Pro</h2>
          <p>
            Free games. More every month. Keep them as long as you’re a Stadia
            Pro member.<sup>1</sup>
          </p>
          <div className="section-div">
            {Data1.map((game) => (
              <ContentStructure key={game.id} games={game} />
            ))}
          </div>
        </section>
        {/* section 2 */}
        <section className="section">
          <button style={styles}>Try Stadia Pro free for 1 month</button>
          <p>
            <sup>1</sup>$9.99/mo after trial, cancel anytime.
          </p>
          <h2>More great games are waiting in the Stadia store</h2>
          <p>
            The games you buy go from screen… to screen… to screen.{' '}
            <span>Compatible</span> laptops and phones. TVs. You have what it
            takes.
          </p>
          <div className="section-div">
            {Data2.map((game) => (
              <ContentStructure key={game.id} games={game} />
            ))}
          </div>
        </section>
      </>
    )
}
export default Content