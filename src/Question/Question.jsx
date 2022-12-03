import React from "react";
import { useState } from "react";

export default function Question({ id, title, info }) {
  const [Info, setInfo] = useState(true);
  return (
    <>
      <div className=" shadow-sm m-3">
        <div className="text d-flex justify-content-between align-items-start px-2 ">
          <p className="fw-bold  px-3">{title}</p>
          <button
            className="btn"
            onClick={() => {
              setInfo(!Info);
            }}
          >
            {Info ? (
              <i class="fa-solid fa-minus p-2 bg-light text-danger rounded-circle"></i>
            ) : (
              <i class="fa-solid fa-plus p-2 bg-light text-danger rounded-circle"></i>
            )}
          </button>
        </div>
        {Info ? <p className="text-muted  p-3 pt-0">{info}</p> : ""}
      </div>
    </>
  );
}
