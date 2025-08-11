import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <div className="mb-3">
        <div>
          <h2 className=" mb-7 font-bold">
            Transform Your Vision Into{" "}
            <span className="font-extrabold text-[50px] text-green-900">
              Reality
            </span>
          </h2>
          <Link to="/Regeister" className=" font-extrabold text-blue-900 mb-5">
            Click here{" "}
          </Link>
        </div>
      </div>

      {/* ===== */}
    </div>
  );
};

export default home;
