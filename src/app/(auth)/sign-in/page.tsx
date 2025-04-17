"use client";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
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
    <div className="min-h-screen flex items-center justify-center bg-[#f1f1ea]">
      <div className="max-w-[1100px] w-full min-h-[643px] flex items-center lg:items-start gap-6 justify-center px-3 py-6 flex-col lg:flex-row">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-white rounded-lg shadow-lg h-auto min-h-[432px] max-w-[424px] w-full gap-3 flex-[0.5] flex flex-col items-center"
        >
          <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>

          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-black">
              User Name
            </label>
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500 text-sm mb-2">
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="flex flex-col w-full">
            <label htmlFor="" className="text-black">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded mt-1 text-black"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mb-2">
                {errors.password.message}
              </p>
            )}
            <div className="m-3 text-right underline">
              <a className="text-[#206b19]" href="/forget-password">
                Forgot your password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="btn w-full bg-[#206b19] p-2 rounded-md text-lg text-white"
          >
            Login
          </button>
          <p className="mt-4 text-center text-black">
            New to Factor_?
            <a className="text-[#206b19]" href="#">
              Sign Up Here
            </a>
          </p>
        </form>
        {/* image section */}
        <div className="flex-[0.5]  flex gap-3 h-auto min-h-[360px] w-full">
          {/* image */}
          <div className="flex-[0.3] w-full border border-black"></div>
          {/* content */}
          <div className="flex-[0.6] w-full flex flex-col gap-3 py-3">
            <span className="font-normal text-[18px] leading-[24px] text-[#13400f] font-Helvetica">
              The Factor App
            </span>
            <h1 className="font-semibold text-[40px] text-[#333] w-full">
              Meals at Your Fingertips
            </h1>
            <span className="font-normal text-[16px] leading-[24px] text-black font-Helvetica">
              With our app you can view menus, select meals, and see your
              scheduled deliveries.
            </span>
            <div className="w-full flex sm:flex-row flex-col gap-3">
              <img
                src="/temp/appstore-badge-en.png"
                alt="appstore"
                className="w-30 h-10"
              />
              <img
                src="/temp/playstore-badge-en.png"
                alt="playstore"
                className="w-30 h-10"
              />
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default SignInPage;
