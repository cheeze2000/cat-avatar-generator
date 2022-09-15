import Image from "next/image";
import { useState } from "react";

function Demo() {
    const [image, setImage] = useState(false);

    function submit(event) {
        event.preventDefault();
        setImage(true);
    }

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="font-nunito font-bold text-3xl">
                    Try it out!
                </h1>
                <hr className="mt-1" />
            </div>
            <form
                onSubmit={submit}
                className="flex flex-col sm:flex-row gap-6 font-source"
            >
                <input
                    className="grow px-3 py-2 text-2xl rounded border border-black"
                    type="text"
                    placeholder="Cat's name"
                />
                <button className="px-6 py-2 mx-auto w-fit text-xl text-white bg-pcorange rounded">
                    Generate
                </button>
            </form>
            {
                image && (
                    <div className="relative mx-auto max-w-[256px] aspect-square">
                        <Image
                            src="/logo.png"
                            alt="generated cat avatar"
                            width="256"
                            height="256"
                        />
                    </div>
                )
            }
        </div>
    );
}

export default Demo;
