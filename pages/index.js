import About from "~/components/About";
import Demo from "~/components/Demo";
import Header from "~/components/Header";
import Usage from "~/components/Usage";

function Home() {
    return (
        <div className="flex flex-col gap-12 max-w-screen-sm min-h-screen p-6 mx-auto bg-white">
            <Header />
            <Demo />
            <Usage />
            <About />
        </div>
    );
}

export default Home;
