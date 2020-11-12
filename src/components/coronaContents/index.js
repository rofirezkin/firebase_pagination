import React from 'react';

const CoronaContents = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading....</h2>;
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => {
        return (
          <li key={post.id} className="list-group-item">
            <small>{post.date}</small>
            {post.activity.map((data) => {
              return (
                <div key={data.title} className="my-1">
                  <a href={data.url}>
                    <h5>{data.title}</h5>
                  </a>
                  <p>{data.desc}</p>
                </div>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default CoronaContents;
