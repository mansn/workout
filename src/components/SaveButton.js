import React from 'react'

const SaveButton = ({ handleSave, saveStatus }) => {
  return (
    <button className={['save-btn', saveStatus].join(' ')} onClick={handleSave}>
      {saveStatus === 'saving' ? (
        <div className="spinner" />
      ) : saveStatus === 'saved' ? (
        String.fromCharCode('10003')
      ) : (
        'Save'
      )}
    </button>
  )
}

export default SaveButton
