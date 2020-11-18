import React, { useEffect, Suspense, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
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
    const loginInfo = useSelector((state) => state.loginInfo);

    console.log('loginInfo', loginInfo);

    // 皮膚顏色
    const [themeSkin, setThemeSkin] = useState(true);

    // const [isLogin, setIsLogin] = useState(loginInfo.success);

    function handleSkinChange(e) {
        setThemeSkin(e);
    }

    // didMount
    useEffect(() => {
        apiLogin().then(function (response) {
            // handle success
            disPatchLoginInfo(response.data);
            // setIsLogin(response.data.success);
        });
    }, [loginInfo]);

    return (
        <>
            <ThemeProvider theme={themeSkin ? theme.light : theme.dark}>
                <GlobalStyle />
                {loginInfo.success ? (
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

export default App;
