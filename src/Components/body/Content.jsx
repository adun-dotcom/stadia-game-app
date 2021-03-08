import React from 'react'
import ContentStructure from './ContentStructure'
import LogoPro from '../LogoPro.svg'
import {Data1, Data2} from '../../data'
import Button from '../Button'

function Content() {
  
    return (
      <>
        {/* section1 */}
        <section className="section">
          <img src={LogoPro} alt="" />
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
          <Button
            clsName="content-btn"
            text="Try Stadia Pro free for 1 month"
          />
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