"use client";
import React from "react";
import { object, string, ref } from "yup";
import ValidationError from "./form/ValidationError";
import { Form, Formik } from "formik";
import InputText from "./form/InputText";
import InputSelect from "./form/InputSelect";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  return (
    <div className="flex justify-center items-center my-10">
      <div className="w-60 m-2">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
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
