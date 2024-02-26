import { DoctorsPosts } from "../data/data";
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
        <button className="text-2xl font-semibold w-fit items-end ml-auto m-10">new post</button>
        {doctorsPosts}
    </div>
  )
}

export default Posts