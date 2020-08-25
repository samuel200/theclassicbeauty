import React from 'react'
import Layout from '../Layout'
import ListItem from '../ListItem'
import BreadCrum from '../BreadCrum'

const HowItWorks = () => {
    return (
        <Layout>
            <BreadCrum text="HOW IT WORKS"/>
            <section className="dark-section" style={{borderBottom: "1px solid #33353E"}}>
                <h2 className="heading">HOW TO APPLY</h2>
                <p>
                    The application process is an easy one and free. Just follow the  instructions and you will be good to go. <span className="red-text">Remember registration
                    ends on the 25th of August.</span>
                </p>
                <div className="row">
                    <div className="col l8 m10 s12">
                        <ListItem text="Take A Professional Picture "/>
                        <ListItem text="Send Your Picture To +2349014544829  "/>
                        <ListItem text="Follow Us On IG"/>
                    </div>
                </div>
            </section>
            <section className="dark-section" style={{borderBottom: "1px solid #33353E"}}>
                <h2 className="heading">HOW THE CONTEST WORKS</h2>
                <div className="row">
                    <div className="col l7 m8 s12">
                        <ListItem text="Contest On IG Which is 30% of your points"/>
                        <ListItem text="Qualification Process"/>
                        <ListItem text="Constest On Our Website (70% Of Your Points)"/>
                        <ListItem text="Final Assessment Of Points"/>
                        <ListItem text="Prize Giving"/>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default HowItWorks
