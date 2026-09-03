import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navbar } from "../components/Navbar";
import { StateExamples } from "../assignment/State/StateExamples";
import { Login } from "../components/Auth/Login";
import { PropExamples } from "../assignment/Props/PropExamples";
import { AppLayout } from "../layout/AppLayout";
import { AllComponents } from "../App";
import { Lists } from "../assignment/Lists/Lists";
import { SignUp } from "../components/Auth/SignUp";
import { Contact } from "../components/Auth/Contact";
import { Profile } from "../components/Auth/Profile";

export const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <AppLayout>
        <Routes>
          <Route path="/" element={<AllComponents/>} />
          <Route path="/state" element={<StateExamples/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/prop" element={<PropExamples/>} />
          <Route path="/lists" element={<Lists/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </AppLayout>
    </Router>
  );
};
