import React, { useState, useEffect } from 'react';
import Constants from './Constants';

function Variable({ variable }) {
    const [values, setValues] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(variable.valuesUrl, {
                headers: Constants.HEADERS,
            });
            const data = await result.json();
            setValues(data.results);
        }
        fetchData();
    }, [variable.valuesUrl]);

    return (
        <div>
            <p>{variable.label}</p>
            <h6>Last value</h6>
            <p>Value:{variable.lastValue.value}</p>
            <p>Timestamp:{(variable.lastValue.timestamp)}</p>
            <div className="container p-3">
                <h6>Values</h6>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Value</th>
                            <th>Timestamp</th>
                            <th>Epoch</th>
                            <th>Lat</th>
                            <th>Lng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {values.map((value, index) => {
                            let date = new Date(value.timestamp);
                            return (
                                <tr key={index}>
                                    <td>{value.value}</td>
                                    <td>{date.toLocaleString()}</td>
                                    <td>{value.timestamp}</td>
                                    <td>{value.context.lat}</td>
                                    <td>{value.context.lng}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Variable;