import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/signin/SignIn";
import SignUp from "../pages/auth/signup/SingUp";
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

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <AuthRoute>
          <SignIn />
          // </AuthRoute>
        }
      />
      <Route
        path="/signUp"
        element={
          // <AuthRoute>
          <SignUp />
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
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/:blog_Id/blog" element={<Blogs />} />
      <Route path="/dashboard/:blog_Id/blog" element={<Blogs />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/deals"
        element={
          <ProtectedRoute>
            <Deals />
          </ProtectedRoute>
        }
      />
      <Route
        path="/portfolio"
        element={
          <ProtectedRoute>
            <Portfolio />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/deals/:deal_Id"
        element={
          <ProtectedRoute>
            <AboutDeal />
          </ProtectedRoute>
        }
      />
      <Route
        path="/faqs"
        element={
          <ProtectedRoute>
            <Faq />
          </ProtectedRoute>
        }
      />
      <Route
        path="/one-pager"
        element={
          <ProtectedRoute>
            <OnePager />
          </ProtectedRoute>
        }
      />
      <Route
        path="/people"
        element={
          <ProtectedRoute>
            <People />
          </ProtectedRoute>
        }
      />
      <Route
        path="/deal-terms"
        element={
          <ProtectedRoute>
            <DealTerm />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pitch-deck"
        element={
          <ProtectedRoute>
            <PitchDeck />
          </ProtectedRoute>
        }
      />
      <Route
        path="/financial-projections"
        element={
          <ProtectedRoute>
            <FinancialProjection />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;