import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import Head from "next/head";
import { useSession } from "next-auth/react";
const ProfilePage = () => {
  const { data: session } = useSession();

  return (
    <div style={{ textAlign: "center" }}>
      <Head>
        <title>Next Profile</title>
      </Head>
      <h1>User Profile</h1>
      <Avatar size={64} icon={<UserOutlined />} />
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>
        {/* Logged in user:{" "} */}
        <span style={{ color: "#ff4d4f" }}>{session?.user?.name}</span>
      </h2>
      <h2 style={{ textAlign: "center" }}>
        {/* Logged in user email:{" "} */}
        <span style={{ color: "#ff4d4f" }}>{session?.user?.email}</span>
      </h2>
    </div>
  );
};

export default ProfilePage;
