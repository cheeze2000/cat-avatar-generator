function Usage() {
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="font-nunito font-bold text-3xl">
                    API Endpoint
                </h1>
                <hr className="mt-1" />
            </div>
            <div className="font-inconsolata text-2xl">
                /api/cat?name=Waffles
            </div>
        </div>
    );
}

export default Usage;
