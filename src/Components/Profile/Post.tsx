import { IPostsDoctor } from "../../interfaces";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import DropdownMenu, { MenuItem } from "../DropDownMenu";

interface PostProps extends IPostsDoctor {
  postId: string;
  onDelete: (postId: string) => void;
  onEdit: (postId: string, description: string, images: string[]) => void;
}

const Post = ({ description, images, postId, onDelete, onEdit }: PostProps) => {
  const { doctor } = useSelector((state: RootState) => state.auth);
  const { avatar, englishFullName } = doctor || {};

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
    <div className="flex flex-col w-full p-5 gap-4 border rounded-3xl bg-white shadow-md items-center justify-center max-w-lg">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <img
            src={avatar}
            alt="Avatar"
            className="w-10 h-10 rounded-full mr-2"
          />
          <p className="text-sm font-semibold">{englishFullName}</p>
        </div>

        <DropdownMenu 
          menuItems={postMenuItems}
          buttonClassName="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-300"
          buttonLabel="&#8942;"
          itemClassName="w-full text-left px-4 py-2 cursor-pointer hover:bg-gray-100"
          menuClassName="w-40 bg-white border rounded-lg shadow-md z-10"
        >
          <span>&#8942;</span>
        </DropdownMenu>

      </div>

      <div className="flex flex-col gap-4 w-full">
        <p className="text-sky-950 text-lg font-semibold overflow-hidden whitespace-normal">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {images.slice(0, 3).map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`post-${index}`}
              className="rounded-lg w-full h-40 object-cover"
            />
          ))}
          {images.length > 3 && (
            <Link
              to={`/post/${postId}`}
              className="relative flex items-center justify-center rounded-lg bg-gray-200 cursor-pointer overflow-hidden"
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
      </div>
    </div>
  );
};

export default Post;
