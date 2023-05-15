import React from "react";
import Background from "../Components/Assets/img/Congratulation.svg";

const Congratulation = () => {
  return (
    <>
      <div style={{ marginTop: "2rem" }} className="">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={Background} alt="Congratulation" />
        </div>
        <div>
          <h1
            style={{
              fontSize: "2rem",
              textAlign: "center",
            }}
          >
            Congratulation
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              textAlign: "center",
            }}
          >
            You have successfully completed this course
          </p>
        </div>
      </div>
    </>
  );
};

export default Congratulation;
