import React from "react"

const Prose: React.FC = ({ children }) => {
  return (
    <div className="mx-4 my-8 md:my-12">
      <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default Prose
