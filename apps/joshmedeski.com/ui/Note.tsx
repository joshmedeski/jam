import React from 'react'

const Note: React.FC = ({ children }) => {
  return (
    <section className="rounded-lg bg-pink-100 dark:bg-pink-900 p-4">
      <strong>Note:</strong> {children}
    </section>
  )
}

export default Note
