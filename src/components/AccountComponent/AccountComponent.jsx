import React, { useState, useEffect } from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const AccountCard = props => {
    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>{`${props.account.firstName} ${props.account.lastName}`}</Typography>
                <Typography className={classes.content}>{`Balance: ${props.account.account.balance} ${props.account.account.currency}`}</Typography>
            </CardContent>
            {console.log(props.account)}
        </Card>
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


const useStyles = makeStyles({
    card: {
        minWidth: "25%",
        display: "inline-block",
        margin: "10px"
    },
    title: {
        fontSize: '14px',
        marginBottom: '10px'
    },
    content: {
        fontSize: '10px',
    }
})