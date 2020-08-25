import React from 'react'
import Layout from '../Layout'
import ContactSection from '../HomePage/ContactSection'
import BreadCrum from '../BreadCrum'

const ContactPage = () => {
    return (
        <Layout>
            <BreadCrum text="contact us"/>
            <ContactSection />
        </Layout>
    )
}

export default ContactPage
