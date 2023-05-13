import Image from "next/image";
import {FlagIcon, PlayIcon, SearchIcon, ShoppingCartIcon} from "@heroicons/react/outline";
import {BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon} from "@heroicons/react/solid";
import HeaderIcon from "@/components/HeaderIcon";
import {useSession, signIn, signOut} from "next-auth/react"

function Header() {
    const {data} = useSession();
    if (!data) {
        signIn()
    } else {
        return (
            <div className={"sticky top-0 z-50 bg-white flex items-center p-2 lg:px-x-5 shadow-md"}>
                <div className={"flex items-center"}>
                    <Image src="https://links.papareact.com/5me" width={40} height={40} layout={"fixed"}/>
                    <div className={"hidden md:flex ml-2 items-center rounded-full bg-gray-100 p-2"}>
                        <SearchIcon className={"h-6 text-gray-600"}/>
                        <input type={"text"} placeholder={"Search Facebook"}
                               className={" md:inline-flex  flex-shrink ml-2 items-center bg-transparent outline-none"}/>
                    </div>
                </div>
                <div className={"flex justify-center flex-grow"}>
                    <div className={"flex space-x-6 md:space-x-2"}>
                        <HeaderIcon Icon={HomeIcon} active={true}/>
                        <HeaderIcon Icon={FlagIcon} active={false}/>
                        <HeaderIcon Icon={PlayIcon} active={false}/>
                        <HeaderIcon Icon={ShoppingCartIcon} active={false}/>
                        <HeaderIcon Icon={UserGroupIcon} active={false}/>
                    </div>
                </div>
                <div className={"flex items-center sm:space-x-2 justify-end"}>
                    <Image
                        onClick={signOut}
                        src={data?.user?.image}
                        className={"rounded-full cursor-pointer"}
                        alt={"User Image"}
                        width={40}
                        height={40}
                        layout={"fixed"}
                    />
                    <p className={"hidden xl:inline-flex whitespace-nowrap font-semibold pr-3 "}>{data?.user.name}</p>
                    <ViewGridIcon className={"icon"}/>
                    <ChatIcon className={"icon"}/>
                    <BellIcon className={"icon"}/>
                    <ChevronDownIcon className={"icon"}/>
                </div>
            </div>
        );
    }
}

export default Header;
