import React from "react";

function Logout() {
    const logoutHandler = ()=>{
        alert("are you sure to logout");
    }
  return (
    <>
      <button onClick={logoutHandler} className="bg-teal-700 p-3 border-[1px] text-white rounded-md hover:p-4 duration-300 hover:bg-red-700">
        Logout
      </button>
    </>
  );
}

export default Logout;
