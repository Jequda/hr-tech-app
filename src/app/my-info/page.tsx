"use client";

import { useQuery } from "@apollo/client";
import { useAuthStore } from "../store/ZustandStore";
import { MY_PROFILE_QUERY } from "../graphql/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MyInfoPage = () => {
  const router = useRouter();
  const { accessToken, logout } = useAuthStore();
  console.log(accessToken);
  const { data, loading, error } = useQuery(MY_PROFILE_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  });
  useEffect(() => {
    if (!accessToken) {
      router.push("/login");
    }
  }, [accessToken, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { name, avatar } = data.myProfile;

  return (
    <div>
      <header>
        <div>
          <img src={avatar} alt={name} />
          <h1>{name}</h1>
        </div>
        <button onClick={logout}>Logout</button>
      </header>
      <main>{/* Остальная информация профиля */}</main>
    </div>
  );
};

export default MyInfoPage;
