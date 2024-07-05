import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Paginator from "../Components/Paginator";
import useCustomQuery from "../hooks/useCustomQuery";

interface IProps {}

const MedicalHistory: React.FC<IProps> = ({}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const token = Cookies.get("token");

  const { isLoading, data, error } = useCustomQuery({
    queryKey: [`patients/${id}/prescriptions/${page}/${limit}`],
    url: `patients/${id}/prescriptions?page=${page}&limit=${limit}`,
    config: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  console.log(data);

  useEffect(() => {
    if (error) {
      const errorObj: any = error;
      setErrorMsg(
        errorObj.response?.data?.message || "An unexpected error occurred"
      );
    } else {
      setErrorMsg(null);
    }
  }, [error]);

  const renderPrescriptions = () => {
    if (data?.data?.prescriptions?.length) {
      return (
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8 w-full max-w-screen-xl mx-auto">
            {data?.data?.prescriptions.map((prescription: any) => (
              <div
                className="relative w-72 mx-auto rounded-lg overflow-hidden border border-primary bg-white transform transition-all duration-300 hover:scale-105 p-6"
                key={prescription?._id}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-cairo text-primary">
                    Prescription
                  </h3>
                  <p className="text-sm text-gray-500">
                    {new Date(prescription?.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <hr className="my-2 border-t border-gray-300" />
                <div className="mb-2">
                  <p className="font-cairo text-primary">Doctor:</p>
                  <p className="text-gray-800">
                    {prescription?.doctor?.englishFullName || "MSS Doctor"}
                  </p>
                </div>
                <div className="mb-2">
                  <p className="font-cairo text-primary">Specialization:</p>
                  <p className="text-gray-800">
                    {prescription?.doctor?.specialization || "N/A"}
                  </p>
                </div>
                <div className="mb-2">
                  <p className="font-cairo text-primary">Disease:</p>
                  <p className="text-gray-800">{prescription?.diseases}</p>
                </div>
                <div className="mb-2">
                  <p className="font-cairo text-primary">Diagnosis:</p>
                  <p className="text-gray-800">{prescription?.diagnose}</p>
                </div>
                <div>
                  <p className="font-cairo text-primary">Medicines:</p>
                  <ul className="list-disc list-inside text-gray-800">
                    {prescription?.medicines.map(
                      (medicine: any, index: number) => (
                        <li key={index}>
                          {medicine?.name} - {medicine?.time}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-center mt-8 text-gray-600">
          No prescriptions found.
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center relative px-5 py-10">
      <button
        className="absolute top-4 left-4 bg-primary text-white rounded-md px-3 py-2 hidden md:block"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      <div className="w-full max-w-7xl p-4">
        {isLoading && (
          <div className="text-2xl font-bold text-primary">Loading...</div>
        )}
        {!isLoading && errorMsg && (
          <div className="text-2xl font-bold text-red-500">{errorMsg}</div>
        )}
        {!isLoading && !errorMsg && renderPrescriptions()}
        {!isLoading && (
          <div className="flex justify-between items-center mt-4">
            <Paginator
              page={page}
              total={data?.data?.totalPages || 1}
              isLoading={isLoading}
              onClickPrev={() => setPage((prev) => Math.max(prev - 1, 1))}
              onClickNext={() => setPage((prev) => prev + 1)}
            />
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="border-2 rounded-md border-primary p-1 ml-2"
            >
              <option value={10}>10</option>
              <option value={50}>50</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalHistory;
