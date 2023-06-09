import React from "react";
import { Break } from "../../Break";
import { GenericList } from "../../GenericList/GenericList";
import { EIcons, Icon } from "../../Icon";
import { EColors, Text } from "../../Text";
import { generateId } from '../../../utils/react/generateRandomIndex';
import styles from './comment.css'
import { CommentAnswer } from "../../CommentAnswer";

export function Comment({ data }: any) {
  if (data === undefined) return null;
  const { author, body, created, subreddit, replies } = data;
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  function answer(): void {
    console.log('Answer!!1')
    setIsOpen(true)
  }


  // const btnList = [
  //   { element: <Icon name={EIcons.comments} size={14} />, padding: <Break size={8} inline />, text: <Text size={12} color={EColors.grey99}>Ответить</Text>, className: `${styles.menuItem}`, as: 'button', onClick: () => answer() },
  //   { element: <Icon name={EIcons.share} size={14} />, padding: <Break size={8} inline />, text: <Text size={12} color={EColors.grey99}>Поделиться</Text>, className: styles.menuItem, as: 'button', onClick: () => console.log('Comment test') },
  //   { element: <Icon name={EIcons.warning} size={14} />, padding: <Break size={8} inline />, text: <Text size={12} color={EColors.grey99}>Пожаловаться</Text>, className: styles.menuItem, as: 'button', onClick: () => console.log('Comment test') },
  // ].map(generateId)

  React.useEffect(() => {
    console.log('Comment--->', replies?.data?.children)
  }, [])

 
  return (
    <div className={styles.comment}>
      <div className={styles.userBlock}>
        <img className={styles.avatar} src="https://avatars.mds.yandex.net/i?id=aa681f15fcee9dc5f05549627dd8adaa380b51bd-8350569-images-thumbs&n=13" alt="avatar" />
        <span>{author}</span>
        <Break size={20} inline />
        <span>{new Date(created).getHours()} часов назад</span>
        <Break size={20} inline />
        <span className={styles.liague}>{subreddit}</span>
      </div>

      <p>{body}</p>
      <div className={styles.btnWrap}>
        <button className={styles.btn} onClick={answer}><Icon name={EIcons.comments} size={14} />
          <Break size={8} inline />
          <Text size={12} color={EColors.grey99}>Ответить</Text>
        </button>
        {/* <GenericList list={btnList} /> */}

      </div>
      {isOpen && <CommentAnswer author={author}/>}
      {replies !== '' && replies?.data?.children !== undefined && replies.data?.children.map((el: any, index: any) => {
        // console.log(el.data.children)
        return el.data && <Comment data={el.data} key={index} />
      })}
    </div>
  )
}