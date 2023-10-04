"use client";
import React from "react";
import { Form, Formik } from "formik";
import InputText from "./form/InputText";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
import axiosInstance from "@/lib/AxiosInstance";
import { saveToLocalStorage } from "@/lib/LocalStorageHandler";
import { useRouter } from "next/navigation";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { push } = useRouter();
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-60 m-2">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            axiosInstance
              .post("/api/v1/auth/login", values)
              .then((res) => {
                saveToLocalStorage("accessToken", res.data.accessToken);
                saveToLocalStorage("refreshToken", res.data.refreshToken);
                push("/home");
              })
              .catch((err) => {
                // TODO: handle login error with notification (issue not completed yet).
                console.log(err);
              });
          }}
        >
          <div className="border border-purple-light p-4 rounded-md bg-white">
            <h1 className="text-purple-dark text-lg font-semibold mb-2 text-center">
              Login
            </h1>
            <Form>
              <InputText id="email" type="email" />
              <InputText id="password" type="password" />
              <div className="flex justify-center items-center">
                <PrimaryButton text="Login" />
              </div>
              <div className="flex justify-center items-center my-5">
                <p className="text-xs text-center">
                  Do not have an account yet? <br />{" "}
                  <Link href="/auth/register" className="text-purple-light">
                    Register instead
                  </Link>
                  .
                </p>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
