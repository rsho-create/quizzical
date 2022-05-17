import axios from "axios";
import React from "react";

export default function ({ result }) {
  //  const fetchPlayerResults = async ([username, score]) => {
  //      try {
  //          const {data} = await axios.get()
  //      }
  //  }

  return (
    <section>
      <div>
        <h2>Winner/Loser</h2>
        <p>{result.player}</p>
        <div>
          <img />
        </div>
      </div>
    </section>
  );
}
