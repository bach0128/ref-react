import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { change } from "../actions/rangeAction";
import "../assets/range.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { update } from "../actions/countdownAction";

function Range() {
  const rangeNumber = useSelector((state) => state.range.rangeNumber);
  const countDown = useSelector((state) => state.countDown.countDown);

  const [range, setRange] = useState(rangeNumber);
  const [count, setCount] = useState(countDown);
  const dispatch = useDispatch();

  let MAX_TIME = Math.ceil(Math.log2(range));

  const handleChangeRange = (e) => {
    setTimeout(() => {
      setRange(e.target.value);
      setCount(Math.ceil(Math.log2(e.target.value)));
    }, 500);
  };
  useEffect(() => {
    dispatch(change({ rangeNumber: range }));
    dispatch(update({ countDown: count }));
    toast.info("Chào mừng bạn đến với F88");
  }, [range, count]);

  return (
    <div>
      <h2>
        Còn {countDown}/{MAX_TIME} lần
      </h2>
      <label htmlFor="customRange" className="form-label">
        Bạn cần tìm kiếm một số từ 1 đến <span>{range}</span>
      </label>
      <input
        type="range"
        onInput={handleChangeRange}
        className="form-range range-input"
        id="customRange"
        min={100}
        max={2048}
      ></input>
      <ToastContainer />
    </div>
  );
}

export default Range;
