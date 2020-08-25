import React from 'react'
import Layout from '../Layout'
import BreadCrum from '../BreadCrum'
import ListItem from '../ListItem'

const AboutPage = () => {
    return (
        <Layout>
            <BreadCrum text="about us"/>
            <section className="dark-section" style={{borderBottom: "1px solid #33353E"}}>
                <h2 className="heading">A BIT ABOUT US</h2>
                <p>
                    The classic beauty Nigeria is a platform that empowers women financially, and also gives them the confidence to say they are beautiful. 
                    It is the first of it's kind as the public decides who wins the prize by giving them their votes. It was established may 2020 , when it had the first edition of the contest . The contest is open to
                    ladies (Nigerians for now) ages 18 to 25  and registration is free.
                </p>
            </section>
            <section className="dark-section" style={{borderBottom: "1px solid #33353E"}}>
                <h2 className="heading">HOW TO APPLY</h2>
                <p>
                    The application process is a easy one and free. Just follow the  instructions and you will be good to go. <span className="red-text">Remember registration
                    ends on the 25th of August.</span>
                </p>
                <div className="row">
                    <div className="col l7 m8 s12">
                        <ListItem text="Take A Professional Picture "/>
                        <ListItem text="Send Your Picture To +2349014544829  "/>
                        <ListItem text={`Follow Us On IG`}/>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage
