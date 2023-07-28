import Head from "next/head";
import { useSession } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "@/firebase/firebase.auth";

const HomePage = () => {
  const { data: session } = useSession();

  const [user, loading, error] = useAuthState(auth);

  console.log(user);

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 gold-1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      {session?.user && (
        <h2 style={{ textAlign: "center" }}>
          Logged in user:{" "}
          <span style={{ color: "#ff4d4f" }}>{session?.user?.name}</span>
        </h2>
      )}
      {session?.user && (
        <h2 style={{ textAlign: "center" }}>
          Logged in user email:{" "}
          <span style={{ color: "#ff4d4f" }}>{session?.user?.email}</span>
        </h2>
      )}
      {user && (
        <h2 style={{ textAlign: "center" }}>
          Logged in user email:{" "}
          <span style={{ color: "#ff4d4f" }}>{user?.email}</span>
        </h2>
      )}
    </div>
  );
};

export default HomePage;
