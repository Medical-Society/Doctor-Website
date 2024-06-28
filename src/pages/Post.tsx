import { useParams } from 'react-router-dom';
import useCustomQuery from '../hooks/useCustomQuery';
import Cookies from "js-cookie";
import { IDoctor } from '../interfaces';

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const doctor: IDoctor = Cookies.get("doctor") ? JSON.parse(Cookies.get("doctor") || "{}") : {};
  const doctorID = doctor?._id;

  const { isLoading, data } = useCustomQuery({
    queryKey: [`doctor/${doctorID}/posts`],
    url: `doctors/${doctorID}/posts`,
  });

  if (isLoading) return <p>Loading...</p>;

  const post = data?.data.posts.find((post: any) => post._id === id);
  
  if (!post) return <p>Post not found</p>;

  return (
    <div className="w-full flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="w-full bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <img src={doctor?.avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-2" />
          <div>
            <p className="text-sm font-semibold">{doctor?.englishFullName}</p>
            <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-sky-950 mb-4">{post.description}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {post.images.map((url: string, index: number) => (
            <img key={index} src={url} alt={`post-${index}`} className="rounded-lg w-1/2 object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
