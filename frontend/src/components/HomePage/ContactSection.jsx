import React, { useState } from 'react'
import Axios from 'axios';
import $ from 'jquery';
import domainName from '../../domainName';
import FormLoader from '../FormLoader';

const ContactSection = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = e =>{
        e.preventDefault();
        const data = {
            name: $(e.target).find("input[name='name']").val(),
            email: $(e.target).find("input[name='email']").val(),
            subject: $(e.target).find("input[name='subject']").val(),
            message: $(e.target).find("textarea").val(),
        }

        setLoading(true);

        Axios.post(`${domainName}contact/`, data)
        .then(({data})=>{
            setLoading(false);
            if(data.error_message){
                window.M.toast({html: `<span class='red'>${data.error_message}</span>`, classes: "red"})
            }else{
                $('input').val("");
                $('textarea').val("");
                window.M.toast({html: `<span class='green'>${data.msg}</span>`, classes: "green"});
            }
        })
        .catch(err=>{
            setLoading(false);
            window.M.toast({html: "<span class='red'>Error Occured While Sending Message</span>", classes: "red"})
        })
    }

    return (
        <section className="dark-section center-align" style={{borderBottom: "1px solid #33353E"}}>
            {loading ? <FormLoader /> : ""}
            <h2 className="heading">CONTACT US</h2>
            <form onSubmit={ handleSubmit }>
                <div className="container" id="contact-form-holder">
                    <input type="text" name="name" placeholder="Full Name" required/>
                    <input type="email" name="email" placeholder="Email" required/>
                    <input type="text" name="subject" placeholder="Subject" required/>
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button className="btn red" type="submit">SEND MESSAGE</button>
                </div>
            </form>
        </section>
    )
}

export default ContactSection
