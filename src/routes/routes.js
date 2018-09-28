import HomeView from './../Views/Home/Home';
import LoginView from './../Views/Login/Login';
import SignUpView from "./../Views/SignUp/SignUp";

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
      },
      {
        path: '/signup',
        component: SignUpView
      }
    ]
  );
}

export default Routes