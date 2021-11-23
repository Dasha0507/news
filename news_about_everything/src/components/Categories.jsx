import React from 'react'; 
import './categories.css';

import technology from './img/technology.png';
import politics from './img/court1.png';

import sport from './img/football1.png';
import health from './img/healthcare1.png';

import economy from './img/economy.png';
import note from './img/music.png';

import animals from './img/pawprint.png';
import showbusiness from './img/backstage.png';

import moves from './img/clapperboard.png';
import recipes from './img/chef.png';   


function Categories({items , onClick}) {

    const [activeItem, setActiveTtem] = React.useState(null);
 
    const onSelectItem = (index) => {
        setActiveTtem(index);
        onClick(index);
    }

    return (
                <ul>
                    {items &&
                    items.map((name, index) =>(
                        <li 
                        onClick={() => onSelectItem(index)} 
                        key={`${name}_${index}`} 
                        className={activeItem === index ? 'category active ' : 'category'}
                        >
                        {name}
                        </li>
                   ))
                }
                </ul>
            )
}

export default Categories


// https://newsdata.io/api/1/news?apikey=pub_23386e541b0e8603c4ea1888942ca10d653a&domain=nytimes&category=technology
// {items &&
//     items.map((name, index) =>(
//         <li 
//         onClick={() => onSelectItem(index)} 
//         key={`${name}_${index}`} 
//         className={activeItem === index ? 'category active ' : 'category'}
//         >
//         {name}
//         </li>
//    ))
// }