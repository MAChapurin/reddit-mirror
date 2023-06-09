import React from "react";
import ReactDOM from 'react-dom'
import { useSearchParams } from "react-router-dom";

import { CommentBlock } from "../CommentBlock";
import { CommentForm } from "../CommentForm";
import { CommentFormik } from "../CommentFormic";
import { useNavigate } from "react-router-dom";

import styles from './post.css'
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import axios from "axios";
import { Loader } from "../Loader";
import { EColors, Text } from "../Text";
import { Break } from "../Break";



// export function Post({id,title, previewImg, selftext, onClose}:IPostProps) {
export function Post() {
  const token = useSelector<RootState>(state => state.token);
  const id = window.location.pathname.split('/')[2];
  const ref = React.useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [errorLoading, setErrorLoading] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [img, setImg] = React.useState('');
  const [text, setText] = React.useState('');

  async function load() {
    console.log('start load()');
    setLoading(true);
    setErrorLoading('');
    try {
      const { data: { data: { children } } } = await axios.get(`https://oauth.reddit.com/by_id/t3_${id}.json?preview_img=true`, {
        headers: { Authorization: `bearer ${token}` },
      });

      const post = children[0].data

      const { title, preview, selftext, } = post;
      // console.log('previewImg-->', preview.images?.[0].source.url.replace(/(\&amp\;)/g, '&'));
      const resultImg = preview ? preview.images?.[0].source.url.replace(/(\&amp\;)/g, '&') : '';
      setTitle(title);
      setImg(resultImg);
      setText(selftext);
      console.log('PostById-->', post)
    } catch (error) {
      setErrorLoading(String(error))
      setLoading(false)
      console.log(error)
    }
    finally {
      setLoading(false)
      console.log('end load()');
    }
  }

  React.useEffect(() => {
    load()
  }, [token, id])

  React.useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        navigate(-1);
      }

    }
    document.addEventListener('click', handleClick);
    document.body.setAttribute('style', 'overflow: hidden');
    return () => {
      document.removeEventListener('click', handleClick)
      document.body.setAttribute('style', 'overflow: auto');
    }
  }, [])

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(errorLoading ? (<div className={styles.container} role="alert">
    <Break top size={20} />
    <Text size={20} color={EColors.orange}>{errorLoading}</Text>
    <Break top size={20} />
    <button className={styles.button} onClick={() => {
      navigate(-1);
    }}>
      <Text size={20} color={EColors.white}>Back</Text>
    </button>
    <Break top size={20} />
  </div>) : (
    loading ? <Loader /> : (<div className={styles.modal} ref={ref} >
      <h2> {title}</h2>
      {img ? <img className={styles.previewImg} src={img} alt="preview" /> : null}
      <div className={styles.content}>
        <p>{text}</p>

      </div>
      {/* <CommentForm/> */}
      <CommentFormik />
      <div className={styles.divider} />
      <CommentBlock id={id} />
    </div>)
  ), node)
}