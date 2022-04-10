import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'

import './SelectModal.css'

export default function SelectModal({ selectionList, title, buttonText, returnSelection, isOpen, closeModal }) {

  const [selectedIndex, setSelectedIndex] = useState(null)

  const renderSearchBar = () => {
    return (
      <div className='select-modal-search'>
        <FeatherIcon 
          width={16} 
          height={16} 
          icon="search" 
        />
        Search
      </div>
    )
  }

  const renderOptions = () => {
    return (
      <div className='select-modal-options-container'>
        {selectionList.map((selection, index) => {
          return (
            <span 
              className={`select-modal-option ${index === selectedIndex ? 'selected' : ''}`} 
              onClick={() => setSelectedIndex(index)}
            >
              {selection.displayName}
            </span>
          )
        })}
      </div>
    )
  }

  const renderButton = () => {
    return (
      <div 
        className='select-modal-button'
        onClick={() => {
          returnSelection(selectionList[selectedIndex])
          closeModal()
        }}
      >
        {buttonText}
      </div>
    )
  }

  return (
    <div className='select-modal-bg'>
      <div className='select-modal-container card-style'>
        <div className='select-modal-title-container'>
          <span className='select-modal-title'>{title}</span>
          <FeatherIcon
            icon='x'
            width={20}
            height={20}
            onClick={closeModal}
            className="exit-modal-button"
          />
        </div>

        {renderSearchBar()}
        {renderOptions()}
        {renderButton()}
      </div>
    </div>
  )
}
