import React, { useState } from "react";

const CheckoutForm = ({ orderTotal }) => {
  const [formData, setFormData] = useState({
    address: "",
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    paymentMethod: null,
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Allow only numbers for cardNumber and cvv
    if ((name === "cardNumber" || name === "cvv") && !/^\d*$/.test(value)) {
      return; // Reject non-numeric characters
    }

    setFormData({ ...formData, [name]: value });

    // Perform validation as the user types
    validateField(name, value);
  };

  const handlePaymentMethodSelect = (method) => {
    setFormData({ ...formData, paymentMethod: method });
    setErrors({ ...errors, paymentMethod: "" }); // Clear any previous errors
    validateForm(); // Check overall form validity
  };

  const validateField = (name, value) => {
    let error = "";
    if (name === "address" && !value.trim()) {
      error = "Address is required.";
    }
    if (name === "nameOnCard" && !value.trim()) {
      error = "Name on Card is required.";
    }
    if (name === "cardNumber" && (!/^\d{16}$/.test(value))) {
      error = "Card Number must be exactly 16 digits.";
    }
    if (name === "expiryDate" && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) {
      error = "Expiry Date must be in MM/YY format.";
    }
    if (name === "cvv" && (!/^\d{3}$/.test(value))) {
      error = "CVV must be 3 digits.";
    }

    setErrors({ ...errors, [name]: error });
    validateForm(); // Check overall form validity
  };

  const validateForm = () => {
    const allValid =
      formData.address &&
      formData.nameOnCard &&
      /^\d{16}$/.test(formData.cardNumber) &&
      /^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate) &&
      /^\d{3,4}$/.test(formData.cvv) &&
      formData.paymentMethod;

    console.log("Form validation status:", {
      address: !!formData.address,
      nameOnCard: !!formData.nameOnCard,
      cardNumber: /^\d{16}$/.test(formData.cardNumber),
      expiryDate: /^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate),
      cvv: /^\d{3,4}$/.test(formData.cvv),
      paymentMethod: !!formData.paymentMethod,
    });

    setIsFormValid(allValid);
  };

  const handleConfirmPayment = () => {
    if (!isFormValid) {
      console.log("Form is not valid");
      alert("Please fill in all required fields correctly.");
      return;
    }
    console.log("Payment confirmed successfully!", formData);
    alert(`Payment of $${orderTotal.toFixed(2)} was successful!`);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        border: "1px solid #ddd",
      }}
    >
      <h3>Checkout</h3>
      <div style={{ marginBottom: "20px" }}>
        <h4>Delivery Options</h4>
        <label style={{ display: "block", marginBottom: "10px" }}>
          <input type="radio" name="delivery" defaultChecked /> Get it delivered
          in only 30 minutes
        </label>
        <label>
          <input type="radio" name="delivery" /> Pickup available in 3 stores
          near you
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h4>Shipping Address</h4>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        />
        {errors.address && (
          <div style={{ color: "red", marginTop: "5px" }}>{errors.address}</div>
        )}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h4>Payment Information</h4>
        <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
          <div
            onClick={() => handlePaymentMethodSelect("MasterCard")}
            style={{
              border:
                formData.paymentMethod === "MasterCard"
                  ? "2px solid #6C63FF"
                  : "1px solid #ddd",
              borderRadius: "5px",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            <img
              src="/logos/mastercard.png"
              alt="MasterCard"
              style={{
                width: "50px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            onClick={() => handlePaymentMethodSelect("PayPal")}
            style={{
              border:
                formData.paymentMethod === "PayPal"
                  ? "2px solid #6C63FF"
                  : "1px solid #ddd",
              borderRadius: "5px",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            <img
              src="/logos/paypal.png"
              alt="PayPal"
              style={{
                width: "50px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>
          <div
            onClick={() => handlePaymentMethodSelect("Klarna")}
            style={{
              border:
                formData.paymentMethod === "Klarna"
                  ? "2px solid #6C63FF"
                  : "1px solid #ddd",
              borderRadius: "5px",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            <img
              src="/logos/klarna.png"
              alt="Klarna"
              style={{
                width: "50px",
                height: "30px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
        {errors.paymentMethod && (
          <div style={{ color: "red", marginTop: "5px" }}>
            {errors.paymentMethod}
          </div>
        )}
        <input
          type="text"
          name="nameOnCard"
          placeholder="Name on Card"
          value={formData.nameOnCard}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginBottom: "10px",
          }}
        />
        {errors.nameOnCard && (
          <div style={{ color: "red", marginTop: "5px" }}>
            {errors.nameOnCard}
          </div>
        )}
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={formData.cardNumber}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            marginBottom: "10px",
          }}
        />
        {errors.cardNumber && (
          <div style={{ color: "red", marginTop: "5px" }}>
            {errors.cardNumber}
          </div>
        )}
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            name="expiryDate"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={handleInputChange}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={formData.cvv}
            onChange={handleInputChange}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ddd",
            }}
          />
        </div>
        {errors.expiryDate && (
          <div style={{ color: "red", marginTop: "5px" }}>
            {errors.expiryDate}
          </div>
        )}
        {errors.cvv && (
          <div style={{ color: "red", marginTop: "5px" }}>{errors.cvv}</div>
        )}
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
        <button
          onClick={handleConfirmPayment}
          disabled={!isFormValid}
          style={{
            padding: "10px 20px",
            backgroundColor: isFormValid ? "#6C63FF" : "#ddd",
            color: isFormValid ? "#fff" : "#999",
            border: "none",
            borderRadius: "5px",
            cursor: isFormValid ? "pointer" : "not-allowed",
            flex: 1,
          }}
        >
          Confirm Payment ${orderTotal.toFixed(2)}
        </button>
      </div>
    </div>
  );
};

export default CheckoutForm;
