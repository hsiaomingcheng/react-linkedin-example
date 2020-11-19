import React, { useEffect, Suspense, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { GlobalStyle } from '@assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '@assets/theme';
import Header from '@component/Header';
import IndexLayout from '@page/IndexLayout/IndexLayout';

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
    let history = useHistory();

    // 皮膚顏色
    const [themeSkin, setThemeSkin] = useState(true);

    const [isLogin, setIsLogin] = useState(false);

    function handleSkinChange(e) {
        setThemeSkin(e);
    }

    useEffect(() => {
        if (!isLogin) {
            console.log('history', history);
            history.replace('/login');
        }
    }, []);

    return (
        <>
            <ThemeProvider theme={themeSkin ? theme.light : theme.dark}>
                <GlobalStyle />
                {isLogin ? (
                    <>
                        <Header handleSkinChange={handleSkinChange} />
                        <IndexLayout Page={Page} />
                    </>
                ) : (
                    <Suspense fallback={<h1>Loading profile...</h1>}>
                        <Route
                            path="/login"
                            render={() => (
                                <Page title={'linkedIn-' + Login.name}>
                                    <Login.component />
                                </Page>
                            )}
                        />
                    </Suspense>
                )}
            </ThemeProvider>
        </>
    );
}

export default App;
