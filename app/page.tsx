import Header from "./_components/Header";
import Hero from "./_components/Hero";
import ProjectType from "./_components/ProjectType";
import Footer from "./_components/Footer";
import AboutSection from "./_components/AboutSection";

export default function Home() {
    const maxImages = 6;
    return (
        <main className="flex flex-col min-h-screen bg-gray-100">
            <Header />
            <Hero />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-3 lg:col-span-3">
                        <AboutSection/>
                    </div>
                    <div className="col-span-1 md:col-span-3 lg:col-span-3">
                        <ProjectType type="Kitchens" maxImages={maxImages} />
                    </div>
                    <div className="col-span-1 md:col-span-3 lg:col-span-3">
                        <ProjectType type="Bathrooms" maxImages={maxImages} />
                    </div>
                    <div className="col-span-1 md:col-span-3 lg:col-span-3">
                        <ProjectType type="Decks" maxImages={maxImages} />
                    </div>
                    <div className="col-span-1 md:col-span-3 lg:col-span-3">
                        <ProjectType type="Misc" maxImages={maxImages} />
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
