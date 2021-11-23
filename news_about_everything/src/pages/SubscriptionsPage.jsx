import React from 'react';
import Header from '../components/Header';
import Subscriptions from '../components/Subscriptions';
import './subscriptionspage.css'

function SubscriptionsPage() {
    return (
        <div>
            <Header/>
            <div className="wrapper">
            <div className="container">
                <h1>Выберете желаемую подписку</h1>
            <Subscriptions/>
            </div>
            </div>
            
        </div>
    )
}

export default SubscriptionsPage
