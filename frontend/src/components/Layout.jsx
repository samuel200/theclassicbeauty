import React from 'react'
import TopBar from './TopBar'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <section id="layout">
            <div className="container">
                <TopBar />
                <NavigationBar />
                {children}
                <Footer />
            </div>
        </section>
    )
}

export default Layout
