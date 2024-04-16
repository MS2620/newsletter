"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import icon from "../../public/images/icon-list.svg";
import Image from "next/image";

const Subscribed = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get("email");
    setEmail(emailParam);
    setLoading(false);
  }, []);

  const onClick = () => {
    router.push("/");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-charcoal-grey h-screen">
      <div className="h-screen flex justify-center items-center">
        <div className="w-11/12 sm:w-6/12 md:w-6/12 lg:w-6/12 xl:w-4/12 bg-grey rounded-3xl p-5">
          <Image src={icon} alt="icon" className="w-12 h-12" />
          <div className="flex flex-col mt-6 text-black">
            <h1 className="text-3xl font-bold">Thanks for subscribing!</h1>
            <p className="mt-4 ">
              A confirmation email has been sent to{" "}
              <span className="font-bold">{email}</span>. Please open it and
              click the button inside to confirm your subscription.
            </p>
            <button
              className="mt-4 bg-dark-slate-grey rounded-md h-12 text-white"
              onClick={onClick}
            >
              Dismiss message
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-dark-slate-grey text-white text-center py-4 -mt-14">
        created by{" "}
        <a href="https://github.com/MS2620" className="text-primary">
          MS2620
        </a>{" "}
        - github.com
      </footer>
    </div>
  );
};

export default Subscribed;

