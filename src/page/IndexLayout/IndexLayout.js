import React, { Suspense, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '@route';
import { GlobalStyle } from '@assets/css/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '@assets/theme';
import Header from '@component/Header';

function IndexLayout(props) {
    const { Page } = props;

    // 皮膚顏色
    const [themeSkin, setThemeSkin] = useState(true);

    function handleSkinChange(e) {
        setThemeSkin(e);
    }
    return (
        <ThemeProvider theme={themeSkin ? theme.light : theme.dark}>
            <GlobalStyle />

            <Header handleSkinChange={handleSkinChange} />
            <Suspense fallback={<h1>Loading profile...</h1>}>
                <Switch>
                    <Route
                        render={() =>
                            routes.map((route, index) => {
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
                            })
                        }
                    />
                </Switch>
            </Suspense>
        </ThemeProvider>
    );
}

export default React.memo(IndexLayout);
