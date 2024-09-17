"use client";

import Link from "next/link";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql/mutations";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/ZustandStore";

export const description =
  "A login form with email and password. There's an option to login with Google and a link to sign up if you don't have an account.";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setTokens } = useAuthStore();

  const [login, { loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await login();

      if (data) {
        localStorage.setItem("accessToken", data.login.access_token);
        localStorage.setItem("refreshToken", data.login.refresh_token);

        setTokens(data.login.access_token, data.login.refresh_token);

        router.push("/my-info");
      }
    } catch (e) {
      console.error("Login error:", e);
    }
  };

  return (
    <Card className="mx-auto max-w-sm mt-20">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-white text-black hover:text-white"
            onClick={handleLogin}
          >
            {loading ? "Signing In..." : "Login"}
          </Button>
          {error && <p className="text-red-500">{error.message}</p>}
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="#" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
