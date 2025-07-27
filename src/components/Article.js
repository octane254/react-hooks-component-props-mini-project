import React from 'react';

function Article({ id, title, date = "January 1, 1970", preview, minutes }) {
  const renderReadingTime = () => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return `☕️`.repeat(cups) + ` ${minutes} min read`;
    } else {
      const bentos = Math.ceil(minutes / 10);
      return `🍱`.repeat(bentos) + ` ${minutes} min read`;
    }
  };

  return (
    <article data-testid={id.toString()}> {/* Ensure it's a string */}
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{renderReadingTime()}</p>
    </article>
  );
}

export default Article;
