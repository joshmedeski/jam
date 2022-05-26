import React from "react"
import CtaSection from "./cta-section"
import Footer from "./footer"
import Header from "./header"

const Layout: React.FC<{ disableCta?: boolean }> = ({
  children,
  disableCta,
}) => {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      {children}
      <div>
        {!disableCta && <CtaSection />}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
