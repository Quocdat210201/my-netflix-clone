import userLogo from "../../../assets/img/user-logo.png";
import { Notice } from "../../Icons";
import { FiGift } from "react-icons/fi";
import { useState } from "react";

function Action() {
  return (
    <div className="flex items-center">
      <div className="mr-3 relative notice cursor-pointer">
        <Notice className="text-[var(--white-color)] mt-2 " />
      </div>
      <div className="mr-3 text-[var(--white-color)] w-8 h-8 flex items-center cursor-pointer">
        <FiGift className="text-[19px]" />
      </div>

      <div className="mr-3 flex items-center user cursor-pointer">
        <img
          src={userLogo}
          alt="User logo"
          className="h-8 w-8 align-middle rounded"
        />
        <span className="caret" role="presentation"></span>
      </div>
    </div>
  );
}

export default Action;
