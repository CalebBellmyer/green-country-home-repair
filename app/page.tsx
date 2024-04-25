import Header from "./Header";
import Hero from "./Hero";
import ProjectType from "./ProjectType";
import Footer from "./Footer";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen w-full bg-gray-100">
            <div>
                <Header />
                <Hero />
                <div className="m-1 justify-center">
                    <ProjectType type="Kitchens" />
                    <ProjectType type="Bathrooms" />
                    <ProjectType type="Decks" />
                </div>

                <Footer />
            </div>
        </main>
    );
}
