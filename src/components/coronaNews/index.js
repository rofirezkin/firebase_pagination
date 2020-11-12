import React, { useEffect, useState } from 'react';
import app from '../../services/firebase';
import 'firebase/database';
import { CoronaContents } from '..';
import Pagination from '../pagination';

const CoronaNews = () => {
  const [news, setNews] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setLoading(false);
    });
  }, []);

  // getCurrent Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = news.slice(indexOfFirstPost, indexOfLastPost);

  console.log(
    'index of last post',
    `${indexOfLastPost}indexcurrent page${currentPage} post per page ${postsPerPage}`
  );

  // change page
  const paginate = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3 text-center">Informasi Corona</h1>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={news.length}
        paginate={paginate}
      />
      <CoronaContents posts={currentPosts} loading={loading} />
    </div>
  );
};

export default CoronaNews;
