import React, { useState } from "react";
import { DoctorsPosts } from "../../data/data";
import Post from "./Post";
import Modal from "../ui/Modal";

interface IProps {}

const Posts = ({}: IProps) => {
    const [isNewPostOpen, setIsNewPostOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [posts, setPosts] = useState(DoctorsPosts); // State for storing posts

    const onCloseModal = () => {
        setIsNewPostOpen(false);
    };

    const onOpenModal = () => {
        setIsNewPostOpen(true);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageUrl(event.target.value);
    };

    const generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    const handleAddPost = () => {
        // Create a new post object with the description, images, and _id
        const newPost = {
            _id: generateUniqueId() as string, // Cast the generated unique id to string
            description: description,
            images: [imageUrl]
        };

        // Update the state with the new post
        setPosts([newPost, ...posts]);

        // Close the modal
        onCloseModal();
    };

    const doctorsPosts = posts.map((post, index) => {
        return (
            <Post key={index} images={post.images} description={post.description} />
        );
    });

    return (
        <div className="w-full flex flex-col items-center gap-4">
            <button
                className="rounded-full border-2 border-primary bg-gradient-to-br from-blue-950 to-cyan-900 shadow-md hover:shadow-lg text-white py-2 px-20 text-xl font-semibold w-fit md:ml-auto m-10"
                onClick={onOpenModal}
            >
                New Post
            </button>
            {doctorsPosts}

            <Modal isOpen={isNewPostOpen} closeModal={onCloseModal} title="New Post">
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Description"
                        className="rounded-lg border border-gray-300 p-2"
                        value={description}
                        onChange={handleDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Image URL"
                        className="rounded-lg border border-gray-300 p-2"
                        value={imageUrl}
                        onChange={handleImageUrlChange}
                    />
                    <button
                        type="button"
                        className="rounded-full border-2 border-primary bg-gradient-to-br from-blue-950 to-cyan-900 shadow-md hover:shadow-lg text-white py-2 px-10 text-xl font-semibold w-fit md:ml-auto m-2"
                        onClick={handleAddPost}
                    >
                        Add Post
                    </button>
                </form>
            </Modal>
        </div>
    );
};

export default Posts;
