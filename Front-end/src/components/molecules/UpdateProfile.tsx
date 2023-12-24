import { updateProfileValidationSchema } from "@/InitialValuesAndValidationSchema/updateProfileValidationSchema";
import EditIcon from "@/assets/svgs/EditIcon";
import { useUpdateProfileMutation } from "@/redux/features/profile/profileAPI";
import { Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import Error from "../atoms/Error";
import InputField from "../atoms/InputFeild";
import SpinnerButton from "../atoms/SpinnerButton";

interface UpdateProfileProps {
  profile: {
    data: {
      name: string;
      email: string;
    };
  };
}

const UpdateProfile: React.FC<UpdateProfileProps> = ({ profile }) => {
  const [isEdit, setIsEdit] = useState(false);

  const initialValues = {
    name: profile?.data.name,
    email: profile?.data.email,
  };

  const [updateProfile, { isLoading, error, isError }] =
    useUpdateProfileMutation();

  const handleSubmit = async ({ name, email }: any, { setSubmitting }: any) => {
    try {
      const updatedData: { [key: string]: string } = {};

      if (profile?.data.name != name) {
        updatedData.name = name;
      }

      if (profile?.data.email != email) {
        updatedData.email = email;
      }

      const result = await updateProfile(updatedData)?.unwrap();

      if (result?.statusCode == 200) {
        toast.success("Profile updated successfully!");
        setSubmitting(false);
        setIsEdit(!isEdit);
      }
      setSubmitting(false);
    } catch (error: any) {
      toast.error("Oops! Something went wrong. Please try again.");
      throw Error(error);
    }
  };

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    // {isError && <Error error={"Oops! Something went wrong."} />}
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <p className="click-animation font-bold text-4xl bg-primary text-accent border border-secondary rounded-full w-20 h-20 flex justify-center items-center uppercase">
          M
        </p>
        <button onClick={handleEdit}>
          <EditIcon />
        </button>
      </div>

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={updateProfileValidationSchema}
      >
        {({ isSubmitting }) => (
          <fieldset disabled={isSubmitting || isLoading}>
            <Form className="flex flex-col gap-5">
              <InputField name="name" type="text" disabled={!isEdit} />
              <InputField name="email" type="email" disabled={!isEdit} />
              {isEdit && (
                <div className="flex justify-end">
                  <SpinnerButton
                    isLoading={isSubmitting || isLoading}
                    title="Save Changes"
                    className="w-full sm:w-36"
                  />
                </div>
              )}
            </Form>
          </fieldset>
        )}
      </Formik>
    </div>
  );
};

export default UpdateProfile;
