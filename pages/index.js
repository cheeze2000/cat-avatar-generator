import Demo from "~/components/Demo";
import Header from "~/components/Header";

function Home() {
    return (
        <div className="flex flex-col gap-12 max-w-screen-sm min-h-screen p-6 mx-auto bg-white">
            <Header />
            <Demo />
        </div>
    );
}

export default Home;
