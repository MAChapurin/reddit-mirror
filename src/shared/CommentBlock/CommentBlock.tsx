import React from "react";
import { useCommentData } from "../../hooks/useCommentData";
import { Comment } from "./Comment/Comment";

interface ICommentBlock {
  id: string;
}

export function CommentBlock({id}:ICommentBlock) {
  const [data] = useCommentData(id);
  React.useEffect(()=> {
    // console.log('CommentBlock: ', data);
  },[data])

  return (
    <div>
     {data && data.length > 0 && data[1].map((el:any, i: number)=> {
      return el.data !==undefined ? <Comment data={el.data} key={i}/> : null;
     })}

    </div>
  )
}