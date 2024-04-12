import React, { useState } from "react";
import Log from "../assets/log-out.png";
import { useFormik } from "formik";
import { SignupSchema } from "../schemas";

export default function Form() {
  const [logIn, setLogin] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: SignupSchema,
      onSubmit: (values, { resetForm }) => {
        console.log(values);
        resetForm();
      },
    });

 

  return (
    <>
      <div className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green-300 via-fuchsia-400 to-amber-100 h-screen w-screen flex justify-center items-center ">
        <div className="flex flex-col justify-center items-center lg:py-8 bg-slate-100 h-fit lg:w-[30%] w-fit p-8 rounded-3xl shadow-xl shadow-black/25">
        
          <header className="flex flex-col justify-center items-center py-5">
            <img className="h-12" src={Log} alt="LogIn" />
            <h1 id="heading" className="text-xl lg:text-3xl pt-3 ">
              {logIn?"Sign in":"Sign up"}
            </h1>
          </header>

          <section>
            <form className="space-y-2 text-sm lg:text-lg xl:text-xl">
              {logIn ? null :
                <div id="username" className="flex flex-col">
                  <label className="sr-only" htmlFor="Name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    name="name"
                    value={values.name}
                    autoComplete="off"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" w-full py-px border-b-2 border-fuchsia-400 text-lg bg-transparent focus:border-b-2 focus:outline-none focus:border-green-300 placeholder:text-sm"
                  />
                  {errors.email && touched.name ? (
                    <p className="text-xs text-red-600 font-medium p-[2px]">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
              }

              <div id="email" className="flex flex-col">
                <label className="sr-only" htmlFor="Email">
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  value={values.email}
                  autoComplete="off"
                  placeholder="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" py-1 border-b-2 border-fuchsia-400 text-lg bg-transparent focus:border-b-2 focus:outline-none focus:border-green-300 placeholder:text-sm"
                />
                {errors.email && touched.email ? (
                  <p className="text-xs text-red-600 font-medium p-[2px]">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div id="password" className="flex flex-col">
                <label className="sr-only" htmlFor="Password">
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  value={values.password}
                  autoComplete="off"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" py-1 border-b-2 border-fuchsia-400 text-lg bg-transparent focus:border-b-2 focus:outline-none focus:border-green-300 placeholder:text-sm"
                />
                {errors.password && touched.password ? (
                  <p className="text-xs text-red-600 font-medium p-[2px]">
                    {errors.password}
                  </p>
                ) : null}
              </div>
              {logIn? null : <div id="confirmPassword" className="flex flex-col">
                <label className="sr-only" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm_password"
                  value={values.confirm_password}
                  placeholder="Confirm Password"
                  autoComplete="off"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className=" py-1 border-b-2 border-fuchsia-400 text-lg bg-transparent focus:border-b-2 focus:outline-none focus:border-green-300 placeholder:text-sm"
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="text-xs text-red-600 font-medium p-[2px]">
                    {errors.confirm_password}
                  </p>
                ) : null}
              </div>}
            </form>
          </section>

          <section className="flex flex-col items-center">
            <button
              onClick={handleSubmit}
              type="submit"
              id="btn"
              className="my-5 inline-block shrink-0 rounded-md bg-fuchsia-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent border border-fuchsia-400 hover:text-fuchsia-400 focus:outline-none "
            >
             {logIn?"Log in":"Create an account"}
            </button>
            <p className="my-4 text-sm text-gray-500 sm:mt-0 text-center">
              <span id="account">{logIn ? "Create an account":"Already have an account?"}</span>
              <a
                onClick={() => setLogin(!logIn)}
                href="#"
                id="loginBtn"
                className="text-gray-700 underline"
              >
                {logIn ?"Sign up":"Log in"}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
