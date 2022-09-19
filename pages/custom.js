import Head from "next/head";

import Customiser from "~/components/Customiser";
import Header from "~/components/Header";

function Home() {
    return (
        <>
            <Head>
                <title>Build Your Own Cat | Cat Avatar Generator</title>
            </Head>
            <div className="flex flex-col gap-12 max-w-screen-sm min-h-screen p-6 mx-auto bg-white">
                <Header />
                <Customiser />
            </div>
        </>
    );
}

export default Home;
