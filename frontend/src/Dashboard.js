import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const ws = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);

    ws.onmessage = (event) => {
      const priceData = JSON.parse(event.data);
      setData((prev) => [
        ...prev.slice(-20),
        {
          time: new Date().toLocaleTimeString(),
          price: +priceData.price,
        },
      ]);
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      <h1>Welcome, {auth.currentUser?.email}!</h1>
      <button onClick={() => signOut(auth)}>Sign Out</button>

      <LineChart width={600} height={300} data={data}>
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}
