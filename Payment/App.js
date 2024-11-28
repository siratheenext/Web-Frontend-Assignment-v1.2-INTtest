import React, { useState } from "react";
import Header from "./Header";
import CheckoutForm from "./CheckoutForm";
import OrderSummary from "./OrderSummary";

const App = () => {
  const [orderTotal, setOrderTotal] = useState(570.98); // Initial total

  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Pass orderTotal to CheckoutForm */}
        <div style={{ flex: 2, marginRight: "20px" }}>
          <CheckoutForm orderTotal={orderTotal} />
        </div>

        {/* Pass setOrderTotal to OrderSummary */}
        <div style={{ flex: 1 }}>
          <OrderSummary onTotalChange={setOrderTotal} />
        </div>
      </div>
    </div>
  );
};

export default App;
