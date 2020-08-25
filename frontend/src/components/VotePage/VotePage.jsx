import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import $ from 'jquery'
import { PaystackButton } from 'react-paystack'

import Layout from '../Layout'
import BreadCrum from '../BreadCrum'
import ContestantCard from './ContestantCard'
import FormLoader from '../FormLoader'
import domainName from '../../domainName'

const VotePage = () => {
    const [contestants, setContestants] = useState([]);
    const [search, setSearch] = useState('');
    const [emptyText, setEmptyText] = useState('There Are No Contestants Yet');
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({})
    const [paymentParams, setPaymentParams] = useState({
        email: "",
        amount: 0,
        text: "Vote Now",
        publicKey: "pk_live_4a19e7be090cafc1f9f43f745903c7028cb31d4d",
        onClose: () => {
            window.M.toast({ html: "Payment Failed", classes: "red white-text" })

        }
    });
    const [checkout, setCheckout] = useState();

    const modal = useRef();
    const select = useRef();

    const handleEmail = e => setPaymentParams({ ...paymentParams, email: e.target.value });
    const handlePaymentType = e => setPaymentParams({ ...paymentParams, amount: parseInt(e.target.value) });
    const changeUser = val => setUser(val)

    useEffect(() => {
        //initializing modal
        window.M.Modal.init(modal.current, {});
        window.M.FormSelect.init(select.current, {});
        setCheckout(window.M.Modal.getInstance(modal.current));

        setLoading(true);
        //api call
        axios.get(`${domainName}contestants/`)
            .then(response => {
                setContestants(response.data);
                setLoading(false);
            })
            .catch(err => setLoading(false));

        $("#search input").on("keyup", e => {
            setSearch(e.target.value.toLowerCase());
            if (contestants.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())) < 1) {
                setEmptyText("No Result Found :(");
            } else if (contestants.length < 1) {
                setEmptyText("There Are No Contestants Yet");
            }
        }).on("change", e => {
            setSearch(e.target.value.toLowerCase());
            if (contestants.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())) < 1) {
                setEmptyText("No Result Found :(");
            } else if (contestants.length < 1) {
                setEmptyText("There Are No Contestants Yet");
            }
        })
    }, [search])



    return (
        <Layout>
            {loading ? <FormLoader /> : ""}
            <BreadCrum text="vote" />
            <section className="dark-section" style={{ borderBottom: "1px solid #33353E" }}>
                <div id="search">
                    <input type="text" name="search" placeholder="SEARCH" />
                </div>
                {/* <h2 className="heading left-align">OUR CONTESTANTS</h2> */}
                <div id="vote-holder" className="row">
                    {contestants.length < 1 || contestants.filter(({ name }) => name.toLowerCase().includes(search)) < 1 ? <span>{emptyText}</span> : ""}
                    {
                        search === "" ?
                            contestants.map(({ id, name, vote_count, profile_image }) => <ContestantCard name={name} imgUrl={`${domainName.replace("/api/", "")}` + profile_image} votes={vote_count} id={id} setUser={changeUser} modal={checkout} />)
                            : contestants.filter(({ name }) => name.toLowerCase().includes(search.toLowerCase())).map(({ id, name, vote_count, profile_image }) => <ContestantCard name={name} imgUrl={"http://localhost:8000" + profile_image} votes={vote_count} id={id} setUser={changeUser} modal={checkout} />)
                    }
                </div>
            </section>
            <div id="modal1" className="modal grey-text" ref={modal}>
                <div className="modal-content center-align">
                    <img src={user.profile_image} alt="user-image" />
                    <h2>Voting for {user.name}</h2>
                    <div class="input-field">
                        <input type="email" name="email" onChange={handleEmail} id="payment-email" />
                        <label htmlFor="payment-email">Email</label>
                    </div>
                    <div class="input-field">
                        <select id="payment" onChange={handlePaymentType} ref={select}>
                            <option value="" selected disabled>Choose Ammount</option>
                            <option value="10000">1 vote 100 naira</option>
                            <option value="50000">6 votes 500 naira</option>
                            <option value="100000">12 votes 1000</option>
                            <option value="200000">24 votes 2000</option>
                            <option value="400000">48 votes 4000</option>
                            <option value="800000">96 votes 8000</option>
                        </select>
                        <label htmlFor="payment">Amount</label>
                    </div>
                    <PaystackButton {...({
                        ...paymentParams, onSuccess: (response) => {
                            setLoading(true);
                            axios.post(`${domainName}verify/${response.reference}/${user.id}/`)
                                .then(({ data }) => {
                                    setContestants(data);
                                    window.M.toast({ html: "Payment Was Successfull", classes: "green white-text" })
                                    setLoading(false);
                                })
                                .catch(err => {
                                    console.log(err)
                                    window.M.toast({ html: "Payment Failed", classes: "red white-text" })
                                    setLoading(false);
                                })

                        },
                    })} />
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                </div>
            </div>
        </Layout>
    )
}

export default VotePage
