import Image from "next/image";
import { useState } from "react";

function Demo() {
    const [showImage, toggleImage] = useState(false);
    const [image, setImage] = useState("");
    const [tempImage, setTempImage] = useState("");

    function submit(event) {
        event.preventDefault();

        const name = encodeURIComponent(tempImage);
        if (name.trim().length > 0) {
            toggleImage(true);
            setImage(name);
        }
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
                    onInput={e => setTempImage(e.target.value)}
                />
                <button className="px-6 py-2 mx-auto w-fit text-xl text-white bg-pcorange rounded">
                    Generate
                </button>
            </form>
            {
                showImage && (
                    <div className="relative mx-auto max-w-[256px] aspect-square">
                        <img
                            src={`/api/cat?name=${image}`}
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
