import React from 'react'
import commonHoc from './commonHoc'

function LikePostHOC({handleCount,count}) {
  return (
      <button onClick={handleCount} >Like Post {count}</button>
  )
}
export default commonHoc(LikePostHOC)