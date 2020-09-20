import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { getData } from "../actions/action";
import Collapsable from "./Collapsable";

export default function HomePage() {
  const dispatch = useDispatch();
  const dataReducer = useSelector((state) => state.dataReducer);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div>
      <Header />
      <Collapsable />
    </div>
  );
}
