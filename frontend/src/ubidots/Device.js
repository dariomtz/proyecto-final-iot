import React, { useState, useEffect } from "react";
import Variable from "./Variable";
import Constants from "./Constants";

function Device({ device }) {
    const [variables, setVariables] = useState([]);

    useEffect(() => {
        const getVariables = async () => {
            const response = await fetch(
                device.variables,
                {
                    headers: Constants.HEADERS,
                }
            );
            const data = await response.json();
            setVariables(data.results);
        };

        getVariables();
    }, [device.variables]);

    return (
        <div>
            <h1>{device.label}</h1>
            <h2>Variables</h2>
            <ul>
                {variables.map((variable) => (
                    <li key={variable.id}>
                        <Variable variable={variable} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Device;