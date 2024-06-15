import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import useCustomQuery from "../../hooks/useCustomQuery";
import Paginator from '../Paginator';

interface IProps {}

const MedicalHistory = ({}: IProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const token = Cookies.get('token');

  const { isLoading, data, error } = useCustomQuery({
    queryKey: [`patients/${id}/prescriptions`],
    url: `patients/${id}/prescriptions?page=${page}&limit=${limit}`,
    config: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  });

  useEffect(() => {
    if (error) {
      const errorObj: any = error;
      setErrorMsg(errorObj.response?.data?.message || 'An unexpected error occurred');
    } else {
      setErrorMsg(null);
    }
  }, [error]);

  console.log(data);

  const renderPrescriptions = () => {
    if (data?.data?.prescriptions?.length) {
      return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
          {data.data.prescriptions.map((prescription: any) => (
            <div className='border p-3 flex flex-col gap-3' key={prescription._id}>
              <div className='flex gap-5'>
                <p>Doctor: {prescription.doctor.englishFullName}</p>
                <p>Specialization: {prescription.doctor.specialization}</p>
              </div>
              <div className='flex gap-5'>
                <p>Date: {prescription.createdAt}</p>
              </div>
              <div className='flex gap-5'>
                <p>Disease: {prescription.diseases}</p>
                <p>Diagnosis: {prescription.diagnose}</p>
              </div>
              Medicines:
              <ul className='list-disc list-inside gap-3'>
                {prescription.medicines.map((medicine: any, index: number) => (
                  <li key={index} className='flex'>
                    {medicine.name} - {medicine.time}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else {
      return <div>No prescriptions found</div>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      <button
        className="bg-primary text-white p-2 rounded-md absolute top-4 left-4"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
      {isLoading ? (
        <div className="text-2xl font-bold text-primary">Loading...</div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          {errorMsg ? (
            <div className="text-2xl font-bold text-red-500">{errorMsg}</div>
          ) : (
            <>
            {renderPrescriptions()}
            <div className='mt-5 flex'>
            <Paginator 
              page={page} 
              pageCount={limit}
              total={data.data.totalPages}
              isLoading={isLoading}
              onClickPrev={() => setPage(page - 1)}
              onClickNext={() => setPage(page + 1)}
              />
              <select
                className="border-2 rounded-md border-primary p-1"
                value={limit}
                onChange={(e) => setLimit(Number(e.target.value))}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
              </select>
            </div>

            </>
          )}
        </div>
      )}
    </div>
  );
};

export default MedicalHistory;
