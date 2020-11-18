import React, { useEffect, Suspense, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from '@route';
import { GlobalStyle } from '@assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '@assets/theme';
import Header from '@component/Header';

const Login = {
    name: '登入頁',
    path: '/login',
    component: React.lazy(() =>
        import(
            /*webpackChunkName:"Login"*/ /*webpackMode:"lazy"*/ '@page/Login/Login'
        )
    ),
};

function Page(props) {
    useEffect(() => {
        document.title = props.title || 'linkedIn';
    }, [props.title]);

    return <>{props.children}</>;
}

function App(props) {
    const [themeSkin, setThemeSkin] = useState(true);

    console.log('props', props);

    function handleSkinChange(e) {
        setThemeSkin(e);
    }

    return (
        <>
            <ThemeProvider theme={themeSkin ? theme.light : theme.dark}>
                <GlobalStyle />
                {props.isLogin ? (
                    <Router>
                        <Header handleSkinChange={handleSkinChange} />
                        <Suspense fallback={<h1>Loading profile...</h1>}>
                            <Switch>
                                {routes.map((route, index) => {
                                    return (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            exact={route.exact}
                                            render={(props) => (
                                                <Page
                                                    title={
                                                        'linkedIn-' + route.name
                                                    }
                                                >
                                                    <route.component
                                                        {...props}
                                                    />
                                                </Page>
                                            )}
                                        />
                                    );
                                })}
                            </Switch>
                        </Suspense>
                    </Router>
                ) : (
                    <Suspense fallback={<h1>Loading profile...</h1>}>
                        <Login.component />
                    </Suspense>
                )}
            </ThemeProvider>
        </>
    );
}

const mapStateToProps = (state) => ({
    isLogin: state.isLogin,
});

export default connect(mapStateToProps)(App);
