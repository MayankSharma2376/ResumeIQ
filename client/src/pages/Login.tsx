import { useState } from "react";
import { Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import AuthLayout from "../components/auth/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import LogoSection from "../components/auth/LogoSection";
import AuthInput from "../components/auth/AuthInput";
import PasswordInput from "../components/auth/PasswordInput";
import AuthButton from "../components/auth/AuthButton";
import AuthFooter from "../components/auth/AuthFooter";

import { loginUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const { refreshUser } = useAuth();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      await loginUser(form);

      await refreshUser();

      toast.success("Welcome back 👋");

      navigate("/");
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message ??
          "Login Failed"
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
          className="space-y-6"
        >
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
                name="email"
                type="email"
                placeholder="john@example.com"
                value={form.email}
                onChange={handleChange}
                className="pl-11"
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
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />

          </div>

          <AuthButton
            loading={loading}
            type="submit"
          >
            Login
          </AuthButton>

        </form>

        <AuthFooter
          text="Don't have an account?"
          linkText="Create Account"
          to="/register"
        />

      </AuthCard>
    </AuthLayout>
  );
}