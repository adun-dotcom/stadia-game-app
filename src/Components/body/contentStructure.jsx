import React from 'react'

function ContentStructure(props) {
  const { imgurl, caption } = props.games
  return (
    <div>
      <a href="#">
        <img src={imgurl} alt="" />
      </a>
      <p>{caption}</p>
    </div>
  )
}
export default ContentStructure
