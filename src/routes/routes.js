import HomeView from './../Views/Home/Home';
import LoginView from './../Views/Login/Login';
import SignUpView from "./../Views/SignUp/SignUp";
import DashboardView from "./../Views/Dashboard/Dashboard";
import PhoneVerificationView from '../Views/PhoneVerification/PhoneVerification';
import ProfileSetupView from '../Views/ProfileSetup/ProfileSetup';
import AccountView from "../Views/Account/Account";
import ListSpotView from "../Views/ListSpot/ListSpot";

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
      },
      {
        path: "/welcome",
        component: ProfileSetupView
      },
      {
        path: "/account",
        component: AccountView
      },
      {
        path: "/listSpot",
        component: ListSpotView
      }
    ]
  );
}

export default Routes