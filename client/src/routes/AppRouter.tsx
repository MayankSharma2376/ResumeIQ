import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import UploadPage from "../pages/Upload";

import Profile from "../pages/Profile";
import ResumeHistory from "../pages/ResumeHistory"
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import ResumeDetails from "../pages/ResumeDetails";
import JobMatch from "../pages/JobMatcher";


export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Public Routes */}

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}

                <Route
                    element={
                        <ProtectedRoute>
                            <DashboardLayout />
                        </ProtectedRoute>
                    }
                >

          






                    <Route path="/" element={<Navigate to="/dashboard" replace />} />

                    <Route path="/dashboard" element={<Dashboard />} />

                    <Route path="/upload" element={<UploadPage />} />
                    

                  <Route path="/history" element={
                    <ProtectedRoute>
                        <ResumeHistory/>
                    </ProtectedRoute>
                  }/>

                    <Route path="/profile" element={<Profile />} />
                    <Route path="/resume/:id" element={<ProtectedRoute>
                        <ResumeDetails/>
                    </ProtectedRoute>}/>

                    <Route path="*" element={<NotFound/>}/>

                    <Route path="/job-match" element={<JobMatch/>}/>



                </Route>

            </Routes>
        </BrowserRouter>
    );
}