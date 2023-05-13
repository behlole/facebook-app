import Image from 'next/image'

export function Post({
                         name,
                         email,
                         message,
                         image,
                         postImage,
                         timestamp
                     }) {
    return (
        <div className={"flex flex-col "}>
            <div className={"p-5 bg-white mt-5 rounded-t-xl shadow-sm"}>
                <div className={"flex items-center space-x-2"}>
                    <img src={image} alt={""} width={40} height={40}
                         className={"rounded-full"}
                    />
                    <div>
                        <p className={"font-medium"}>
                            {name}
                        </p>
                        <p className={"text-xs text-gray-400"}>
                            {timestamp?.toDate().toLocaleString().toLocaleString()}
                        </p>
                    </div>
                </div>
                <p className={"pt-4"}>
                    {message}
                </p>
            </div>
            {postImage && (
                <div className={"relative h-56 md:h-96 bg-white"}>
                    <Image
                        src={postImage}
                        objectFit={"cover"}
                        layout={"fill"}
                        alt={"post image"}/>
                </div>
            )}
            <div
                className={"flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t"}>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
