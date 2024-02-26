 
import { IPostsDoc } from "../interfaces";

const PostsDoc = ({postTitle,postContent}:IPostsDoc) => {
  return (
    <div>
      <button className="absolute top-72 right-12 transform -translate-y-1/2 rounded-full border-2 border-primary bg-gradient-to-br from-blue-950 to-cyan-900 shadow-md hover:shadow-lg text-white py-3 px-20">
        New Post
      </button>

           <div className="relative top-72 border w-80 rounded-lg p-2" >
             <div className="border m-2 p-10 bg-sky-200 rounded-lg text-center text-sky-950 font-medium text-xl">
              <h2>{postTitle}</h2>
             </div>
            <p className="text-sky-950 ml-2">
              {postContent}
            </p> 
           </div>

    </div> 
  );
}

export default PostsDoc;