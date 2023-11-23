import { useEffect, useState } from "react";
import Constants from "../ubidots/Constants";

const Dashboards = () => {
    const [dots, setDots] = useState([]);
    useEffect(() => {
        const getAllVariables = async () => {
            const response = await fetch(`${Constants.UBIDOTS_URL}devices/${Constants.DEVICE}/variables`, {
                headers: Constants.HEADERS
            });
            const data = await response.json();
            return data.results;
        }
        const getValues = async (variable) => {
            const response = await fetch(variable.valuesUrl, {
                headers: Constants.HEADERS,
            });

            const data = await response.json();
            return data.results;
        }

        const getDots = async () => {
            const variables = await getAllVariables();
            const table = {}
            for (let variable of variables) {
                let values = await getValues(variable);
                for (let value of values) {
                    const timestamp = value.timestamp;
                    if (!table[timestamp]) {
                        table[timestamp] = {
                            timestamp: timestamp,
                        };
                    }
                    if (value.value === 1) {
                        table[timestamp].lat = value.context.lat;
                        table[timestamp].lng = value.context.lng;
                    } else {
                        table[timestamp].rfid = value.value;
                    }
                }
            }
            setDots(Object.values(table));
        }
        getDots();

    }, []);
    // make a table for dots showing lat, lng, rfid, timestamp and timestamp as locale string
    return (
        <div>
            <h1>Dashboards</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>RFID</th>
                        <th>Lat</th>
                        <th>Lng</th>
                        <th>Timestamp</th>
                        <th>Timestamp (Locale String)</th>
                    </tr>
                </thead>
                <tbody>
                    {dots.map((dot, index) => {
                        return (
                            <tr key={index}>
                                <td>{dot.rfid}</td>
                                <td>{dot.lat}</td>
                                <td>{dot.lng}</td>
                                <td>{dot.timestamp}</td>
                                <td>{new Date(dot.timestamp).toLocaleString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboards;