"use client";

import { useQuery } from "@apollo/client";
import { useAuthStore } from "../store/ZustandStore";
import { MY_PROFILE_QUERY } from "../graphql/queries";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TimeOffSection from "../components/TimeOffSection";
import Dashboard from "../components/Dashboard";

const MyInfoPage = () => {
  const router = useRouter();
  const { accessToken, logout } = useAuthStore();
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
    <div className="bg-gray-100 min-h-screen">
      <header>
        {/* <div>
          <img src={avatar} alt={name} />
          <h1>{name}</h1>
        </div>
        <button onClick={logout}>Logout</button> */}
      </header>
      <main>
        <div>
          <div>
            <Navbar avatar={avatar} />
            <Dashboard avatar={avatar} name={name} />
            <div className="flex">
              <Sidebar />
              <TimeOffSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyInfoPage;
