import React from "react";
import Card from ".././Components/Assets/img/card.png";
import "../App.css";

const Community = () => {
  return (
    <>
    <div className="md:hidden xs:hidden">
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
      </div>
                    {/* Tablet */}

                 <div className="hidden xs:hidden md:block w-[95vw]">
                    <div className=" flex flex-col items-center justify-center mt-4">
        <h4 className="com text-2xl font-medium">
          Please wait, we are link you to our community channel
        </h4>
        <p className="com text-xl">
          Click the link below if you do not get redirected after 2 min
        </p>
        <a className="lit text-lg" href="www.Slackchannellink.nupat.com">
          www.Slackchannellink.nupat.com
        </a>
      </div>

      <div className=" w-12/12 item-center justify-center mx-auto">
        <img src={Card} alt="" />
      </div>
      </div>

                           {/* Mobile */}

                 <div className="hidden md:hidden xs:block">
                    <div className=" flex flex-col items-center justify-center mt-4">
        <h4 className="com flex text-center mb-4 text-2xl font-medium">
          Please wait, we are link you to our community channel
        </h4>
        <p className="com flex text-center mb-2 text-xl">
          Click the link below if you do not get redirected after 2 min
        </p>
        <a className="lit flex text-center text-lg" href="www.Slackchannellink.nupat.com">
          www.Slackchannellink.nupat.com
        </a>
      </div>

      <div className=" item-center justify-center">
        <img className="w-[90em]" src={Card} alt="" />
      </div>
      </div>
    </>       
   
  );
};

export default Community;
