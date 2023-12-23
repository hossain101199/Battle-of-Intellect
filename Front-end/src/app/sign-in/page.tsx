"use client";
import { initialValues } from "@/InitialValuesAndValidationSchema/signInInitialValues";
import { validationSchema } from "@/InitialValuesAndValidationSchema/signInValidationSchema";
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
      toast.success("Welcome back! You've successfully logged in.");
      setSubmitting(false);
    } catch (error: any) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw new Error("An unexpected error occurred:", error);
    }
  };
  return (
    <>
      <Container className="flex justify-center items-center">
        <Card className="mt-[50px] mb-[50px] p-[30px] sm:p-[50px] max-w-md w-full shadow-lg flex flex-col gap-5 bg-[#FFF8ED] border-none">
          <LHeading className="text-center">Sign In</LHeading>
          <Formik
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ isSubmitting }) => (
              <fieldset disabled={isSubmitting}>
                <Form className="flex flex-col gap-5">
                  <InputField name="email" type="email" />
                  <InputField
                    name="password"
                    type={showPassword ? "text" : "password"}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    showIcon
                  />

                  <SpinnerButton isLoading={isSubmitting} title="Sign In" />
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
    </>
  );
};

export default SignInPage;
