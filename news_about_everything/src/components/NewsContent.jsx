import React from 'react';
import NewsCard from './NewsCard';

const NewsContent = ({news}) =>{
    return (
        <div>
          {news.map((newsItem) => (
            <NewsCard 
            newsItem={newsItem} 
            key={newsItem.title} />
            ))}
        </div>
    )
}

export default NewsContent
