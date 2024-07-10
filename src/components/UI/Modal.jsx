import React from 'react'
import portfolios from '../../assets/data/portfolioData'

const Modal = ({activeID, setShowModal}) => {

  const portfolio = portfolios.find(portfolios => portfolio.id = activeID)
  return (
    <div>Modal</div>
  )
}

export default Modal