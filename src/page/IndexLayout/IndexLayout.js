import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from '@route';

function IndexLayout(props) {
    const { Page } = props;
    return (
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
                                        <Page title={'linkedIn-' + route.name}>
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
    );
}

export default IndexLayout;
