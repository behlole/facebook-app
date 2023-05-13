import {useSession} from "next-auth/react";
import Image from "next/image";
import {EmojiHappyIcon} from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {useRef} from "react";
import firebase from "firebase/app";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import {db} from "@/firebase";

function InputBox() {
    const {data} = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);

    const sendPost = async (event) => {
        event.preventDefault();
        if (!inputRef.current.value) return;
        addDoc(collection(db, 'posts'), {
            message: inputRef.current.value,
            name: data.user.name,
            email: data.user.email,
            image: data.user.image,
            timestamp: serverTimestamp()
        });
        inputRef.current.value = ""
    }

    const addImageToPost = (event) => {

    }

    return (
        <div className={"bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6"}>
            <div className={"flex space-x-4 p-4 items-center"}>
                <Image
                    className={"rounded-full"}
                    src={data.user.image}
                    width={40}
                    height={40}
                    layout={"fixed"}
                    alt={"User Image"}/>
                <form className={"flex flex-1"}>
                    <input
                        ref={inputRef}
                        className={"rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"}
                        type={"text"}
                        placeholder={`What's on your mind, ${data.user.name}`}
                    />
                    <button
                        hidden
                        type={"submit"}
                        onClick={sendPost}
                    >Submit
                    </button>
                </form>
            </div>
            <div className={"flex justify-evenly p-3 border-t"}>
                <div className={"inputIcon"}>
                    <VideoCameraIcon
                        className={"h-7 text-red-500"}
                    />
                    <p className={"text-xs sm:text-sm xl:text-base"}>Live Video</p>
                </div>
                <div className={"inputIcon"}>
                    <CameraIcon
                        className={"h-7 text-green-400"}
                    />
                    <input
                        ref={filePickerRef}
                        hidden
                        type={"file"}
                        onClick={addImageToPost}/>
                    <p className={"text-xs sm:text-sm xl:text-base"}>Photo/Video</p>
                </div>
                <div className={"inputIcon"}>
                    <EmojiHappyIcon
                        className={"h-7 text-yellow-300"}
                    />
                    <p className={"text-xs sm:text-sm xl:text-base"}>Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox;
