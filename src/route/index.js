import React from 'react';

export const routes = [
    {
        name: '首頁',
        path: '/',
        component: React.lazy(() =>
            import(
                /*webpackChunkName:"Home"*/ /*webpackMode:"lazy"*/ '@page/Home/Home'
            )
        ),
        exact: true,
    },
    {
        name: '人脈',
        path: '/netWork',
        component: React.lazy(() =>
            import(
                /*webpackChunkName:"NetWork"*/ /*webpackMode:"lazy"*/ '@page/NetWork/NetWork'
            )
        ),
    },
    {
        name: '職缺',
        path: '/job',
        component: React.lazy(() =>
            import(
                /*webpackChunkName:"Job"*/ /*webpackMode:"lazy"*/ '@page/Job/Job'
            )
        ),
    },
    {
        name: '訊息',
        path: '/message',
        component: React.lazy(() =>
            import(
                /*webpackChunkName:"Message"*/ /*webpackMode:"lazy"*/ '@page/Message/Message'
            )
        ),
    },
    {
        name: '通知',
        path: '/notice',
        component: React.lazy(() =>
            import(
                /*webpackChunkName:"Notice"*/ /*webpackMode:"lazy"*/ '@page/Notice/Notice'
            )
        ),
    },
];

// export default routes;
