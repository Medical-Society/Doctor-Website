import { IPostsDoctor } from "../../interfaces";
import { Link } from "react-router-dom";
import DropdownMenu, { MenuItem } from "../DropDownMenu";
import { useState } from "react";

interface PostProps extends IPostsDoctor {
  postId: string;
  onDelete: (postId: string) => void;
  onEdit: (postId: string, description: string, images: string[]) => void;
}

const Post = ({ description, images, postId, onDelete, onEdit }: PostProps) => {

  const [isExpanded, setIsExpanded] = useState(false);

 

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const trimmedDescription = description.length > 350 && !isExpanded 
    ? description.substring(0, 350) + "..." 
    : description;

  const handleDeletePost = () => {
    onDelete(postId);
  };

  const handleEditPost = () => {
    onEdit(postId, description, images);
  };

  const postMenuItems: MenuItem[] = [
    {
      type: "button",
      label: "Edit Post",
      onClick: handleEditPost,
    },
    {
      type: "button",
      label: "Delete Post",
      onClick: handleDeletePost,
    },
  ];

  return (
    <div className=" flex flex-col w-full h-[410px] p-5 gap-4 border rounded-3xl bg-white shadow-md items-center justify-between max-w-lg overflow-hidden ">
    <div className="flex justify-between w-auto  ml-auto ">
        <DropdownMenu 
          menuItems={postMenuItems}
          buttonClassName="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100"
          buttonLabel="&#8942;"
          itemClassName="w-full text-left px-4 py-2 cursor-pointer hover:bg-gray-100"
          menuClassName="w-40 bg-white border rounded-lg shadow-md z-10"
        >
          <span>&#8942;</span>
        </DropdownMenu>
      </div>

      <div className="flex flex-col w-full flex-grow ">
      <div className={`grid ${images.length === 1 ? 'flex justify-center' : 'grid grid-cols-2'} gap-4 w-full`}>
          {images.slice(0, 2).map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`post-${index}`}
                   className={`rounded-lg w-full h-40 object-cover`}
            />
          ))}
          {images.length > 3 && (
            <Link
              to={`/post/${postId}`}
              className="relative flex items-center justify-center rounded-lg bg-gray-200 cursor-pointer overflow-hidden "
            >
              <img
                src={images[3]}
                alt="post-3"
                className="absolute top-0 left-0 w-full h-full object-cover filter brightness-50"
              />
              <p className="relative text-white font-semibold text-2xl">
                +{images.length - 3} more
              </p>
            </Link> 
          )}
        </div>
        <p className={`text-sky-950  font-['Cairo'] overflow-hidden ${isExpanded ? 'text-sm' : ''}`}>
          {trimmedDescription}
          {description.length > 350 && (
            <span
              onClick={toggleReadMore}
              className="text-blue-500 cursor-pointer"
            >
              {isExpanded ? " Read Less" : " Read More"}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Post;
