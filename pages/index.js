import React from 'react';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      {posts.map(({ published_at, image, content, description }) => (
        <div>
          <div>
            <b>published at</b> {published_at}
          </div>
          <div>
            <b>image</b>{' '}
            <img
              src={'https://fierce-oasis-50162.herokuapp.com' + image[0]?.url}
              width="100"
            />
          </div>
          <div>
            <b>content</b>
            {content}
          </div>
          <div>
            <b>description</b>
            {description}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
