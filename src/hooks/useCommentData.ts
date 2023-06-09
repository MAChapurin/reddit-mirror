import { RootState } from '../store/store';
import React from 'react';
import axios from 'axios';
import { useToken } from './useToken';
import { useSelector } from 'react-redux';


export interface ICommentData {
  author: string,
  body: string,
  created: number,
  subreddit: string,
  replies: [],
}


export function useCommentData(id:string) {
  const [data, setData] = React.useState<any>([]);
  const token = useSelector<RootState, string>(state => state.token);
  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      axios
        .get(`https://oauth.reddit.com/comments/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((resp) => {
         console.log('useCommentData --> ',resp)
         const commetnsData = resp.data.map((comment:any) => comment.data.children);
       
        setData(commetnsData);
 
        })
        .catch(console.log);
        
    }
  }, [token]);

  return [data];
}