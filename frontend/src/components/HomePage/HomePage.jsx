import React from 'react'
import Layout from '../Layout'
import CenterPiece from './CenterPiece'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import PastWinners from './PastWinners'

const HomePage = () => {
    return (
        <Layout>
            <CenterPiece />
            <AboutSection />
            <PastWinners />
            <ContactSection />
        </Layout>
    )
}

export default HomePage
