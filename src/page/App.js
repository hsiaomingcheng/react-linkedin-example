import React, { useEffect, Suspense, useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { routes } from '@route';
import { GlobalStyle } from '@assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Header from '@component/Header';

function Page(props) {
    useEffect(() => {
        document.title = props.title || 'linkedIn';
    }, [props.title]);

    return <>{props.children}</>;
}

function App() {
    const theme = {
        light: {
            backgroundColor: '#f5f5f5',
            primaryColor: '#000',
        },
        dark: {
            backgroundColor: '#232323',
            primaryColor: '#c4c4c4',
        },
    };

    const [themeSkin, setThemeSkin] = useState(true);

    function handleSkinChange(e) {
        setThemeSkin(e);
    }

    return (
        <>
            <ThemeProvider theme={themeSkin ? theme.light : theme.dark}>
                <GlobalStyle />
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
                                                title={'linkedIn-' + route.name}
                                            >
                                                <route.component {...props} />
                                            </Page>
                                        )}
                                    />
                                );
                            })}
                        </Switch>
                    </Suspense>
                </Router>
            </ThemeProvider>
        </>
    );
}

export default App;
