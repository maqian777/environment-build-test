import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';

const baseUrl = process.env.HOST_URL ?? "http://localhost:3000";

function App() {
  const [apiResult, setApiResult] = useState("");
  const resultFetch = async () => {
    try {
      const result = await axios({ url: `${baseUrl}/api`, method: "get" })
      setApiResult(result.data.data);
    } catch (err) {
      setApiResult("server error");
    }
  }
  useEffect(() => {
    void resultFetch();
  }, []);

  return (
    <div className="App">
      {apiResult}
    </div>
  );
}

export default App;
