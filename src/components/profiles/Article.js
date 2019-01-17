import React from "react";
import "./css/Article.css";

const ArticleDetail = ({ article }) => (
  <article>
    <h3>{article.title}</h3>
    <p>{article.text}</p>
  </article>
);

export default ArticleDetail;
