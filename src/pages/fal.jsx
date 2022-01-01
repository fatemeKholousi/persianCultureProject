//stackoverflow.com/questions/19266197/reactjs-convert-html-string-to-jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./fal.css";

function Faal() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = axios
      .get("https://ganjgah.ir/api/ganjoor/hafez/faal")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    // const indexOfchoosenFaal = Math.floor(Math.random() * data.length);
    // const choosenFaal = data;
  }, []);
  console.log(data.title);
  const htmlText = data.htmlText;
  //   console.log(typeof data);

  return (
    <div className="fal--container">
      <h1>{data.title}</h1>
      {htmlText}
    </div>
  );
}

export default Faal;
