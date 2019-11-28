import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const AccountCard = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
        >{`${props.data.firstName} ${props.data.lastName}`}</Typography>
        <Typography
          className={classes.content}
        >{`Balance: ${props.data.account.balance} ${props.data.account.currency}`}</Typography>
        <Typography
          className={classes.content}
        >{`IBAN: ${props.data.account.iban}`}</Typography>
      </CardContent>
      {console.log(props.data)}
    </Card>
  );
};

const TransactionCard = props => {
  const classes = useStyles();

  return <div>{console.log(props.data)}</div>;
};

const Visualisecomponent = props => {
  const classes = useStyles();
  const [data, setDate] = useState(null);
  //if false it are the transactionsToVisualise
  const [toVisualise, setToVisualise] = useState("accounts");
  const cards = {
    accounts: AccountCard,
    transactions: TransactionCard
  };

  useEffect(() => {
    axios
      .get(`${props.apiBaseUrl}/caymannationalbank/${toVisualise}`, {
        headers: {
          Authorization: props.apiKey
        }
      })
      .then(data => {
        console.log(`Er zijn ${data.data.result.length} resultaten`);
        setDate(data.data.result);
      })
      .catch(err => console.log(err));
  }, [props.apiBaseUrl, props.apiKey, toVisualise]);

  return (
    <div className={classes.component}>
      {/* {data && isAccountsToVisualise ?
                data.map(account => <AccountCard key={account.id} account={account} />) :
                data.map()
            } */}
      {data &&
        data.map(data => {
          const Card = cards[toVisualise];
          return <Card key={data.id} data={data} />;
        })}
    </div>
  );
};

export default Visualisecomponent;

const useStyles = makeStyles({
  card: {
    minWidth: "250dp",
    display: "inline-block",
    margin: "10px"
  },
  title: {
    fontSize: "14px",
    marginBottom: "10px"
  },
  content: {
    fontSize: "10px"
  },
  component: {
    width: "100%"
  }
});
