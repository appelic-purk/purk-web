import createHistory from 'history/createBrowserHistory';

const history = createHistory({basename: process.env.REACT_APP_PUBLIC_URL});

export default history;