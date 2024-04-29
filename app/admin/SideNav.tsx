import AdminNavButton from "./AdminNavButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";

type SideNavProps = {
    setType: (type: string) => void;
};

export default function SideNav({ setType }: SideNavProps) {
    const router = useRouter();

    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            router.push("/");
        } catch (error) {
            console.error("logout failed", error);
        }
    };

    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-primary rounded-md ">
            <div className="text-lg font-bold text-white text-center">
                <Link href="/">Green Country</Link>{" "}
                {/* Replace with your company logo */}
            </div>
            <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-primary rounded-md  pt-24">
                <div className="mb-2 flex flex-col  items-center justify-start rounded-md bg-primary p-4   ">
                    <AdminNavButton type="Bathrooms" setType={setType} />
                    <AdminNavButton type="Kitchens" setType={setType} />
                    <AdminNavButton type="Decks" setType={setType} />
                </div>
                <div>
                    <button
                        onClick={handleLogout}
                        className="text-white bg-red-500 p-2 rounded-md w-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
