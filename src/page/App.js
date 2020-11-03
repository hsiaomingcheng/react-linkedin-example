import React, { useEffect, Suspense } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { routes } from '@route';
import { GlobalStyle } from '@assets/GlobalStyle';
import Header from '@component/Header';

function Page(props) {
    useEffect(() => {
        document.title = props.title || 'linkedIn';
    }, [props.title]);

    return <>{props.children}</>;
}

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Header />
                <Suspense fallback={<h1>Loading profile...</h1>}>
                    <Switch>
                        {routes.map((route, index) => {
                            console.log('route', route);
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    render={(props) => (
                                        <Page title={'linkedIn-' + route.name}>
                                            <route.component {...props} />
                                        </Page>
                                    )}
                                />
                            );
                        })}
                    </Switch>
                </Suspense>
            </Router>
        </>
    );
}

export default App;
