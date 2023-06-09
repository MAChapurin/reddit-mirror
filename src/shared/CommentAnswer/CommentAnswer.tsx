import React from "react";
import styles from './commentanswer.css'

interface IAnswerProps {
  author: string;
}

export function CommentAnswer({author}:IAnswerProps) {
  const [value, setValue] = React.useState(author)

  const inputRef = React.useRef<HTMLTextAreaElement>(null!);

  React.useEffect(()=> {
    inputRef.current?.focus()
    inputRef.current.selectionStart = inputRef.current.value.length;
    inputRef.current.selectionEnd = inputRef.current.value.length;
  })
  return (
    //Controled

  //   <form className={styles.form}>
  //   <textarea className={styles.input} ref={inputRef} value={value} onChange={(event)=> {
  //     setValue(event.target.value)
  //   }}/>
  //   <button type="submit" className={styles.button}>
  //     Комментировать
  //   </button>
  // </form>

  //Unconroled
  
  <form className={styles.form}>
  <textarea className={styles.input} ref={inputRef} defaultValue={author}/>
  <button type="submit" className={styles.button}>
    Комментировать
  </button>
</form>
  )
}