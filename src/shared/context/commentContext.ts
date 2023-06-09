import React from "react";

type TCommentContextType = {
  value: string;
  onChange: (value: string) => void;
}

export const commentContext = React.createContext<TCommentContextType>({
  value:'',
  onChange: ()=> {},
})