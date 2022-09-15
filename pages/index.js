import Counter from "~/components/Counter";

export async function getServerSideProps() {
    const res = await fetch("https://catfact.ninja/fact");
    return { props: await res.json() };
}

function Home(props) {
    return (
        <>
            <div className="flex justify-center items-center w-screen h-screen">
                <Counter />
            </div>
            <div className="fixed bottom-0 left-0">
                <p>Random cat fact: {props.fact}</p>
            </div>
        </>
    );
}

export default Home;
