import React, { useState } from "react";
import Modal from "../ui/Modal";
import useCustomQuery from "../../hooks/useCustomQuery";
import Cookies from "js-cookie";
import { createPost, deletePost, updatePost } from "../../services/profile";
import Post from "./Post";
import toast from "react-hot-toast";

const Posts = () => {
  const [isNewPostOpen, setIsNewPostOpen] = useState(false);
  const [isEditPostOpen, setIsEditPostOpen] = useState(false);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<FileList | null>(null);
  const [initialImages, setInitialImages] = useState<string[]>([]);
  const [removedImages, setRemovedImages] = useState<string[]>([]);
  const [queryVersion, setQueryVersion] = useState(1);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [isAddPostLoading, setIsAddPostLoading] = useState(false);
  const [isEditPostLoading, setIsEditPostLoading] = useState(false);

  const doctor = Cookies.get("doctor");
  const id = doctor ? JSON.parse(doctor)._id : "";

  const { isLoading, data } = useCustomQuery({
    queryKey: [`doctor/${id}/posts`, `${queryVersion}`],
    url: `doctors/${id}/posts`,
  });

  const onCloseModal = () => {
    setIsNewPostOpen(false);
    setIsEditPostOpen(false);
    setDescription("");
    setImages(null);
    setInitialImages([]);
    setRemovedImages([]);
  };

  const onOpenNewPostModal = () => {
    setIsNewPostOpen(true);
  };

  const onOpenEditPostModal = (postId: string, postDescription: string, postImages: string[]) => {
    setEditingPostId(postId);
    setDescription(postDescription);
    setInitialImages(postImages);
    setIsEditPostOpen(true);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImages(event.target.files);
  };

  const handleAddPost = async () => {
    try {
      setIsAddPostLoading(true);
      await createPost(description, images || new FileList());
      onCloseModal();
      setQueryVersion((prev) => prev + 1);
      toast.success("Post added successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to add post");
    } finally {
        setIsAddPostLoading(false);
    }
  };

  const handleEditPost = async () => {
    if (!editingPostId) return;
    try {
      setIsEditPostLoading(true);
      await updatePost(editingPostId, description, images, removedImages);
      onCloseModal();
      setQueryVersion((prev) => prev + 1);
      toast.success("Post updated successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to update post");
    } finally {
        setIsEditPostLoading(false);
    }
  };

  const handleDeletePost = async (postId: string) => {
    try {
      await deletePost(postId);
      setQueryVersion((prev) => prev + 1);
      toast.success("Post deleted successfully");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete post");
    }
  };

  const handleRemoveInitialImage = (image: string) => {
    setInitialImages((prev) => prev.filter((img) => img !== image));
    setRemovedImages((prev) => [...prev, image]);
  };

  const doctorsPosts = data?.data?.posts.map((post: any) => (
    <Post
      key={post._id}
      postId={post._id}
      description={post.description}
      images={post.images}
      onDelete={handleDeletePost}
      onEdit={onOpenEditPostModal}
    />
  ));

  return (
    <div className="w-full flex flex-col items-center gap-6 relative py-8 px-6 rounded-lg shadow-lg">
      <button
        className="absolute font-cairo -top-4 right-4 bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg py-2 px-6 md:px-8 text-sm md:text-base font-semibold transition-all duration-200"
        onClick={onOpenNewPostModal}
      >
        New Post
      </button>
      {isLoading ? (
        <p className="text-gray-500">Loading...</p>
      ) : (
        <div className="flex flex-col md:grid md:grid-cols-3 gap-10 items-center w-full">
          {doctorsPosts?.length > 0 ? doctorsPosts : <p className="text-gray-500">No posts yet</p>}
        </div>
      )}

      <Modal isOpen={isNewPostOpen} closeModal={onCloseModal} title="New Post">
        <form className="flex flex-col gap-4 font-cairo">
          <div className="flex flex-col gap-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="multiple_files"
            >
              Upload multiple files
            </label>
            <input
              type="file"
              id="multiple_files"
              className="file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              multiple
              onChange={handleImagesChange}
            />
          </div>
          <button
            type="button"
            className="bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg py-2 px-6 md:px-8 text-sm md:text-base font-semibold transition-all duration-200"
            onClick={handleAddPost}
            disabled={isAddPostLoading}
          >
            {isAddPostLoading ? "Adding Post..." : "Add Post"}
          </button>
        </form>
      </Modal>

      <Modal isOpen={isEditPostOpen} closeModal={onCloseModal} title="Edit Post">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="description"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Description"
              className="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="multiple_files"
            >
              Upload multiple files
            </label>
            <input
              type="file"
              id="multiple_files"
              className="file:me-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              multiple
              onChange={handleImagesChange}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {initialImages.map((image) => (
              <div key={image} className="relative">
                <img
                  src={image}
                  alt="initial"
                  className="w-20 h-20 object-cover rounded"
                />
                <button
                  type="button"
                  className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  onClick={() => handleRemoveInitialImage(image)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="bg-blue-600 text-white rounded-full shadow-md hover:shadow-lg py-2 px-6 md:px-8 text-sm md:text-base font-semibold transition-all duration-200"
            onClick={handleEditPost}
            disabled={isEditPostLoading}
          >
            {isEditPostLoading ? "Updating Post..." : "Update Post"}
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Posts;
