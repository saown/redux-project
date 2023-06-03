import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "../features/cake/cakeSlice";

export const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of cake: {numOfCakes}</h2>
            <button onClick={()=> dispatch(ordered())}>Order cake</button>
            <button onClick={()=> dispatch(restocked(1))}>Restock cake</button>
        </div>
    )
}
