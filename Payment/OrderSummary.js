import React, { useState, useEffect } from "react";

const OrderSummary = ({ onTotalChange }) => {
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(34.99);
  const [isCouponValid, setIsCouponValid] = useState(true);

  const calculateTotal = () => 570.98 - discount;

  useEffect(() => {
    onTotalChange(calculateTotal());
  }, [discount, onTotalChange]);

  const handleApplyCoupon = () => {
    if (coupon.toLowerCase() === "saving money") {
      setIsCouponValid(true);
      setDiscount(50.0);
    } else {
      setIsCouponValid(false);
      setDiscount(0.0);
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "400px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        border: "1px solid #ddd",
      }}
    >
      <h3>Order Summary</h3>
      <ul style={{ listStyleType: "none", padding: 0, marginBottom: "20px" }}>
        <li style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Franklin Merino Wool V-Neck Knit</span>
          <span>$199.00</span>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Judd Slim Dress Chino Pant</span>
          <span>$159.00</span>
        </li>
        <li style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Angus Shawl Cardigan</span>
          <span>$199.99</span>
        </li>
      </ul>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Delivery</span>
        <span>$16.99</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Discount</span>
        <span>${discount.toFixed(2)}</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Total (exc tax)</span>
        <span>$557.99</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Tax</span>
        <span>$12.99</span>
      </div>
      <hr />
      <div style={{ display: "flex", justifyContent: "space-between", fontWeight: "bold" }}>
        <span>Order Total</span>
        <span>${calculateTotal().toFixed(2)}</span>
      </div>
      {isCouponValid ? (
        <div style={{ backgroundColor: "#dff0d8", padding: "10px", margin: "20px 0", textAlign: "center" }}>
          Your total saving on this order <b>${discount.toFixed(2)}</b>
        </div>
      ) : (
        <div style={{ color: "red", padding: "10px", margin: "20px 0", textAlign: "center" }}>
          Invalid coupon code
        </div>
      )}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          placeholder="Coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        <button
          onClick={handleApplyCoupon}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6C63FF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
