import HomeView from './../Views/Home/Home';
import LoginView from './../Views/Login/Login';
import SignUpView from "./../Views/SignUp/SignUp";
import DashboardView from "./../Views/Dashboard/Dashboard";
import PhoneVerificationView from '../Views/PhoneVerification/PhoneVerification';

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
      },
      {
        path: "/dashboard",
        component: DashboardView
      },
      {
        path: "/verify",
        component: PhoneVerificationView
      }
    ]
  );
}

export default Routes