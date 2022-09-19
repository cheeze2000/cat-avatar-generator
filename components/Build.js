import Link from "next/link";

function Build() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="font-nunito font-bold text-3xl">
                    Build Your Own Cat
                </h1>
                <hr className="mt-1" />
            </div>
            <div className="font-source text-2xl">
                Not satisfied with the generator? You can always make your own!
            </div>
            <Link href="/custom">
                <a className="px-6 py-2 mx-auto w-fit font-source text-xl text-white bg-pcorange rounded">
                    Customise
                </a>
            </Link>
        </div>
    );
}

export default Build;
