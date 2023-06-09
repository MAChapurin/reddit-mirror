import React, { ChangeEvent } from 'react';
import { Formik, Form, Field, FormikState } from 'formik';

import styles from './commentformik.css'

interface ICommentFormik {
  comment: string;
}


function validateComment(value: string) {
  let error;
  if (!value) {
    error = 'Comments field is empty!';
  }
  else if (value.length < 2) {
    error = 'This comment too short!'
  }
  else if (value.length > 10) {
    error = 'This comment too long!'
  }
  return error;
}


export const CommentFormik = () => {
  
  const initialValues: ICommentFormik = {
    comment: '',
  }

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(value, {resetForm}) => {
          //консоли и так достается, поэтому так
          alert(value.comment);
          //@ts-ignore
          resetForm(initialValues)//как это правильно затипизировать ?
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <Field     
              as='textarea'
              name="comment"
              validate={validateComment}
              className={`${styles.input} ${errors.comment ? styles.invalidate : ''}`} />
            {errors.comment && touched.comment && <div className={styles.warning}>{errors.comment}</div>}

            <button className={styles.button} type="submit">Комментировать</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}