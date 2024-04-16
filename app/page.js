"use client";
import Image from "next/image";
import illustration_mobile from "../public/images/illustration-sign-up-mobile.svg";
import illustration_desktop from "../public/images/illustration-sign-up-desktop.svg";
import { useState, useEffect } from "react";
import icon from "../public/images/icon-list.svg";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState("");
  const [width, setWidth] = useState(0);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Check if window is defined before accessing it
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  useEffect(() => {
    if (width < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email);
    router.push(`/subscribed?email=${email}`);
  };

  return (
    <div>
      {isMobile ? (
        <div className="w-screen bg-white h-screen">
          <div className="text-black flex flex-col h-screen">
            <Image src={illustration_mobile} alt="img" className="w-full" />
            <div className="w-11/12 mx-auto">
              <h1 className="text-5xl font-semibold mt-10">Stay Updated!</h1>
              <p className="mt-5">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="flex flex-col mt-5 space-y-2">
                <li>
                  <Image src={icon} alt="icon" className="inline mr-3" />
                  Product Discovery and building what matters
                </li>
                <li>
                  <Image src={icon} alt="icon" className="inline mr-3" />
                  Measuring to ensure updates are a success
                </li>
                <li>
                  <Image src={icon} alt="icon" className="inline mr-3" />
                  And much more!
                </li>
              </ul>

              <form
                name="form1"
                className="flex flex-col mt-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label htmlFor="email">
                  Email address{" "}
                  <span className="float-right text-primary">
                    {errors.email && errors.email.message}
                  </span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Valid email is required",
                    },
                  })}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`rounded-md h-12 pl-6 mt-2 text-black border border-grey focus:outline-none ${
                    errors.email ? "border-primary bg-primary/20" : ""
                  }`}
                  placeholder="email@company.com"
                />
                <button className="bg-dark-slate-grey mt-4 rounded-md h-12 text-white">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-charcoal-grey h-screen flex justify-center items-center">
          <div className="bg-white text-black flex flex-row rounded-2xl w-10/12 lg:w-8/12 xl:w-7/12">
            <div className="flex flex-col p-4 justify-center items-center">
              <h1 className="text-5xl font-semibold">Stay Updated!</h1>
              <p className="mt-5">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="flex flex-col mt-5 space-y-2">
                <li>
                  <Image src={icon} alt="icon" className="inline mr-3" />
                  Product Discovery and building what matters
                </li>
                <li>
                  <Image src={icon} alt="icon" className="inline mr-3" />
                  Measuring to ensure updates are a success
                </li>
                <li>
                  <Image src={icon} alt="icon" className="inline mr-3" />
                  And much more!
                </li>
              </ul>
              <form
                name="form1"
                className="flex flex-col w-full"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label htmlFor="email" className="mt-4 font-medium">
                  Email address
                  <span className="float-right text-primary">
                    {errors.email && errors.email.message}
                  </span>
                </label>
                <input
                  type="text"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      message: "Valid email is required",
                    },
                  })}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`rounded-md h-12 pl-6 mt-2 text-black border border-grey focus:outline-none ${
                    errors.email ? "border-primary bg-primary/20" : ""
                  }`}
                  placeholder="email@company.com"
                />
                <button className="bg-dark-slate-grey mt-4 rounded-md h-12 text-white">
                  Subscribe to monthly newsletter
                </button>
              </form>
            </div>
            <div className="flex justify-center">
              <Image src={illustration_desktop} alt="img" className="w-full p-4" />
            </div>
          </div>
        </div>
      )}
      <footer className="bg-dark-slate-grey text-white text-center py-4 -mt-14">
        created by{" "}
        <a href="https://github.com/MS2620" className="text-primary">
          MS2620
        </a>{" "}
        - github.com
      </footer>
    </div>
  );
}
