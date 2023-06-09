import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { usePostData } from '../../hooks/usePostData';
import { RootState } from '../../store/store';
import { Break } from '../Break';
import { Loader } from '../Loader';
import { Post } from '../Post';
import { EColors, Text } from '../Text';
import { Card } from './Card/Card';
import styles from './cardslist.css';

// export function CardsList():JSX.Element{
//   const [data] = usePostData();

//   React.useEffect(() => {
//     console.log('cardList', data);
//   }, [data])
//   return (
//     <ul className={styles.cardsList}>
//       {data.length ? data.map(post => {
//         // console.log(post)
//         return <Card key={post.id} {...post}/>
//       }) :  <li key={123}><Break size={20} inline></Break>Posts do not nave</li> }
//     </ul>
//   );
// }

export function CardsList() {
  const token = useSelector<RootState>(state => state.token);
  const [posts, setPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [errorLoading, setErrorLoading] = React.useState('');
  const [nextAfter, setNextAfter] = React.useState('');
  const [loadCount, setLoadCount] = React.useState<number>(-1);
  const [loadingActive, setLoadingActive] = React.useState(false);
  const [openBtn, setOpenBtn] = React.useState(false);
  const bottomRef = React.useRef<HTMLDivElement>(null!);

  async function load() {
    console.log('start load()');
    setLoading(true);
    setErrorLoading('');
    try {
      const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/hot.json?sr_detail=true', {
        headers: { Authorization: `bearer ${token}` },
        params: {
          limit: 10,
          after: nextAfter,
        }
      });
      console.log('after--> ', after, 'nextAfter--> ', nextAfter);
      const postsData = children.map((item: { data: any }) => ({
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
        datePostUtc: item.data.created_utc,
      }))
      // console.log(children)

      setNextAfter(after);
      setPosts(prevChildren => prevChildren.concat(...postsData));


    } catch (error) {
      setErrorLoading(String(error))
      setLoading(false)
    }
    finally {
      setLoadCount(prevCount => prevCount + 1);
      setLoading(false)
      console.log('end load()');
    }
  }



  React.useEffect(() => {
    if (!token || token === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && loadCount < 3 && !loading) {
        load();
      }
    }, {
      // root: null,
      rootMargin: '10px',
      // threshold: 1,
    });
    observer.observe(bottomRef.current);
    return () => {
      observer.unobserve(bottomRef.current)
    }
  }, [nextAfter, bottomRef.current, token, loading])
  return (
    <>
      <ul className={styles.cardsList}>
        {posts.length === 0 && !loading && !errorLoading && (
          <div style={{ textAlign: 'center' }}>There is no one posts</div>
        )}
        {posts.map(post => (
          <Card key={post.id} {...post} />
        ))}
      </ul>
      <Routes>
        <Route path="/:id" element={<Post />} />
      </Routes>
      {loading && (
        <div className={styles.container}>
          <Loader />
        </div>
      )}

      {errorLoading && (
        <div role="alert">
          {errorLoading}
        </div>
      )}

      <div className={styles.container}>
        {!loading && loadCount > 2 && <button
          className={styles.btn}
          onClick={() => {
            setLoadCount(0);
            load();
          }}>
          <Text size={16} color={EColors.white}>Load More ...</Text>
        </button>}
      </div>
      <div ref={bottomRef}></div>
    </>
  );
}
