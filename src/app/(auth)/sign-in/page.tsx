'use client'

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

type FormData = {
  username: string;
  password: string;
};

const SignInPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      console.error("Login error:", res?.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white rounded shadow w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          className="input mb-2 w-full"
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && <p className="text-red-500 text-sm mb-2">{errors.username.message}</p>}

        <input
          type="password"
          placeholder="Password"
          className="input mb-4 w-full"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password.message}</p>}

        <button type="submit" className="btn w-full bg-blue-600 text-white">Login</button>
      </form>
    </div>
  );
};

export default SignInPage;
