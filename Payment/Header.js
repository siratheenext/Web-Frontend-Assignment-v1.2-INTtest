import React, { useState } from "react";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        fontFamily: "Arial, sans-serif",
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1
          style={{
            fontSize: "24px",
            color: "#6C63FF",
            margin: 0,
          }}
        >
          Saba
        </h1>
        <span
          style={{
            width: "10px",
            height: "10px",
            backgroundColor: "#d4d4f7",
            borderRadius: "50%",
            marginLeft: "5px",
          }}
        ></span>
      </div>

      {/* Navigation */}
      <nav style={{ position: "relative" }}>
        <div style={{ display: "flex", gap: "20px" }}>
          {["New Arrival", "Women", "Men", "Outlet"].map((menu) => (
            <div key={menu} style={{ position: "relative" }}>
              <button
                onClick={() => toggleMenu(menu)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  color: "#333",
                }}
              >
                {menu} ▼
              </button>
              {activeMenu === menu && (
                <ul
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    listStyle: "none",
                    padding: "10px 0",
                    margin: 0,
                    width: "150px",
                    border: "1px solid #ddd",
                    borderRadius: "5px",
                    zIndex: 1000,
                  }}
                >
                  <li
                    style={{
                      padding: "10px 20px",
                      cursor: "pointer",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    Submenu 1
                  </li>
                  <li
                    style={{
                      padding: "10px 20px",
                      cursor: "pointer",
                      borderBottom: "1px solid #ddd",
                    }}
                  >
                    Submenu 2
                  </li>
                  <li
                    style={{
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Submenu 3
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <div
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#666",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          🔍
        </div>
        <div
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#666",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          ❤️
        </div>
        <div
          style={{
            position: "relative",
            width: "24px",
            height: "24px",
            backgroundColor: "#666",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          🛒
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "#6C63FF",
              color: "#fff",
              borderRadius: "50%",
              padding: "3px 6px",
              fontSize: "12px",
            }}
          >
            3
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
