/*Во всех заданиях:
1. Реализовать вычисляемые свойства (computed properties)
2. Реализовать пользовательское связывание (custom binding)
3. Симулировать работу с базой если необходимо. Т.е. добавить какие-то исходные данные,
 а все данные необходимые для работы хранить в памяти. НЕ обязательно создавать базу данных.
4. Создайте приложение для новостного агенства. Данное приложение позволяет распространять новости 
в режиме реального времени.
a. Создать категории сообщений
b. Приложение имеет возможность добавления новостного сообщения от пользователя. Множественное добавление новостей.
 Обязательное указание категории.
c. Симулировать сохранения сообщений в локальную базу данных
d. Позволить пользователю выбирать желаемые категории для отображения
e. Реализовать “прослушиватель” новостей
f. Динамически создавать новости раз в несколько секунд на “сервисе”.
g. Новости должны быть показаны для клиента в зависимости от подписки.
h. Возможность быстро выбирать подписки из списка */


import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from './routes'
import { api_key } from './mykeys/keys';
import axios from 'axios';
import NewsFeed from "./pages/NewsFeed";
// import UserPosts from "./pages/UserPosts";
// import SubscriptionsPage from './pages/SubscriptionsPage'


function App() { 
  
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";


  // async function FetchNews() {
  // const response = await axios.get(`${proxyUrl}https://newsdata.io/api/1/news?apikey=pub_2338febc6fef98d790235d1045788b47360c&domain=nytimes&category=technology`);
  // console.log(response)
  // }
  // // const [news, setNews] = React.useState([]);

  
  // React.useEffect(() => {
  //   const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  //   const url = `${proxyUrl}https://newsdata.io/api/1/news?apikey=${api_key}&domain=nytimes&category=technology`;
  //    const request = new Request(url);
  //   fetch(request)
  //   .then((resp) => resp.json())
  //   .then(json => {
  //     setNews(json.results);
  //   });
  // }, [])

  // console.log(news);

  const routes = useRoutes();
 
  return (
   <BrowserRouter>
    <div>
      {routes}
    </div>
    </BrowserRouter>  
  );
}

export default App;

