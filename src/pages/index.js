import Head from "next/head";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 gold-1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>
      <h2 style={{ textAlign: "center" }}>
        Logged in user:{" "}
        <span style={{ color: "#ff4d4f" }}>{session?.user?.name}</span>
      </h2>
      <h2 style={{ textAlign: "center" }}>
        Logged in user email:{" "}
        <span style={{ color: "#ff4d4f" }}>{session?.user?.email}</span>
      </h2>
    </div>
  );
};

export default HomePage;
