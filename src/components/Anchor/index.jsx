import React from 'react'

const index = ({href, titulo}) => {
  return (
    <>
      <a className="btn bg-warning gap-4 m-1 rounded" href={href}>{titulo}</a>
    </>
  )
}

export default index
