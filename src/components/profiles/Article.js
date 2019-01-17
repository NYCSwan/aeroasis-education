import React from "react";
import "./css/Article.css";

const ArticleDetail = ({ article }) => (
  <article className="article-container">
    <h3 className="article-title">{article.title}</h3>
    {article.text.map(paragraph => {
      // debugger;
      return (
        <p key={paragraph.slice(0, 20)} className="article-text">
          {paragraph}
        </p>
      );
    })}
  </article>
);

export default ArticleDetail;
