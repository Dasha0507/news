import React from 'react';
import './newscard.css';

function NewsCard(props) {
    return (
            <div className ="post">
            <span className ="title">{props.newsItem.title}</span>
            <p className ="post_description">
            {props.newsItem.description}
                {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Provident recusandae quis non neque dolorum, quod est dignissimos obcaecati iusto, praesentium minima assumenda id quibusdam,
                 in corrupti accusantium! Mollitia, voluptas laudantium!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Placeat quis illo tenetur cumque obcaecati, quod fugiat aperiam delectus neque corrupti 
                 deserunt optio rem repellat modi.
                 Provident exercitationem recusandae cumque facere. */}
            </p>
            <img />
        </div>
    )
}

export default NewsCard
