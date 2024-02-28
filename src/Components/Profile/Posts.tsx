import { DoctorsPosts } from "../../data/data";
import Post from "./Post";

interface IProps {

}

const Posts = ({}: IProps) => {

    const doctorsPosts = DoctorsPosts.map((post,index) => {
        return (
            <Post
                key={index}
                firstUrl={post.firstUrl}
                secondUrl={post.secondUrl}
                description={post.description}
            />
        )});
  return (
   <div className="w-full flex flex-col items-center gap-4">
        <button className="rounded-full border-2 border-primary bg-gradient-to-br from-blue-950 to-cyan-900 shadow-md hover:shadow-lg text-white py-2 px-20 text-xl font-semibold w-fit md:ml-auto m-10">new post</button>
        {doctorsPosts}
    </div>
  )
}

export default Posts