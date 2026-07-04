import { useState } from "react";
import { Mail, User, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import LogoSection from "../components/auth/LogoSection";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";
import AuthFooter from "../components/auth/AuthFooter";

import { registerUser } from "../services/auth.service";

export default function Register() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (
        e: React.FormEvent
    ) => {
        e.preventDefault();

        try {

            setLoading(true);

            await registerUser(form);

            toast.success("Account Created Successfully 🎉");

            navigate("/login");

        } catch (err: any) {

            toast.error(
                err?.response?.data?.message ??
                "Registration Failed"
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <AuthLayout>

            <AuthCard>

                <LogoSection />

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    <div>

                        <label className="mb-2 block text-sm text-gray-300">
                            Full Name
                        </label>

                        <div className="relative">

                            <UserCircle
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                            />

                            <AuthInput
                                className="pl-11"
                                name="fullName"
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                            />

                        </div>

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-gray-300">
                            Username
                        </label>

                        <div className="relative">

                            <User
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                            />

                            <AuthInput
                                className="pl-11"
                                name="username"
                                value={form.username}
                                onChange={handleChange}
                                placeholder="john123"
                                required
                            />

                        </div>

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-gray-300">
                            Email
                        </label>

                        <div className="relative">

                            <Mail
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                            />

                            <AuthInput
                                className="pl-11"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                            />

                        </div>

                    </div>

                    <div>

                        <label className="mb-2 block text-sm text-gray-300">
                            Password
                        </label>

                        <PasswordInput
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />

                    </div>

                    <AuthButton
                        loading={loading}
                        type="submit"
                    >
                        Create Account
                    </AuthButton>

                </form>

                <AuthFooter
                    text="Already have an account?"
                    linkText="Login"
                    to="/login"
                />

            </AuthCard>

        </AuthLayout>
    );
}