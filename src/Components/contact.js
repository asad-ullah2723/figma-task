import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");

  return (
    <div>
      <div  style={{backgroundImage:"url(sdf3.png)"}}>
      <div className="cimg">
        <img src="Say Hello!.png" />
      </div>
      </div>
    <div style={{backgroundImage:"url(contactus-bg.png)", backgroundRepeat:"no-repeat", backgroundSize:"cover", display:"flex", justifyContent:"center", justifyItems:"center", height:"1105px"}}>
      <div className="forms"> 
        <form style={{display: 'flex', flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <input
            className="contacti"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name*"
          />
          <input
            className="contacti"
            type="text"
            value={companyname}
            onChange={(e) => setCompanyname(e.target.value)}
            placeholder="Company Name*"
          />
          <input
            className="contacti"
            maxLength={11}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="tel"
            placeholder="Contact No.*"
          />
          <input
            className="contacti"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email*"
          />
          <textarea
          style={{height:"90px"}}
            className="contacti"
            type="text"
            rows={90}
            height="500px"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message*"
          />
          <button className="buton" >
            Submit  
          </button>
      </form>   
      </div>
    </div>
    </div>
  );
}
