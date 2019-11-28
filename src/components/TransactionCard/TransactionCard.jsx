import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const TransactionCard = props => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>{`From: ${props.data.sender}`}</Typography>
                <Typography className={classes.title}>{`To: ${props.data.recipient}`}</Typography>
                <Typography className={classes.content}>{`Amount: ${props.data.amount}`}</Typography>
            </CardContent>
        </Card>
    );
};

export default TransactionCard;

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