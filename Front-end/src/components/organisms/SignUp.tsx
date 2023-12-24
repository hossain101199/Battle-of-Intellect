"use client";

import { signUpInitialValues } from "@/InitialValuesAndValidationSchema/signUpInitialValues";
import { signUpValidationSchema } from "@/InitialValuesAndValidationSchema/signUpValidationSchema";
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Card from "../atoms/Card";
import Container from "../atoms/Container";
import Error from "../atoms/Error";
import InputField from "../atoms/InputFeild";
import LHeading from "../atoms/LHeading";
import Paragraph from "../atoms/Paragraph";
import SpinnerButton from "../atoms/SpinnerButton";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signUp, { isLoading, error, isError }] = useSignUpMutation();

  const router = useRouter();

  const handleSubmit = async (
    { name, email, password }: any,
    { setSubmitting }: any
  ) => {
    const data = { name, email, password };
    try {
      const result = await signUp(data).unwrap();

      if (result?.statusCode == 200) {
        toast.success("Welcome! Your account has been successfully created.");
        setSubmitting(false);
        router.push("/sign-in", { scroll: false });
      }
    } catch (error: any) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw new Error("An unexpected error occurred:", error);
    }
  };
  return (
    <Container className="flex justify-center items-center">
      <Card className="mt-[50px] mb-[50px] p-[30px] sm:p-[50px] max-w-md w-full shadow-lg flex flex-col gap-5 border-none">
        <LHeading className="text-center">Sign Up</LHeading>
        {isError && <Error error={error?.data?.message} />}
        <Formik
          onSubmit={handleSubmit}
          initialValues={signUpInitialValues}
          validationSchema={signUpValidationSchema}
        >
          {({ isSubmitting }) => (
            <fieldset disabled={isLoading || isSubmitting}>
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

                <SpinnerButton
                  isLoading={isLoading || isSubmitting}
                  title="Sign Up"
                />
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
  );
};

export default SignUp;
