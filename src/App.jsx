import Range from "./redux/component/Range";
import History from "./redux/component/History";
import React from "react";
import RenderHistory from "./redux/component/RenderHistory";

function App() {
  return (
    <div
      className="p-3"
      style={{
        backgroundColor: "#1b1f22",
        color: "#0dcaf0",
        opacity: ".9",
        minHeight: "100vh",
      }}
    >
      <h2>Chào mừng bạn đến với trò chơi đoán số</h2>
      <Range />
      <History />
      <RenderHistory />
    </div>
  );
}

export default App;
