import { meRequest, meRequestSuccess, meRequestError, IUserData, meRequestAsync } from './../store/me/actions';
import { RootState, setToken } from '../store/store';
import React from "react";
import axios from "axios";
import { useToken } from "./useToken";
import { useDispatch, useSelector } from 'react-redux';



export function useUserData() {
  const data = useSelector<RootState, IUserData>(state => state.me.data);
  const loading = useSelector<RootState, boolean>(state => state.me.loading);
  const token = useSelector<RootState, string>(state => state.token);
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    console.log('useUserData-->', window.__token__)
    if (token && token.length > 0 && token !== "undefined") {
      dispatch(meRequestAsync())
    }
   
  }, [token]);
  return {
    data,
    loading,
  };
}
