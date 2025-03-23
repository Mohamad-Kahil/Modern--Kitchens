import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface LoginFormProps {
  onLoginSuccess?: () => void;
  defaultEmail?: string;
}

const LoginForm = ({
  onLoginSuccess = () => {},
  defaultEmail = "",
}: LoginFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const { theme } = useTheme();
  const { language, isRTL } = useLanguage();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: defaultEmail,
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    setLoginError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purposes, let's assume login is successful
      console.log("Login successful", data);
      onLoginSuccess();
      navigate("/dashboard");
    } catch (error) {
      setLoginError("Invalid email or password. Please try again.");
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const translations = {
    title: language === "en" ? "Login" : "تسجيل الدخول",
    description:
      language === "en"
        ? "Enter your credentials to access your account"
        : "أدخل بيانات الاعتماد الخاصة بك للوصول إلى حسابك",
    email: language === "en" ? "Email" : "البريد الإلكتروني",
    password: language === "en" ? "Password" : "كلمة المرور",
    rememberMe: language === "en" ? "Remember me" : "تذكرني",
    loginButton: language === "en" ? "Sign In" : "تسجيل الدخول",
    forgotPassword:
      language === "en" ? "Forgot password?" : "نسيت كلمة المرور؟",
  };

  return (
    <Card
      className={`w-full max-w-md mx-auto bg-background dark:bg-micro-dark ${isRTL ? "text-right" : "text-left"}`}
    >
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">
          {translations.title}
        </CardTitle>
        <CardDescription>{translations.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className={`text-sm font-medium ${isRTL ? "block text-right" : ""}`}
            >
              {translations.email}
            </Label>
            <div className="relative">
              <Mail
                className={`absolute top-3 ${isRTL ? "right-3" : "left-3"} h-4 w-4 text-muted-foreground`}
              />
              <Input
                id="email"
                type="email"
                className={`pl-10 ${isRTL ? "pr-10 pl-3 text-right" : ""}`}
                placeholder="name@example.com"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-destructive mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label
              htmlFor="password"
              className={`text-sm font-medium ${isRTL ? "block text-right" : ""}`}
            >
              {translations.password}
            </Label>
            <div className="relative">
              <Lock
                className={`absolute top-3 ${isRTL ? "right-3" : "left-3"} h-4 w-4 text-muted-foreground`}
              />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                className={`pl-10 ${isRTL ? "pr-10 pl-3 text-right" : ""}`}
                {...register("password")}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={`absolute top-3 ${isRTL ? "left-3" : "right-3"} text-muted-foreground`}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-destructive mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div
            className={`flex items-center ${isRTL ? "flex-row-reverse justify-end" : "justify-between"}`}
          >
            <div className="flex items-center space-x-2">
              <Checkbox id="rememberMe" {...register("rememberMe")} />
              <Label htmlFor="rememberMe" className="text-sm font-medium">
                {translations.rememberMe}
              </Label>
            </div>
            <Button variant="link" className="px-0 font-normal">
              {translations.forgotPassword}
            </Button>
          </div>

          {loginError && (
            <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
              {loginError}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-micro-blue hover:bg-micro-blue/90"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                {language === "en" ? "Signing in..." : "جاري تسجيل الدخول..."}
              </div>
            ) : (
              translations.loginButton
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t p-4">
        <div className="text-sm text-muted-foreground">
          {language === "en"
            ? "Modern Kitchens Business Application"
            : "تطبيق المطابخ الحديثة للأعمال"}
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
