import React from "react";
import Card from ".././Components/Assets/img/card.png";
import "../App.css";

const Community = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center mt-4">
        <h4 className="com font-medium">
          Please wait, we are link you to our community channel
        </h4>
        <p className="com">
          Click the link below if you do not get redirected after 2 min
        </p>
        <a className="lit" href="www.Slackchannellink.nupat.com">
          www.Slackchannellink.nupat.com
        </a>
      </div>

      <div className=" w-9/12 item-center justify-center mx-auto">
        <img src={Card} alt="" />
      </div>
    </>
  );
};

export default Community;
