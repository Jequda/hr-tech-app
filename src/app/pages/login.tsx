import { useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { LOGIN_MUTATION } from "../graphql/mutations";
import { Input } from "@shadcn/ui";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { email, password },
      });

      localStorage.setItem("accessToken", data.login.accessToken);
      localStorage.setItem("refreshToken", data.login.refreshToken);

      router.push("/my-info");
    } catch (e) {
      console.error("Login error:", e);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="p-6 bg-white rounded-lg shadow-md"
      >
        <h2 className="text-lg font-bold mb-4">Login</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4"
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg"
          disabled={loading}
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
