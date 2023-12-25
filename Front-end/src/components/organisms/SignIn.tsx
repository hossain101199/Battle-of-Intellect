"use client";

import { initialValues } from "@/InitialValuesAndValidationSchema/signInInitialValues";
import { validationSchema } from "@/InitialValuesAndValidationSchema/signInValidationSchema";
import { useSignInMutation } from "@/redux/features/auth/authApi";
import { setLoggedInUserInfo } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
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

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signIn, { isLoading, error, isError }] = useSignInMutation();

  const dispatch = useAppDispatch();

  const router = useRouter();

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      const result = await signIn(values).unwrap();

      if (result?.statusCode == 200) {
        dispatch(
          setLoggedInUserInfo({
            accessToken: result?.data?.accessToken,
            name: result?.data?.name,
            role: result?.data?.role,
          })
        );
        toast.success("Welcome back! You've successfully logged in.");
        setSubmitting(false);

        router.push("/quizzes", { scroll: false });
      }
    } catch (error: any) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw Error(error);
    }
  };
  return (
    <Container className="flex justify-center items-center">
      <Card className="mt-[50px] mb-[50px] p-[30px] sm:p-[50px] max-w-md w-full shadow-lg flex flex-col gap-5 border-none">
        <LHeading className="text-center">Sign In</LHeading>
        {isError && (
          <Error
            error={
              (error as any)?.data?.message
                ? (error as any)?.data?.message
                : "Oops! Something went wrong."
            }
          />
        )}
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
            <fieldset disabled={isLoading || isSubmitting}>
              <Form className="flex flex-col gap-5">
                <InputField name="email" title="email" type="email" />
                <InputField
                  name="password"
                  title="password"
                  type={showPassword ? "text" : "password"}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showIcon
                />

                <SpinnerButton
                  isLoading={isLoading || isSubmitting}
                  title="Sign In"
                />
              </Form>
            </fieldset>
          )}
        </Formik>

        <Paragraph className="text-center text-primary">
          Don’t have an account?
          <Link href="/sign-up">
            <span className="font-semibold mx-1">Join Now</span>
          </Link>
        </Paragraph>
      </Card>
    </Container>
  );
};

export default SignIn;
