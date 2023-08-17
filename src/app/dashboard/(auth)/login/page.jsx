"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "authenticated"){
    router?.push("/dashboard");
  }

  if(session.status === "loading"){
    return <p>Loading.......................</p>;
  } 
  return (
    <div>
      <button
        onClick={() => {
          signIn("google");
        }}
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
