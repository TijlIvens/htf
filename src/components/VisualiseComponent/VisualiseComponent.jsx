import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountCard from "../../components/AccountCard/AccountCard";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import PaginatorComp from "../Paginator/Paginator";
import Sorting from "../Sorting/Sorting";

const Visualisecomponent = props => {
  const [data, setDate] = useState(null);
  const [sortData, setSortDate] = useState(null);
  const [currentData, setCurrentData] = useState([]);

  //if false it are the transactionsToVisualise
  const [toVisualise, setToVisualise] = useState("accounts");
  const cards = {
    accounts: AccountCard,
    transactions: TransactionCard
  };
  let url = `${props.apiBaseUrl}${props.currentBank}${toVisualise}`;
  const parsedAccounts = accounts => {
    let mappedData = [];
    accounts.map(account => {
      console.log(account);
      let name = account.lastName ? account.lastName : account.name;
      let id = account.id;
      let nationality = account.nationality
        ? account.nationality
        : account.country;
      let cardId = account.account ? account.account.id : account.card.id;
      let iban = account.account ? account.account.iban : account.card.iban;
      let balance = account.account
        ? account.account.balance
        : account.card.balance;
      mappedData.push({
        id: id,
        name: name,
        nationality: nationality,
        card: {
          id: cardId,
          iban: iban,
          balance: balance
        }
      });
    });
    //console.log(`Er zijn ${accounts.length} resultaten`);
    console.log(mappedData);
    return mappedData;
  };

  const parsedTransactions = transactions => {
    let mappedTransactions = [];
    transactions.map(transaction => {
      console.log(transaction);
      let id = transaction.id;
      let sender;
      if (transaction.senderIban) sender = transaction.senderIban;
      else if (transaction.sender) sender = transaction.sender;
      else if (transaction.originAccount) sender = transaction.originAccount;
      else sender = "something wrong";
      let recipient;
      if (transaction.receiverIban) recipient = transaction.receiverIban;
      else if (transaction.recipient) recipient = transaction.recipient;
      else if (transaction.destinationIban)
        recipient = transaction.destinationIban;
      else sender = "something wrong";
      let amount = transaction.amount;
      let time = transaction.time ? transaction.time : transaction.dateTime;
      let message = transaction.message;
      mappedTransactions.push({
        id: id,
        sender: sender,
        recipient: recipient,
        amount: amount,
        time: time,
        message: message
      });
    });
    return mappedTransactions;
  };

  useEffect(() => {
    axios
      .get(`${url}`, {
        headers: {
          Authorization: props.apiKey
        }
      })
      .then(data => {
        if (toVisualise === "accounts") {
          setDate(parsedAccounts(data.data.result));
        } else if (toVisualise === "transactions") {
          setDate(parsedTransactions(data.data.result));
        }
      })
      .catch(err => console.log(err));
  }, [url, props.apiKey, toVisualise]);

  return (
    <div style={{ width: "100%" }}>
      {data && <Sorting data={data} setData={setSortDate} />}
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
      {currentData &&
        currentData.map(data => {
          const Card = cards[toVisualise];
          return <Card key={data.id} data={data} />;
        })}
      {sortData && (
        <PaginatorComp dataIn={sortData} setCurrentData={setCurrentData} />
      )}
    </div>
  );
};

export default Visualisecomponent;
