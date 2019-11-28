import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./AccountComponent.css"

const AccountCard = props => {
    return (
        <div className="accountCard">
            <div className="name">{`${props.account.firstName} ${props.account.lastName}`}</div>

            {console.log(props.account)}
        </div>
    );
}

const AccountComponent = props => {
    const [data, setDate] = useState(null);


    useEffect(() => {
        axios.get(`${props.apiBaseUrl}/caymannationalbank/accounts`, {
            headers: {
                Authorization: props.apiKey
            }
        }
        )
            .then(data => {
                setDate(data.data.result);
            })
            .catch(err => console.log(err));
    }, [props.apiBaseUrl, props.apiKey]);

    return (
        <div>
            {data && data.map(account => <AccountCard key={account.id} account={account} />)}
        </div>
    );
}

export default AccountComponent;