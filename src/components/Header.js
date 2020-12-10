import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <div id="headOne">
          <p>웹 퍼블리셔로써</p>
          <p>끊임없이 정진하고 발전하자.</p>
        </div>
        <p id="headTwo">PortFolio</p>
        <p>
          <span id="headSpan">웹퍼블리셔 홍성욱</span>의 포트폴리오
        </p>
      </header>
    </div>
  );
};

export default Header;
