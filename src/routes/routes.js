import HomeView from './../Views/Home/Home';
import LoginView from './../Views/Login/Login';

const Routes = () => {
  return (
    [
      {
        path: '/',
        component: HomeView
      },
      {
        path: '/login',
        component: LoginView
      }
    ]
  );
}

export default Routes