import React from "react"
import { useNavigate } from "react-router-dom";
import { Break } from "../Break";

import { EColors, Text } from "../Text";

import styles from './notfound.css'

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Break top size={20}/>
      <Text size={20} color={EColors.grey99} bold>Page not found!</Text>
      <Break top size={20}/>
      <button className={styles.button} onClick={()=> {
        navigate(-1);
      }}>
         <Text size={20} color={EColors.white}>Back</Text>
      </button>
      <Break top size={20}/>
    </div>
  )
}