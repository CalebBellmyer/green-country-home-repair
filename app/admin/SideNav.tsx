import AdminNavButton from "./AdminNavButton";
import Link from "next/link";

type SideNavProps = {
    setType: (type: string) => void;
};

export default function SideNav({ setType }: SideNavProps) {
    return (
        <div className="lex h-full flex-col px-3 py-4 md:px-2 bg-primary rounded-md ">
            <div className="text-lg font-bold text-white text-center">
                <Link href="/">Green Country</Link>{" "}
                {/* Replace with your company logo */}
            </div>
            <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-primary rounded-md  pt-24">
                <div className="mb-2 flex flex-col h-20 items-center justify-start rounded-md bg-primary p-4 md:h-40  ">
                    <AdminNavButton type="Bathrooms" setType={setType} />
                    <AdminNavButton type="Kitchens" setType={setType} />
                    <AdminNavButton type="Decks" setType={setType} />
                </div>
            </div>
        </div>
    );
}
