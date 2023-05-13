import {useSession} from "next-auth/react";
import Image from "next/image";
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {useRef, useState} from "react";
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import {db, storage} from "@/firebase";
import {ref, uploadString, getDownloadURL} from 'firebase/storage';

function InputBox() {
    const {data} = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null)

    const sendPost = async (event) => {
        event.preventDefault();
        if (!inputRef.current.value) return;

        try {
            const docRef = await addDoc(collection(db, 'posts'), {
                message: inputRef.current.value,
                name: data?.user.name,
                email: data?.user.email,
                image: data?.user?.image,
                timestamp: serverTimestamp()
            });

            if (imageToPost) {
                const storageRef = ref(storage, `posts/${docRef.id}`);
                await uploadString(storageRef, imageToPost, 'data_url');
                const imageURL = await getDownloadURL(storageRef);

                const documentRef = doc(db, 'posts', docRef.id);
                await updateDoc(documentRef, {postsImage: imageURL});
            }

            removeImage();
            inputRef.current.value = '';
        } catch (error) {
            // Handle any errors that occurred
            console.error(error);
        }
    };


    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }
    }
    const removeImage = (event) => {
        setImageToPost(null);
    }
    return (
        <div className={"bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6"}>
            <div className={"flex flex-col md:flex-row space-x-4 p-4 items-center"}>
                <Image
                    className={"rounded-full"}
                    src={data?.user?.image}
                    width={40}
                    height={40}
                    layout={"fixed"}
                    alt={"User Image"}/>
                <form className={"flex flex-1"}>
                    <input
                        ref={inputRef}
                        className={"rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"}
                        type={"text"}
                        placeholder={`What's on your mind, ${data?.user.name}`}
                    />
                    <button
                        hidden
                        type={"submit"}
                        onClick={sendPost}
                    >Submit
                    </button>
                </form>
                {imageToPost && (
                    <div onClick={removeImage}
                         className={"flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"}>
                        <img
                            className={"object-contain h-10"}
                            src={imageToPost}
                            alt={"Image"}
                        />
                        <p className={"text-xs text-red-500 text-center"}>Remove</p>
                    </div>
                )}
            </div>
            <div className={"flex justify-evenly p-3 border-t"}>
                <div className={"inputIcon"}>
                    <VideoCameraIcon
                        className={"h-7 text-red-500"}
                    />
                    <p className={"hidden md:flex text-xs sm:text-sm xl:text-base"}>Live Video</p>
                </div>
                <div onClick={() => filePickerRef.current.click()} className={"inputIcon"}>
                    <CameraIcon
                        className={"h-7 text-green-400"}
                    />
                    <input
                        ref={filePickerRef}
                        hidden
                        type={"file"}
                        onChange={addImageToPost}/>
                    <p className={"hidden md:flex text-xs sm:text-sm xl:text-base"}>Photo/Video</p>
                </div>
                <div className={"inputIcon"}>
                    <EmojiHappyIcon
                        className={"h-7 text-yellow-300"}
                    />
                    <p className={"hidden md:flex text-xs sm:text-sm xl:text-base"}>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox;
