import React, { useReducer } from "react";
import SandwichReducer from "./sandwichReducer";
import SandwichContext from "./sandwichContext";
import { SET_COUNT, SET_TOTAL, RESTART } from "../types";
const SanwichState = (props) => {
  const initialState = {
    count: 2,
    total: 0,
    sandwich: [],
  };
  const [state, dispatch] = useReducer(SandwichReducer, initialState);

  //funciones
  const setCount = () => {
    if (state.count === 5) {
      state.count = 1;
    }
    dispatch({
      type: SET_COUNT,
    });
  };

  const setTotal = (valor) => {
    
    console.log('el total es' + valor)

    dispatch({
      type: SET_TOTAL,
      payload: valor,
    });
  };
 
  const restart = () => {
    dispatch({
      type: RESTART,
    });
  }
  return (
    <SandwichContext.Provider
      value={{
        count: state.count,
        offset: state.offset,
        total: state.total,
        mov: state.mov,
        precio: state.precio,
        sandwich: state.sandwich,
        setCount,
        setTotal,
        restart,
      }}
    >
      {props.children}
    </SandwichContext.Provider>
  );
};

export default SanwichState;
