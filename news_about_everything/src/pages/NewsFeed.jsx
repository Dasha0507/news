import React from 'react';
import './newsfeed.css'
import axios from 'axios';

import Writing from'../components/img/writing.png';
import HeaderNewsFeed from '../components/HeaderNewsFeed';
import StickyFooter from '../components/StickyFooter';
import NewsContent from '../components/NewsContent';
import UserPostsForm from '../components/UserPostsForm';
import Modal from '../components/Modal';


function NewsFeed() {
    const [news, setNews] = React.useState([
        {id: 1, title: 'hello world', description: 'I want sleep so mutch!' },
        {id: 2, title: 'djkfjksdfmds', description: 'sdvdxvfxszgfgxfg' },
        {id: 3, title: 'knckzadlf', description: 'sdjbsdjxbcjkd dbdhkjad chjka wbad jwdhcjAUVJDy' }]);//////// вместо этого будут allNews
    
    const [modal, setModal] = React.useState(false);

    const createNews = (newPost) => {
        setNews([...news, newPost]);
        setModal(false);
    }

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";


    async function FetchNews() {
    const response = await axios.get(`${proxyUrl}https://newsdata.io/api/1/news?apikey=pub_2338febc6fef98d790235d1045788b47360c&domain=nytimes&category=sports,health`);
    console.log(response)
    }


   
    return (
<div>
        <HeaderNewsFeed/>
    <section>
    <div className ="newsPost">
        <div className ="container">
            <button onClick={FetchNews}>fjkdfcbjdSKfhkSGFukDJSfk</button>
           <img onClick={() => setModal(true)} className ="writing" src={Writing}/>
        <Modal visible={modal} setVisible={setModal}>
            <UserPostsForm create={createNews}/>
            </Modal>
        <NewsContent news={news}/>
        </div>
    </div>
    </section>
    <StickyFooter/>   
</div>
    )
}

export default NewsFeed
