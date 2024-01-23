import React from 'react'
import commonHoc from './commonHoc'

function likeImgHOC({ handleCount ,count}) {
  return (


      <button onClick={handleCount}>Like Image {count}</button>
  )
}
export default commonHoc(likeImgHOC)