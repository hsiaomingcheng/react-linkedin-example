import React, { useEffect, Suspense, useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import { GlobalStyle } from '@assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
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

    // 使用 useSelector 取出 Store 保管的 state
    const loginInfo = useSelector((state) => state.loginInfo);
    const isLogin = loginInfo.success;

    // 皮膚顏色
    const [themeSkin, setThemeSkin] = useState(true);

    function handleSkinChange(e) {
        setThemeSkin(e);
    }

    // 當isLogin(登入)狀態改變觸發
    useEffect(() => {
        // false 導 登入頁
        // true 導 首頁
        if (!isLogin) {
            history.replace('/login');
        } else {
            history.replace('/');
        }
    }, [isLogin]);

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
