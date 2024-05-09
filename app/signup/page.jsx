"use client";
import { useAuth } from "@/contexts/AuthContexts";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const SignUpPage = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    imageUrl: "",
  });

  const router = useRouter();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    // do validation
    // if (password !== confirmPassword) {
    //   return setError("Passwords don't match!");
    // }

    try {
      console.log(formData);
      //   setError("");
      //   setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/api/v1/user",
        formData
      );
      console.log("Response:", response.data);
      if (response.data) {
        await signup(formData.email, formData.password, formData.fullName);
        router.push("/");
        console.log("finally signedup");
      }
      // Handle success
    } catch (err) {
      console.log(err.message);
      //   setLoading(false);
      //   setError("Failed to create an account!");
    }
  }
  return (
    <main className="pt-14 pb-20 lg:py-28 overflow-hidden">
      <section className="">
        <div className="flex justify-center">
          <div className="relative lg:w-auto w-[90%] sm:w-[70%] md:w-[60%]">
            <div className="bg-gradient-to-br from-purple-200 to-blue-300 w-52 h-52 rounded-full absolute -bottom-6 -left-20 z-0"></div>
            <div className="bg-gradient-to-br from-purple-200 to-blue-300 w-52 h-52 rounded-full absolute top-10 -right-20 z-0"></div>
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-20 h-20 rounded-full absolute top-32 left-28 z-0"></div>
            <div className="bg-[#af87fd] w-12 h-12 rounded-full absolute top-40 left-10 z-0"></div>
            <div className="flex flex-col gap-4 justify-center mt-16 w-full lg:w-[32rem] h-full px-4 lg:px-10 pt-4 lg:pt-12 pb-4 backdrop-blur-[50px] bg-white bg-opacity-25 border shadow-md rounded-xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fullName: e.target.value,
                    })
                  }
                  placeholder="Enter your full name"
                  className="w-full border border-[#ede8e8] focus:border-[#e5e0e0] rounded-xl bg-white focus:outline-none px-4 py-2 text-gray-700"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="Enter your email address"
                  className="w-full border border-[#ede8e8] focus:border-[#e5e0e0] rounded-xl bg-white focus:outline-none px-4 py-2 text-gray-700"
                />
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    placeholder="Enter your password"
                    className="w-full border border-[#ede8e8] focus:border-[#e5e0e0] rounded-xl bg-white focus:outline-none px-4 py-2 text-gray-700"
                  />
                  <button onClick={() => setShow(!show)}>
                    {show ? (
                      <FaEye
                        className="absolute top-1/2 -translate-y-[50%] right-4"
                        size={18}
                      />
                    ) : (
                      <FaEyeSlash
                        className="absolute top-1/2 -translate-y-[50%] right-4"
                        size={18}
                      />
                    )}
                  </button>
                </div>
                <input
                  type="text"
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      gender: e.target.value,
                    })
                  }
                  placeholder="Enter your gender"
                  className="w-full border border-[#ede8e8] focus:border-[#e5e0e0] rounded-xl bg-white focus:outline-none px-4 py-2 text-gray-700"
                />
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  placeholder="Enter your phone"
                  className="w-full border border-[#ede8e8] focus:border-[#e5e0e0] rounded-xl bg-white focus:outline-none px-4 py-2 text-gray-700"
                />
                <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      imageUrl: e.target.value,
                    })
                  }
                  placeholder="Enter your photo"
                  className="w-full border border-[#ede8e8] focus:border-[#e5e0e0] rounded-xl bg-white focus:outline-none px-4 py-2 text-gray-700"
                />
                <button
                  type="submit"
                  className="border px-5 py-2 bg-black text-white"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUpPage;
