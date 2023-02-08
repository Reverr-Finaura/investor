import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/signin/SignIn";
import SignUp from "../pages/auth/signup/SingUp";
import SignUpNew from "../pages/auth/signup/SignUpNew";
import ForgotPassword from "../pages/auth/forgotpassword/ForgotPassword";
import ResetPassword from "../pages/auth/resetpassword/ResetPassword";
import OtpVerification from "../pages/auth/otpverification/OtpVerification";
import Deals from "../pages/home/deals/Deals";
import LandingPageInvestors from "../pages/landingPage/LandingPageInvestors";
import LandingPageStartups from "../pages/landingPage/LandingPageStartups";
import Portfolio from "../pages/home/portfolio/Portfolio";
import Profile from "../pages/home/profile/Profile";
import Dashboard from "../pages/home/dashboard/Dashboard";
import AboutDeal from "../pages/home/aboutdeal/AboutDeal";
import Faq from "../pages/home/faqs/Faq";
import OnePager from "../pages/home/onePager/OnePager";
import People from "../pages/home/people/People";
import DealTerm from "../pages/home/dealTerms/DealTerm";
import PitchDeck from "../pages/home/pitchDeck/PitchDeck";
import FinancialProjection from "../pages/home/financialProjection/FinancialProjection";
import Analytics from "../pages/home/analytics/Analytics";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/homePage/HomePage";
import Blogs from "../pages/blogs/Blogs";
import NotFound from "../pages/NotFound/NotFound";
import AuthRoute from "./AuthRoute";
import NewProtectedRoute from "./NewProtectedRoute";
import FounderForm from "../pages/Founder Form/FounderForm";
import { useSelector } from "react-redux";
import { getAuth } from "firebase/auth";

const AppRoutes = () => {
  const user = useSelector((state) => state.user.user);
  // const auth = getAuth();
  // const user = auth.currentUser;
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <AuthRoute>
          // <SignIn />
          user ? <Navigate to="/dashboard" replace /> : <SignIn />
        }
        // </AuthRoute>
      />
      <Route
        path="/signUp"
        element={
          // <AuthRoute>
          <SignUpNew />
          // </AuthRoute>
        }
      />
      <Route
        path="/forgot-password"
        element={
          // <AuthRoute>
          <ForgotPassword />
          // </AuthRoute>
        }
      />
      <Route
        path="/password-reset"
        element={
          // <AuthRoute>
          <ResetPassword />
          // </AuthRoute>
        }
      />
      <Route
        path="/otp-verify"
        element={
          // <AuthRoute>
          <OtpVerification />
          // </AuthRoute>
        }
      />
      <Route
        path="/investors"
        element={
          // <AuthRoute>
          <LandingPageInvestors />
          // </AuthRoute>
        }
      />
      <Route
        path="/startups"
        element={
          // <AuthRoute>
          <LandingPageStartups />
          // </AuthRoute>
        }
      />
      <Route path="/form/:form_Id" element={<FounderForm />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/:blog_Id/blog" element={<Blogs />} />
      <Route path="/dashboard/:blog_Id/blog" element={<Blogs />} />
      <Route
        path="/dashboard"
        element={<NewProtectedRoute Components={<Dashboard />} />}
      />
      <Route
        path="/deals"
        element={<NewProtectedRoute Components={<Deals />} />}
      />
      <Route
        path="/portfolio"
        element={<NewProtectedRoute Components={<Portfolio />} />}
      />
      <Route
        path="/profile"
        element={<NewProtectedRoute Components={<Profile />} />}
      />
      <Route
        path="/deals/:deal_Id"
        element={<NewProtectedRoute Components={<AboutDeal />} />}
      />
      <Route
        path="/faqs"
        element={<NewProtectedRoute Components={<Faq />} />}
      />
      <Route
        path="/one-pager"
        element={<NewProtectedRoute Components={<OnePager />} />}
      />
      <Route
        path="/people"
        element={<NewProtectedRoute Components={<People />} />}
      />
      <Route
        path="/deal-terms"
        element={<NewProtectedRoute Components={<DealTerm />} />}
      />
      <Route
        path="/pitch-deck"
        element={<NewProtectedRoute Components={<PitchDeck />} />}
      />
      <Route
        path="/financial-projections"
        element={<NewProtectedRoute Components={<FinancialProjection />} />}
      />
      <Route
        path="/analytics"
        element={<NewProtectedRoute Components={<Analytics />} />}
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
