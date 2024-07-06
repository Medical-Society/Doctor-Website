import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Modal from "../ui/Modal";
import { updateAvatar } from "../../services/profile";
import toast from "react-hot-toast";
import { updateDoctor } from "../../app/features/authSlice";

interface IProps {}

const DoctorCard = ({}: IProps) => {
  const dispatch = useDispatch();
  const { doctor } = useSelector((state: RootState) => state.auth);
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const {
    englishFullName,
    clinicAddress,
    specialization,
    about,
    avatar,
    availableTime,
  } = doctor || {};
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSaveImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);
    try {
      setLoading(true);
      const res = await updateAvatar(formData);
      const doctor = res.data;
      dispatch(updateDoctor(doctor));
      toast.success("Image updated successfully");
    } catch (error) {
      toast.error("Failed to update image");
    } finally {
      setImage(null);
      setIsModalOpen(false);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:pl-24 items-center gap-6 md:flex-row w-full p-5 rounded-lg">
      <div>
        <img
          src={avatar}
          alt="Doctor Image"
          className= "w-auto h-64 border-2 mt-2"
        />
        <button
          onClick={handleOpenModal}
          className="text-blue-500 underline mt-2"
        >
          Update Image
        </button>
      </div>
      <div className="flex flex-col gap-2 w-full md:w-2/5">
        <h1 className="text-[#060B73] font-cairo text-2xl md:text-4xl text-center md:text-left">
          Dr. {englishFullName}
        </h1>
        <h4 className="font-medium font-cairo text-lg md:text-2xl text-gray-700 text-center md:text-left">
          {specialization}
        </h4>
        <p className="text-md md:text-lg text-gray-600 text-center md:text-left font-cairo">
          {about}
        </p>
        <div className="mt-4">
          <h4 className="font-medium font-cairo text-lg md:text-xl text-gray-700 text-center md:text-left">
            Clinic Address:
          </h4>
          <p className="text-md md:text-lg font-cairo text-gray-600 text-center md:text-left">
            {clinicAddress}
          </p>
        </div>
        <div className="mt-4">
          <h4 className="font-medium font-cairo text-lg md:text-xl text-gray-700 text-center md:text-left">
            Available Time:
          </h4>
          <div className="text-md md:text-lg font-cairo text-gray-600 text-center md:text-left">
            {Object.keys(availableTime?.weekdays || {}).map((day) => (
              <p key={day}>
                {day}: {availableTime?.weekdays[day].from.hour}:
                {availableTime?.weekdays[day].from.minute} -{" "}
                {availableTime?.weekdays[day].to.hour}:
                {availableTime?.weekdays[day].to.minute}
              </p>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={handleCloseModal}
        title="Update Image"
      >
        <h2 className="text-xl mb-4">Update Image</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSaveImage}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          />
          <button 
            className="p-2 bg-primary text-white rounded"
            disabled={loading}
          >
            {loading ? "Loading..." : "Save Image"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default DoctorCard;
