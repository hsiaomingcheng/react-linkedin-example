import React, { useEffect, Suspense } from 'react';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
    const location = useLocation();

    // 使用 useSelector 取出 Store 保管的 state
    const loginInfo = useSelector((state) => state.loginInfo);
    const isLogin = loginInfo.success;

    // 取使用者保存uid
    const uid = sessionStorage.getItem('uid');

    // 當isLogin(登入)狀態改變觸發
    useEffect(() => {
        const loginPathname = '/login';
        const locationPathname = location.pathname;

        // 判斷 uid 或 登入狀態 與 網址路徑
        if (!(uid || isLogin) && locationPathname !== loginPathname) {
            console.log('我要去登入頁');
            history.replace('/login');
        }
    });

    return (
        <>
            <IndexLayout Page={Page} />
            <Suspense fallback={<h1>Loading profile...</h1>}>
                <Route
                    exact
                    path="/login"
                    render={() => (
                        <Page title={'linkedIn-' + Login.name}>
                            <Login.component />
                        </Page>
                    )}
                />
            </Suspense>
            {/* {location.pathname === '/login' ? (
                <Suspense fallback={<h1>Loading profile...</h1>}>
                    <Route
                        exact
                        path="/login"
                        render={() => (
                            <Page title={'linkedIn-' + Login.name}>
                                <Login.component />
                            </Page>
                        )}
                    />
                </Suspense>
            ) : (
                <IndexLayout Page={Page} />
            )} */}
        </>
    );
}

export default App;
