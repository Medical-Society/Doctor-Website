import { useState } from "react";
import { IPostsdoctor } from "../../interfaces";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Post = ({ description, images }: IPostsdoctor) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { doctor } = useSelector((state: RootState) => state.auth);
  const { avatar, englishFullName } = doctor || {};


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDeletePost = () => {
    // Add logic to delete post
    console.log("Post deleted");
  };

  const handleEditPost = () => {
    // Add logic to edit post
    console.log("Edit post");
  };

  return (
    <div className="flex flex-col w-full p-5 gap-4 border rounded-3xl bg-blue-50 items-center justify-center">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <img
            src={avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          <p className="text-sm font-semibold">{englishFullName}</p>
        </div>
        <div className="relative">
          <div
            className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span>&#8942;</span> {/* Three dots character */}
          </div>
          {showDropdown && (
            <div className="absolute top-8 right-0 w-40 bg-white border rounded-lg shadow-md">
              <div className="py-1">
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={handleDeletePost}
                >
                  Delete Post
                </div>
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={handleEditPost}
                >
                  Edit Post
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
          <p className="text-sky-950 text-lg font-semibold overflow-hidden whitespace-normal">
            {description}
          </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images
            .slice(0, 3)
            .map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`post-${index}`}
                className="rounded-lg max-w-80 object-cover"
              />
            ))}
          {images.length > 3 && (
            <Link 
              to="/post" 
              className="bg-gray-200 flex rounded-lg cursor-pointer relative">
              <img src={images[3]} alt="post-3" className="rounded-lg max-w-80 object-cover backdrop:filter brightness-50" />
              <p className="absolute text-white font-semibold text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                +{images.length - 3} more
              </p>
            </Link>
          )}
        </div>

      </div>
    </div>
  );
};

export default Post;
