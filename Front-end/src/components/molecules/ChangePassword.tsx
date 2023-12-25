import { changePasswordInitialValues } from "@/InitialValuesAndValidationSchema/changePasswordInitialValues";
import { changePasswordValidationSchema } from "@/InitialValuesAndValidationSchema/changePasswordValidationSchema";
import { useChangePasswordMutation } from "@/redux/features/auth/authApi";
import { Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import Card from "../atoms/Card";
import Error from "../atoms/Error";
import InputField from "../atoms/InputFeild";
import SpinnerButton from "../atoms/SpinnerButton";
import XLParagraph from "../atoms/XLParagraph";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);

  const [changePassword, { isLoading, isError, error }] =
    useChangePasswordMutation();

  const handleChangePassword = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const data = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };

      const result = await changePassword(data).unwrap();

      if (result?.statusCode == 200) {
        toast.success(
          "Great job! Your password has been updated successfully."
        );
        setSubmitting(false);
        resetForm();
      }
    } catch (error: any) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw Error(error);
    }
  };

  return (
    <Card className="p-5 flex flex-col gap-5">
      <XLParagraph className="font-bold text-primary">
        CHANGE PASSWORD
      </XLParagraph>
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
        onSubmit={handleChangePassword}
        initialValues={changePasswordInitialValues}
        validationSchema={changePasswordValidationSchema}
      >
        {({ isSubmitting }) => (
          <fieldset disabled={isLoading || isSubmitting}>
            <Form className="flex flex-col gap-5">
              <InputField
                title="Old Password"
                name="oldPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Current Password"
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                showIcon
              />
              <InputField
                title="new Password"
                name="newPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                showPassword={showNewPassword}
                setShowPassword={setNewShowPassword}
                showIcon
              />
              <InputField
                title="confirm new Password"
                name="confirmPassword"
                type={showNewPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                showPassword={showNewPassword}
                setShowPassword={setNewShowPassword}
                showIcon
              />
              <div className="flex justify-end">
                <SpinnerButton
                  isLoading={isLoading || isSubmitting}
                  title="Save Changes"
                  className="w-full sm:w-36 "
                />
              </div>
            </Form>
          </fieldset>
        )}
      </Formik>
    </Card>
  );
};

export default ChangePassword;
