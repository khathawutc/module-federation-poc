import { Link } from 'react-router-dom'
import React from 'react'

const style = {
  border: '1px solid #000',
  padding: 12,
  margin: '12px 0',
  background: '#d5d5d5',
}

const Navigation = () => (
  <div style={style}>
    <Link to="/">Home</Link> - <Link to="/about">About</Link>
  </div>
)

export default Navigation
