import StoryCard from "@/components/StoryCard";

const stories = [
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/k2j"
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"
    },
]

function Stories() {
    return (
        <div className={"flex justify-center space-x-3 mx-auto"}>
            {stories.map((story, index) => (
                <StoryCard name={story.name} src={story.src} profile={story.profile} key={index}/>
            ))}
        </div>
    )
}

export default Stories;
