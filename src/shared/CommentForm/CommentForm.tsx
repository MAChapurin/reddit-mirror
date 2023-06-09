import React, { ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { RootState, updateComment } from "../../store/store";

import styles from './commentform.css'

export function CommentForm(){
  // const store = useStore<RootState>();
  // const value = store.getState().commentText;
  const value = useSelector<RootState, string>(state => state.commentText);//сокращение от предыдущих двух строчек
  const dispatch = useDispatch();
  // const ref = React.useRef<HTMLTextAreaElement>(null)
 

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value))
  }

  function handleSubmit(event: FormEvent){
    event.preventDefault();
    // console.log(ref.current?.value)
    console.log(value)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* <textarea className={styles.input} ref={ref}/> */}
      <textarea className={styles.input} value={value} onChange={handleChange}/>
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  )
}