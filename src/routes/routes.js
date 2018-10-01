import HomeView from './../Views/Home/Home';
import LoginView from './../Views/Login/Login';
import SignUpView from "./../Views/SignUp/SignUp";

const Routes = () => {
  let public_url = (process.env.REACT_APP_PUBLIC_URL) ? process.env.REACT_APP_PUBLIC_URL : "";
  return (
    [
      {
        path: '/',
        component: HomeView
      },
      {
        path: "/login",
        component: LoginView
      },
      {
        path: "/signup",
        component: SignUpView
      }
    ]
  );
}

export default Routes