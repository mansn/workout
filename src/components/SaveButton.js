import React from 'react'

// TODO: Fix ugly ternary
const SaveButton = ({ handleSave, saveStatus }) => {
  return (
    <button className={['save-btn', saveStatus].join(' ')} onClick={handleSave}>
      {saveStatus === 'saving' ? (
        <div className="spinner" />
      ) : saveStatus === 'saved' ? (
        String.fromCharCode('10003')
      ) : saveStatus === 'error' ? (
        String.fromCharCode('10060')
      ) : (
        'Save'
      )}
    </button>
  )
}

export default SaveButton
