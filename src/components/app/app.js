import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { withBookstoreService } from '../hoc';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages';

const App = () => {
    return (
        <main role="main" className="container">
            <ShopHeader numItems={5} total={210} />
            <Switch>
                <Route
                    path="/"
                    component={HomePage}
                    exact />
                <Route
                    path="/"
                    component={CartPage} />
            </Switch>
        </main>
    );
};

export default App;


// const App = ({ bookstoreService }) => {
//     console.log(bookstoreService.getBooks());
//     return <div className="app">App</div>;
// };
//
// export default withBookstoreService()(App);
