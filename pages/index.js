import Head from "next/head";

import About from "~/components/About";
import Build from "~/components/Build";
import Demo from "~/components/Demo";
import Header from "~/components/Header";
import Usage from "~/components/Usage";

function Home() {
    return (
        <>
            <Head>
                <title>Cat Avatar Generator</title>
            </Head>
            <div className="flex flex-col gap-12 max-w-screen-sm min-h-screen p-6 mx-auto bg-white">
                <Header />
                <Demo />
                <Build />
                <Usage />
                <About />
            </div>
        </>
    );
}

export default Home;
