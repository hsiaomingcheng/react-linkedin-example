import React, { useEffect, Suspense, useState } from 'react';
import {
    Route,
    Switch,
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routes } from '@route';
import { GlobalStyle } from '@assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '@assets/theme';
import Header from '@component/Header';
import { apiLogin } from '@apis';
import { disPatchLoginInfo } from '@actions/userAction';

const Login = {
    name: '登入頁',
    path: '/login',
    component: React.lazy(() =>
        import(
            /*webpackChunkName:"Login"*/ /*webpackMode:"lazy"*/ '@page/Login/Login'
        )
    ),
};

// browser標題
function Page(props) {
    useEffect(() => {
        document.title = props.title || 'linkedIn';
    }, [props.title]);

    return <>{props.children}</>;
}

function App() {
    // 使用 useSelector 取出 Store 保管的 state
    // const loginInfo = useSelector((state) => state.loginInfo);

    // console.log('loginInfo', loginInfo);

    // 皮膚顏色
    const [themeSkin, setThemeSkin] = useState(true);

    const [isLogin, setIsLogin] = useState(false);

    function handleSkinChange(e) {
        setThemeSkin(e);
    }

    // didMount
    // useEffect(() => {
    //     apiLogin().then(function (response) {
    //         // handle success
    //         disPatchLoginInfo(response.data);
    //         setIsLogin(response.data.success);
    //     });
    // }, []);

    return (
        <>
            <ThemeProvider theme={themeSkin ? theme.light : theme.dark}>
                <GlobalStyle />
                <Router>
                    {isLogin && <Header handleSkinChange={handleSkinChange} />}
                    <Suspense fallback={<h1>Loading profile...</h1>}>
                        <Switch>
                            <Route
                                path="/login"
                                render={() => (
                                    <Page title={'linkedIn-' + Login.name}>
                                        <Login.component />
                                    </Page>
                                )}
                            />
                            <Route
                                render={() =>
                                    isLogin ? (
                                        routes.map((route, index) => {
                                            return (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    render={(props) => (
                                                        <Page
                                                            title={
                                                                'linkedIn-' +
                                                                route.name
                                                            }
                                                        >
                                                            <route.component
                                                                {...props}
                                                            />
                                                        </Page>
                                                    )}
                                                />
                                            );
                                        })
                                    ) : (
                                        <Redirect to="/login" />
                                    )
                                }
                            />
                        </Switch>
                    </Suspense>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
