"use client";

import { useGetProfileQuery } from "@/redux/features/profile/profileAPI";
import Container from "../atoms/Container";
import Spinner from "../atoms/Spinner";
import ChangePassword from "../molecules/ChangePassword";
import UpdateProfile from "../molecules/UpdateProfile";

const UserProfile = () => {
  const { data: profile, isLoading } = useGetProfileQuery({});
  return (
    <Container className="flex justify-center">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-5 min-w-full md:min-w-[672px]">
          <UpdateProfile profile={profile} />
          <ChangePassword />
        </div>
      )}
    </Container>
  );
};

export default UserProfile;
