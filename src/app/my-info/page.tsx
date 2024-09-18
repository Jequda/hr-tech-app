"use client";

import { ApolloError, useMutation, useQuery } from "@apollo/client";
import { useAuthStore } from "../store/ZustandStore";
import { MY_PROFILE_QUERY } from "../graphql/queries";
import { REFRESH_TOKEN_MUTATION } from "../graphql/mutations";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TimeOffSection from "../components/TimeOffSection";
import Dashboard from "../components/Dashboard";

const MyInfoPage = () => {
  const router = useRouter();
  const { accessToken, refreshToken, setTokens, logout } = useAuthStore();
  const [refreshTokenMutation] = useMutation(REFRESH_TOKEN_MUTATION);
  const { data, loading, error, refetch } = useQuery(MY_PROFILE_QUERY, {
    context: {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
    onError: async (err: ApolloError) => {
      if (err.networkError) {
        const errorMessage = err.networkError.message;

        if (errorMessage.includes("401")) {
          try {
            const { data: refreshData } = await refreshTokenMutation({
              variables: { refreshToken },
            });

            if (refreshData) {
              setTokens(
                refreshData.refreshToken.access_token,
                refreshData.refreshToken.refresh_token
              );

              refetch({
                context: {
                  headers: {
                    Authorization: `Bearer ${refreshData.refreshToken.access_token}`,
                  },
                },
              });
            } else {
              logout();
              router.push("/login");
            }
          } catch (refreshError) {
            console.error("Ошибка обновления токена:", refreshError);
            logout();
            router.push("/login");
          }
        }
      }
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
    <div className="bg-gray-100 min-h-screen max-sm:w-max-[360px] max-sm:h-full overflow-x-hidden">
      <main>
        <div>
          <div>
            <Navbar avatar={avatar} onLogout={logout} />
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
