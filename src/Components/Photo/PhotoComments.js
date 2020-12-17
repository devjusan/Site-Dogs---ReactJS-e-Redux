import React from 'react';
import PhotoCommentsForm from './PhotoCommentsForm';
import styles from './PhotoComments.module.css';
import { useSelector } from 'react-redux';

const PhotoComments = (props) => {
  const commentsSection = React.useRef(null);
  const [comments, setComments] = React.useState(() => props.comments);
  const { data } = useSelector((state) => state.user);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${
          props.single ? styles.photoSingle : ''
        }`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {data && (
        <PhotoCommentsForm
          single={props.single}
          setComments={setComments}
          id={props.id}
        />
      )}
    </>
  );
};

export default PhotoComments;
