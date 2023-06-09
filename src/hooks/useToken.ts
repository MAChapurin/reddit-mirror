import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { RootState, setToken } from "../store/store";

export function useToken() {
    
    const token = useSelector<RootState, string>(state => state.token);
    const dispatch = useDispatch();

    React.useEffect(()=> {
        if(window.__token__) {
            dispatch(setToken(window.__token__));
        }
    }, [])

    return [token]
}