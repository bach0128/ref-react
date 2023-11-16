import React, { Fragment, useEffect, useLayoutEffect, useState } from "react";
import "../assets/history.scss";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../actions/countdownAction";
import { add } from "../actions/historyAction";

export default function History() {
  const rangeNumber = useSelector((state) => state.range.rangeNumber);
  const countDown = useSelector((state) => state.countDown.countDown);
  const numberList = useSelector((state) => state.history.numberList);

  const [numberListRep, setNumberListRep] = useState([]);
  const [maxTime, setMaxTime] = useState("7");
  const [isCheckCorrect, setIsCheckCorrect] = useState(false);
  const [correctNumber, setCorrectNumber] = useState(
    Math.ceil(Math.random() * rangeNumber)
  );
  const dispatch = useDispatch();
  const maxLength = rangeNumber.toString().length;
  let numberInput;

  // useEffect(() => {
  //   setNumberListRep(numberList);
  // }, [numberListRep]);

  useEffect(() => {
    setCorrectNumber(Math.ceil(Math.random() * rangeNumber));
  }, [rangeNumber]);

  useEffect(() => {
    setMaxTime(countDown);
  }, []);

  const handleInput = (e) => {
    numberInput = e.target.value;
  };

  if (countDown === 0) {
    setIsCheckCorrect(true);
  }

  const handleRestart = (e) => {
    setNumberListRep([]);
    toast.info("Chào mừng bạn đến với F88");
    e.target.classList.add("hidden");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/^(0|[1-9][0-9]*)$/.test(numberInput) && numberInput <= rangeNumber) {
      if (numberList.length == 0) {
        dispatch(add(+numberInput));
      } else {
        if (numberList.some((number) => +number === +numberInput)) {
          toast.warning("Bạn đã nhập số này rồi");
        } else {
          dispatch(add(+numberInput));
        }
      }

      if (numberInput < correctNumber) {
        toast.info("Vui lòng tăng 1 chút");
        dispatch(decrement());
      } else if (numberInput > correctNumber) {
        toast.info("Vui lòng giảm 1 chút");
        dispatch(decrement());
      } else {
        toast.success("Chúc mừng bạn đã đoán đúng");
        setIsCheckCorrect(true);
      }
    } else {
      toast.warn("Số vừa nhập không phù hợp");
    }
  };

  return (
    <Fragment key={1}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Hãy thử nhập 1 số</label>
        <input
          className="check-number mt-3 form-control"
          type="text"
          placeholder="Thử nhập 1 số"
          id="text"
          autoFocus
          autoComplete="true"
          maxLength={maxLength}
          onInput={handleInput}
        />
      </form>

      {isCheckCorrect && (
        <>
          <div>
            <button
              className="restart mt-2 btn btn-success"
              onClick={handleRestart}
            >
              Chơi lại
            </button>
          </div>
          <div className="history">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
            <table className="table mt-3 ">
              <thead>
                <tr>
                  <th colSpan="2">Số lần nhập</th>
                  <th colSpan="2">Số nhập vào</th>
                </tr>
              </thead>
              {numberList.map((number, index) => (
                <tbody>
                  <tr>
                    <td colSpan="2">{index}</td>
                    <td colSpan="2">{number}</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <h3>Lần chơi thứ </h3>
            <h3>Số lần nhập tối đa: {maxTime}</h3>
          </div>
        </>
      )}
    </Fragment>
  );
}
