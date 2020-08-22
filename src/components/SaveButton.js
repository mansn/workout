import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const SaveButton = ({ handleSave, saveStatus }) => {
  // TODO: Fix ugly ternary, and remove temporary solution to use the isAuthenticated hook here
  // should try and move decisions on this higher up the component hierarchy
  const { isAuthenticated } = useAuth0()

  if (!isAuthenticated) return null

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
