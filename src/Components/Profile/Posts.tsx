import React, { useState } from "react";
import Modal from "../ui/Modal";
import useCustomQuery from "../../hooks/useCustomQuery";
import Cookies from "js-cookie";
import { createPost } from "../../services/profile";
import Post from "./Post";

const Posts = () => {
    const [isNewPostOpen, setIsNewPostOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [images, setImages] = useState<FileList | null>(null);
    const [queryVersion, setQueryVersion] = useState(1);

    const doctor = Cookies.get("doctor");
    const id = doctor ? JSON.parse(doctor)._id : "";

    const { isLoading, data } = useCustomQuery({
        queryKey: [`doctor/${id}/posts`, `${queryVersion}`],
        url: `doctors/${id}/posts`,
    });
    console.log(data);

    const onCloseModal = () => {
        setIsNewPostOpen(false);
    };

    const onOpenModal = () => {
        setIsNewPostOpen(true);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleImagesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImages(event.target.files);
    }

    const handleAddPost = async () => {
        try {
            const res = await createPost(description, images || new FileList());
            console.log(res);
            onCloseModal();
            setQueryVersion(prev => prev + 1);
        } catch (err) {
            console.log(err)
        }
    }

    const doctorsPosts = data?.data?.posts.map((post: any) => (
        <Post key={post._id} description={post.description} images={post.images} />
    ));

    return (
        <div className="w-full flex flex-col items-center gap-4">
            <button
                className="rounded-full border-2 border-primary bg-gradient-to-br from-blue-950 to-cyan-900 shadow-md hover:shadow-lg text-white py-2 px-20 text-xl font-semibold w-fit md:ml-auto m-10"
                onClick={onOpenModal}
            >
                New Post
            </button>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="flex flex-col gap-4 items-center p-5">
                    {doctorsPosts?.length > 0 ? doctorsPosts : <p>No posts yet</p>}
                </div>
            )}

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
                        type="file"
                        placeholder="Images"
                        className="rounded-lg border border-gray-300 p-2"
                        multiple
                        onChange={handleImagesChange}
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
