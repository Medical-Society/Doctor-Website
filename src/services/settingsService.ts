import axiosInstance from "./axios.config";
import Cookies from "js-cookie";

export const updatePassword = async (
  oldPassword: string,
  newPassword: string
) => {
  const token = Cookies.get("token");
  const res = await axiosInstance.patch(
    `doctors/password`,
    {
      oldPassword,
      newPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};

export const updateAvailableTime = async (availableTime: any) => {
  const doctor = JSON.parse(Cookies.get("doctor") || "{}");
  console.log(doctor);
  const token = Cookies.get("token");
  const doctorId = doctor?._id;
  // console.log("token ", token);
  // console.log("doctorId ", doctorId);
  const res = await axiosInstance.patch(
    `doctors/${doctorId}/available-times`,
    {
      availableTime,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return res.data;
};
