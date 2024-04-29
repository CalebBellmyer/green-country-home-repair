import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectType from "./components/ProjectType";
import Footer from "./components/Footer";

export default function Home() {
    const maxImages = 6;
    return (
        <main className="flex flex-col min-h-screen w-full bg-gray-100">
            <div>
                <Header />
                <Hero />
                <div className="m-1 justify-center">
                    <ProjectType type="Kitchens" maxImages={maxImages} />
                    <ProjectType type="Bathrooms" maxImages={maxImages} />
                    <ProjectType type="Decks" maxImages={maxImages} />
                </div>

                <Footer />
            </div>
        </main>
    );
}
