import React from 'react'
import ContentStructure from './ContentStructure'
import Featured from './Featured'
import LogoPro from '../LogoPro.svg'
import {Data, Data1, Data2} from '../../data'
import Button from '../Button'


function Content() {
  
    return (
      <>
        <div>
          {/* section1 */}
          <Featured data={Data} clsName="header-div">
            <h1>Featured games</h1>
          </Featured>
          {/* section2 */}
          <Featured data={Data1} clsName="section-div">
            <img src={LogoPro} alt="" />
            <h2>Play games in all their glory for free with Stadia Pro</h2>
            <p>
              Free games. More every month. Keep them as long as you’re a Stadia
              Pro member.<sup>1</sup>
            </p>
          </Featured>
          {/* section3 */}
          <Featured data={Data2} clsName="section-div">
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
          </Featured>
        </div>
      </>
    )
}
export default Content