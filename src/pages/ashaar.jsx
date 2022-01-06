import React, { useState, useEffect } from "react";
import "./ashaaar.css";
import TarhBg from "../images/tarh1.png";
import axios from "axios";

function Ashaar() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://ganjgah.ir/api/ganjoor/poets")
      .then((res) => setData(res.data.splice(0, 10)))
      .catch((err) => console.log(err));
  }, []);

  console.log(data);
  return (
    <div>
      <img src={TarhBg} alt="" className="hero__pattern" />
      <div className="orange--box"></div>
      <div className="gray--box"></div>
      <div className="cards">
        {data.map((item, index) => (
          <div className="card" key={index} onClick={() => {}}>
            <img
              src={`https://ganjgah.ir${item.imageUrl}`}
              alt=""
              className="card--img"
            />
            <p className="card--name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ashaar;
