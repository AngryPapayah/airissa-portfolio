function Home() {
    return (
        <>
            <section className="flex items-center justify-between p-16 max-w-6xl mx-auto">

                <div className="space-y-4">
                    <p className="text-lg text-accent">Airissa Vermond</p>

                    <h1 className="text-5xl font-bold">
                        Fullstack Developer
                    </h1>

                    <p className="max-w-md text-base-content/70">
                        I am a Creative Media and Game Technologies (CMGT) student
                        who enjoys combining creativity and technology to build
                        modern and interactive applications.
                    </p>

                    <button
                        className="mt-4 px-6 py-3 bg-secondary text-primary-content rounded-xl shadow hover:scale-105 transition">
                        View my projects
                    </button>
                </div>

                <div>
                    <img
                        src="/airissa-foto.jpg"
                        alt="Airissa"
                        className="w-60 rounded-3xl shadow-2xl object-cover"
                    />
                </div>

            </section>
        </>

    )
}

export default Home;