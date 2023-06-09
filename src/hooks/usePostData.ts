import { RootState } from '../store/store';
import React from 'react';
import axios from 'axios';
import { useToken } from './useToken';
import { useSelector } from 'react-redux';

export interface IPostData {
  id: string;
  author?: string;
  title?:string;
  rating?: number;
  avatar?: string;
  datePostUtc?: number;
  previewImg?: string;
  selftext?: string;
  // resolutions?: string;
}

export function usePostData() {
  const [data, setData] = React.useState<Array<IPostData>>([]);
  const token = useSelector<RootState, string>(state => state.token);
  React.useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      axios
        .get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((resp) => {
          console.log('usePostData-->' ,resp.data.data.children);
          const userData = resp.data.data.children.map(
            (item: { data: any }) => ({
              id: item.data.id,
              author: item.data.author,
              title: item.data.title,
              selftext: item.data.selftext,
              rating: item.data.ups,
              avatar: item.data.sr_detail.icon_img
                ? item.data.sr_detail.icon_img
                : 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
              previewImg: item.data.preview
                ? item.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, '&')
                : 'https://mir-avatarok.3dn.ru/_si/0/03342719.jpg',
              // resolutions: item.data.preview.resolutions ? item.data.preview.images.resolutions : [],
              datePostUtc: item.data.created_utc,
            })
          );
          // console.log('usePostData:', data, userData);
          setData(userData);
        })
        .catch(console.log);
    }
  }, [token]);

  return [data];
}
