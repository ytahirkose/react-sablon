import React from 'react';

const NotFound = React.lazy(() => import('/NotFound'));
const Home = React.lazy(() => import('/Home'));

export {
    NotFound,
    Home,
};
