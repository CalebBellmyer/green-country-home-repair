import Header from "./Header";
import Hero from "./Hero";
//import FirebaseStorageProvider from "~/core/firebase/components/FirebaseStorageProvider";
import ProjectType from "./ProjectType";
import Footer from "./Footer";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen w-full">
            {/* <Header /> */}
            <Hero />

            {/* <ProjectType type="Kitchens" />
            <ProjectType type="Bathrooms" />
            <ProjectType type="Decks" /> */}

            {/* <Footer /> */}
        </main>
    );
}
