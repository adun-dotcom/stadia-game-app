import React from 'react'
import ContentStructure from './ContentStructure'
// import LogoPro from '../LogoPro.svg'
// import { Data1, Data2 } from '../../data'
// import Button from '../Button'

function Featured({data, children, clsName}) {
  return (
    <>
      {/* section1 */}
      <section className="section">
        {children}
        <div className={clsName}>
          {data.map((game) => (
            <ContentStructure key={game.id} games={game} />
          ))}
        </div>
      </section>
      {/* section 2 */}
     
    </>
  )
}
export default Featured
