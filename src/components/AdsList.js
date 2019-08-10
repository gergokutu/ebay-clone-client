import React from 'react'
// import { connect } from 'react-redux'

export default function Ad(props) {
  const { ads } = props.list
  console.log('Ad/props test:', props)

  return (
    <ul>
      {!ads && 'Loading...'}
      {ads && ads.map((ad, index) => <li key={index}>{ad.title}: {ad.price} EUR</li>)}
    </ul>
  )
}

