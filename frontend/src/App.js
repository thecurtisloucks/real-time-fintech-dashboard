import React, { useEffect, useState } from "react";

function App() {
  const [price, setPrice] = useState("");

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:4000");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setPrice(data.price);
    };

    return () => ws.close();
  }, []);

  return (
    <div>
      <h1>Real-Time Fintech Dashboard</h1>
      <h2>FAKE: ${price}</h2>
    </div>
  );
}

export default App;
