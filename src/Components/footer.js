import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <div
        className="footerbg"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap:"wrap",
            alignItems:"center"
          }}
        >
          <div className="fblock">
            <div>
              <div>
                <img src="footerlogo.png" width="127px" height="140px" />
              </div>
              <div
               className="ftext"
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </p>
              </div>
            </div>
          </div>
          <div  className="fblock">
            <div
             className="fheading"
            >
              Quick Link
            </div>
            <div style={{ color: "white", fontSize: "20px" }}>
              <div  className="flink">
                {" "}
                <a>Home</a>
              </div>
              <div className="flink">
                {" "}
                <a>Pricing</a>
              </div>
              <div  className="flink">
                {" "}
                <a>Why Choose US</a>
              </div>
              <div  className="flink">
                {" "}
                <a>Contact</a>
              </div>
            </div>
          </div>
          <div  className="fblock">
            <div
             className="fheading"
            >
              Contact Us
            </div>
            <div style={{ color: "white", fontSize: "20px" }}>
              <div style={{ padding: "5px" }}>
                <img src="location.png" />
                &nbsp; <a>Address .....</a>
              </div>
              <div style={{ padding: "5px" }}>
                <img src="phone.png" />
                &nbsp; <a>Number</a>
              </div>
              <div style={{ padding: "5px" }}>
                <img src="Mail.png" />
                &nbsp; <a>Email</a>
              </div>
              <div>
                <ul
                 className="ficons"
                >
                  <li className="ficon">
                    <img src="facebook.png" />
                  </li>
                  <li className="ficon">
                    <img src="instagram.png" />
                  </li>
                  <li className="ficon">
                    <img src="linkedin.png" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="copyright"
        >
          <p style={{ padding: "10px" }}>All Rights Reserved @CopyRight 2023</p>
        </div>
      </div>
    </div>
  );
}
