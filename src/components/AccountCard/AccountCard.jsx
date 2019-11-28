import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const AccountCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>{`${props.data.name}`}</Typography>
                <Typography className={classes.content}>{`ID: ${props.data.id}`}</Typography>
                <Typography className={classes.content}>{`IBAN: ${props.data.card.iban}`}</Typography>
                <Typography className={classes.content}>{`Balance: ${props.data.card.balance}`}</Typography>
            </CardContent>
        </Card>
    );
}

export default AccountCard;


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