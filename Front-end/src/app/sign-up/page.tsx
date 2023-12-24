"use client";

import { signUpInitialValues } from "@/InitialValuesAndValidationSchema/signUpInitialValues";
import { signUpValidationSchema } from "@/InitialValuesAndValidationSchema/signUpValidationSchema";
import Card from "@/components/atoms/Card";
import Container from "@/components/atoms/Container";
import InputField from "@/components/atoms/InputFeild";
import LHeading from "@/components/atoms/LHeading";
import Paragraph from "@/components/atoms/Paragraph";
import SpinnerButton from "@/components/atoms/SpinnerButton";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      console.log(values);
      toast.success("Welcome! Your account has been successfully created.");
      setSubmitting(false);
    } catch (error: any) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw new Error("An unexpected error occurred:", error);
    }
  };
  return (
    <main>
      <Container className="flex justify-center items-center">
        <Card className="mt-[50px] mb-[50px] p-[30px] sm:p-[50px] max-w-md w-full shadow-lg flex flex-col gap-5 border-none">
          <LHeading className="text-center">Sign Up</LHeading>
          <Formik
            onSubmit={handleSubmit}
            initialValues={signUpInitialValues}
            validationSchema={signUpValidationSchema}
          >
            {({ isSubmitting }) => (
              <fieldset disabled={isSubmitting}>
                <Form className="flex flex-col gap-5">
                  <InputField name="name" title="name" type="text" />
                  <InputField name="email" title="email" type="email" />
                  <InputField
                    name="password"
                    title="password"
                    type={showPassword ? "text" : "password"}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    showIcon
                  />
                  <InputField
                    name="confirmPassword"
                    title="confirm Password"
                    type={showPassword ? "text" : "password"}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    showIcon
                  />

                  <SpinnerButton isLoading={isSubmitting} title="Sign Up" />
                </Form>
              </fieldset>
            )}
          </Formik>

          <Paragraph className="text-center text-primary">
            Already have an account?
            <Link href="/sign-in">
              <span className="font-semibold mx-1">Sign In</span>
            </Link>
          </Paragraph>
        </Card>
      </Container>
    </main>
  );
};

export default SignInPage;
