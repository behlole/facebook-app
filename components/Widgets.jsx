import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid";
import {SearchIcon} from "@heroicons/react/outline";
import {Contact} from "@/components/Contact";

const contacts = [{
    name: "Elon Musk", src: "https://links.papareact.com/4zn",
}, {
    name: "Jeff Bezos", src: "https://links.papareact.com/k2j",
}, {
    name: "Mark Zuckerberg", src: "https://links.papareact.com/xql",
}, {
    name: "Bill Gates", src: "https://links.papareact.com/4u4",
},]

export function Widgets() {
    return (
        <div className={"hidden lg:flex flex-col w-60 p-2 mt-5"}>
            <div className={"flex justify-between items-center text-gray-500 mb-5"}>
                <h2 className={"text-xl"}>Contacts</h2>
                <div className={"flex space-x-2"}>
                    <VideoCameraIcon className={"h-6"}/>
                    <SearchIcon className={"h-6"}/>
                    <DotsHorizontalIcon className={"h-6"}/>
                </div>
            </div>
            {contacts.map((contact, index) => (
                <Contact
                    key={index}
                    name={contact.name}
                    src={contact.src}
                />
            ))}
        </div>)
}
