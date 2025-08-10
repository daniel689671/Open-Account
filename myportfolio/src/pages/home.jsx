import React from "react";
import { Link } from "react-router-dom";

const home = () => {
  return (
    <div>
      <div className="mb-3">
        <img src="" alt="" />
        <div>
          <h2 className=" mb-7 font-bold">
            Transform Your Vision Into{" "}
            <span className="font-extrabold text-green-700">Reality</span>
          </h2>
          <Link to="/Regeister" className=" font-extrabold text-blue-700 mb-3">
            Click here{" "}
          </Link>
        </div>
      </div>

      {/* ===== */}
    </div>
  );
};

export default home;
