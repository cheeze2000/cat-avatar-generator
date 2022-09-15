import Image from "next/image";

function Header() {
    return (
        <div className="flex justify-evenly">
            <div className="relative w-32 aspect-square">
                <Image
                    src="/logo.png"
                    alt="Cat avatar generator logo"
                    layout="fill"
                />
            </div>
            <div className="flex items-center px-3 font-nunito font-bold text-3xl sm:text-4xl text-center text-pcorange">
                Cat Avatar Generator
            </div>
        </div>
    );
}

export default Header;
