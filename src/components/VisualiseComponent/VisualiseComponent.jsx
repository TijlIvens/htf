import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountCard from "../../components/AccountCard/AccountCard";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

const Visualisecomponent = props => {
    const [data, setDate] = useState(null);
    //if false it are the transactionsToVisualise
    const [toVisualise, setToVisualise] = useState("accounts");
    const cards = {
        accounts: AccountCard,
        transactions: TransactionCard
    };
    let url = `${props.apiBaseUrl}${props.currentBank}${toVisualise}`;

    useEffect(() => {
        axios
            .get(`${url}`, {
                headers: {
                    Authorization: props.apiKey
                }
            })
            .then(data => {
                if (toVisualise === "accounts") {
                    setDate([]);
                    let mappedData = [];
                    data.data.result.map(account => {
                        console.log(account);
                        let name = account.lastName ? account.lastName : account.name;
                        let id = account.id;
                        let nationality = account.nationality ? account.nationality : account.country;
                        let cardId = account.account ? account.account.id : account.card.id;
                        let iban = account.account ? account.account.iban : account.card.iban;
                        let balance = account.account ? account.account.balance : account.card.balance;
                        mappedData.push({
                            id: id,
                            name: name,
                            nationality: nationality,
                            card: {
                                id: cardId,
                                iban: iban,
                                balance: balance
                            }
                        })
                    });
                    console.log(`Er zijn ${data.data.result.length} resultaten`);
                    console.log(mappedData);
                    setDate(mappedData);
                }
                else if (toVisualise === "transactions") {
                    setDate([]);
                    console.log(data);
                    //setDate(data);
                }
            })
            .catch(err => console.log(err));
    }, [url, props.apiKey, toVisualise]);


    return (
        <div style={{ width: "100%" }}>
            <div className="toVisualiseButons">
                <button
                    onClick={() => {
                        setToVisualise("accounts");
                    }}
                >
                    Accounts
        </button>
                <button
                    onClick={() => {
                        setToVisualise("transactions");
                    }}
                >
                    Transactions
        </button>
            </div>
            {data &&
                data.map(data => {
                    const Card = cards[toVisualise];
                    return <Card key={data.id} data={data} />;
                })}
        </div>
    );
};

export default Visualisecomponent;
