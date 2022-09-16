function About() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="font-nunito font-bold text-3xl">
                    About
                </h1>
                <hr className="mt-1" />
            </div>
            <div className="flex flex-col gap-6 font-source text-2xl">
                <div>
                    <span>Cat Avatar Generator is a free and </span>
                    <a
                        className="underline underline-offset-2"
                        href="https://github.com/cheeze2000/cat-avatar-generator"
                        target="_blank"
                        rel="noreferrer"
                    >
                        open-source
                    </a>
                    <span> API based on the </span>
                    <a
                        className="underline underline-offset-2"
                        href="https://www.peppercarrot.com/extras/html/2016_cat-generator/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        original version
                    </a>
                    <span>.</span>
                </div>
                <div>
                    <span>The artworks used in the API are designed by </span>
                    <a
                        className="underline underline-offset-2"
                        href="https://www.davidrevoy.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        David Revoy
                    </a>
                    <span> and licensed under a </span>
                    <a
                        className="underline underline-offset-2"
                        href="https://creativecommons.org/licenses/by/4.0/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Creative Commons Attribution 4.0 International license
                    </a>
                    <span>.</span>
                </div>
            </div>
        </div>
    );
}

export default About;
