"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  if (session.status === "loading") {
    return <p>Loading.......................</p>;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          flexDirection: "column"
        }}
      >
        <button
          style={{
            background: "#59bce4",
            padding: "20px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "3px solid black"
          }}
        >
          <FaGoogle
            onClick={() => {
              signIn("google");
            }}
          />
        </button>
        <p style={{fontSize: "16px", backgroundColor: "#A7DDF2", padding: "15px 20px", borderRadius:"5px", color: "black", fontWeight:"600", margin:"30px 0px"}}>Login With Google</p>
      </div>
    </div>
  );
};

export default Login;
