import React from 'react';
import { Link } from 'react-router-dom';
import './stickyfooter.css';
import Subscriptions from './img/agreement.png';
import News from './img/newstoday.png';
import Sections from './img/sections.png';
import Categories from './Categories';


function StickyFooter() {

    

    const [visibleCategories, setvisibleCategories] = React.useState(false);
    const categoriesRef = React.useRef(); //сохраняет ссылку на DOM елемент и хранит актуальное значение

    const toggleVisibleCategories = () => {
        setvisibleCategories(!visibleCategories);
    }

    const handleOutsideClick = (e) => {
        if(!e.path.includes(categoriesRef.current)){
           setvisibleCategories(false);
        }
    }

    React.useEffect(() => { //следит за эффектом компонента
        document.body.addEventListener('click', handleOutsideClick);
    }, []);


    return (
    <footer className="sticky_menu">
        <div className="container">
            <div className="my_subscriptions">
                <img src={Subscriptions}/>
                <div >
                    <Link to='/subscriptions' className="subscruptions">Подписки</Link>
                </div>        
            </div>
            <div className="my_news">
                <img src={News}/>
                <div>
                    <a href="#" className="news_today">Новости сегодня</a>
                </div>    
            </div>
            <div ref={categoriesRef} className="categories">
                <img src={Sections}/>
                <div>
                    <a onClick={toggleVisibleCategories} href="#" className="categories_filter">Категории</a>
                </div>
                    { visibleCategories && 
                        <div className = "sections_sticky">
                        <Categories onClick={(name) =>console.log(name)}
                        items={[
                            'Политика',
                            'Спорт',
                            'Технологии',
                            'Здоровье',
                            'Экономика',
                            'Музыка',
                            'Животные',
                            'Шоу-бизнес',
                            'Кино',
                            'Еда'
                        ]}/>
                        </div>
                    }
                    
            </div>
        </div>
           
    </footer>
    )
}

export default StickyFooter
