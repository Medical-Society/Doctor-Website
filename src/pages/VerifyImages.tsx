import { useState } from "react";
import { uploadImages } from "../services/documentsApi";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const UploadDocuments = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get('token') ?? '';
  const navigate = useNavigate();
  const [idFrontImage, setIdFrontImage] = useState<File | null>(null);
  const [idBackImage, setIdBackImage] = useState<File | null>(null);
  const [graduationCertificateImage, setGraduationCertificateImage] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleIdFrontImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIdFrontImage(e.target.files[0]);
    }
  };

  const handleIdBackImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIdBackImage(e.target.files[0]);
    }
  };

  const handleGraduationCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGraduationCertificateImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idFrontImage || !idBackImage || !graduationCertificateImage) {
      toast.error("Please upload all required documents");
      return;
    }

    const formData = new FormData();
    formData.append("image", idFrontImage);
    formData.append("image", idBackImage);
    formData.append("image", graduationCertificateImage);

    try {
      setIsLoading(true);
      await uploadImages(formData, token);
      toast.success("Documents uploaded successfully");
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload documents");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-full mt-14 md:mt-0">
      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-primary text-3xl font-medium font-cairo mb-4">Upload Documents</h1>
        <div className="rounded-[9px] bg-gradient-to-r from-primary to-secondary p-0.5 w-4/5 max-w-3xl">
          <form className="flex flex-col bg-white rounded-[9px] py-4 px-5" onSubmit={handleSubmit}>
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-1">ID Front Image</label>
              <input
                type="file"
                name="idFrontImage"
                onChange={handleIdFrontImageChange}
                className="p-2 border rounded"
                disabled={isLoading}
              />
              {idFrontImage && (
                <img src={URL.createObjectURL(idFrontImage)} alt="ID Front Preview" className="mt-2 rounded shadow-md" />
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-1">ID Back Image</label>
              <input
                type="file"
                name="idBackImage"
                onChange={handleIdBackImageChange}
                className="p-2 border rounded"
                disabled={isLoading}
              />
              {idBackImage && (
                <img src={URL.createObjectURL(idBackImage)} alt="ID Back Preview" className="mt-2 rounded shadow-md" />
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-semibold mb-1">Graduation Certificate Image</label>
              <input
                type="file"
                name="graduationCertificateImage"
                onChange={handleGraduationCertificateChange}
                className="p-2 border rounded"
                disabled={isLoading}
              />
              {graduationCertificateImage && (
                <img
                  src={URL.createObjectURL(graduationCertificateImage)}
                  alt="Graduation Certificate Preview"
                  className="mt-2 rounded shadow-md"
                />
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-primary mt-4 p-2 text-white bg-blue-600 hover:bg-blue-700 rounded"
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
