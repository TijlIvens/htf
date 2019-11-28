import React, { useState, useEffect } from 'react';
import axios from "axios";

const VisualiseComponent = props => {
    const [data, setDate] = useState(null);


    useEffect(() => {
        console.log("hij komt hier wel");
        axios.get(`${props.apiBaseUrl}/caymannationalbank/accounts`, {
            headers: {
                Authorization: props.apiKey
            }
        }
        ).then(data => console.log(data.data.result)).catch(err => console.log(err));
    });

    return (
        <div>visualise</div>
    );
}

export default VisualiseComponent;