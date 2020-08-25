import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import domainName from '../../domainName';

const ContestantCard = ({ id, imgUrl, name, votes, setUser, modal }) => {

    const handleVote = ()=>{
        modal.open();
        console.log("open started");
        setUser({id, profile_image: imgUrl, name});
        console.log(modal);
    }

    const copyToClipboard = () => {
        window.M.toast({html: "Link Copied To Clipboard", classes: "blue white-text"})
    };

    return (
        <div className="col l4 m6 s12" style={{marginTop: "25px"}}>
            <div className="contestant-card center-align">
                <div>
                    <img src={ imgUrl } alt=""/>
                </div>
                <p><b>{ name }</b></p>
                <p>Vote Count: { votes }</p>
                <button className="btn" onClick={ handleVote }>Vote</button>
                <CopyToClipboard text={`${domainName.replace('api/', "")}contestant/${id}`}
                    onCopy={() => copyToClipboard()}>
                    <button className="btn" style={{marginLeft: "10px"}}>Share</button>
                </CopyToClipboard>
                {/* <button className="btn modal-trigger" data-target="modal1">Vote</button> */}
            </div>
        </div>
    )
}

export default ContestantCard
