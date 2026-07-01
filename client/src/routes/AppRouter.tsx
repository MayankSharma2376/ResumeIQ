import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";

import Dashboard from "../pages/Dashboard";
import UploadPage from "../pages/UploadPage";
import HistoryPage from "../pages/HistoryPage";
import ProfilePage from "../pages/ProfilePage";

import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../layouts/DashboardLayout";

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

                    <Route path="/history" element={<HistoryPage />} />

                    <Route path="/profile" element={<ProfilePage />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}