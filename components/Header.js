import Image from "next/image";
import Link from "next/link";

function Header() {
    return (
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-3 sm:gap-0">
            <Link href="/">
                <a className="relative w-24 sm:w-32 aspect-square">
                    <Image
                        src="/logo.png"
                        alt="Cat avatar generator logo"
                        layout="fill"
                        priority="true"
                    />
                </a>
            </Link>
            <div className="flex flex-col justify-center font-nunito">
                <div className="font-bold text-2xl sm:text-4xl text-center text-pcorange">
                    Cat Avatar Generator
                </div>
                <div className="text-center text-sm sm:text-base">
                    <span>by </span>
                    <a
                        className="hover:underline underline-offset-2"
                        href="https://www.davidrevoy.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        David Revoy
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
