import Header from "./Header";
import ProjectType from "./ProjectType";
import Footer from "./Footer";
import Hero from "./Hero";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen w-full">
            <Header />
            <Hero />
            <div className="container mx-auto p-6 md:p-12 lg:p-24 space-y-6">
                <ProjectType type="Kitchens" />
                <ProjectType type="Bathrooms" />
                <ProjectType type="Decks" />
                <Footer />
            </div>
        </main>
    );
}
