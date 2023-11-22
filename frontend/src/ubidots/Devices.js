import React, { useState, useEffect } from "react";
import Device from "./Device";
import Constants from "./Constants";

function Devices() {
    const [devices, setDevices] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch(
                Constants.UBIDOTS_URL,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Auth-Token": Constants.UBIDOTS_TOKEN,
                    },
                }

            );
            const data = await response.json();
            setDevices(data.results);
        };
        getData();
    }, []);

    return (
        <>
            <h3>Devices</h3>
            <ul>
                {devices.map((device) => (
                    <li key={device.id}>
                        <Device device={device} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Devices;
