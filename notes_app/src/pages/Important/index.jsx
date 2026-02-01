import { Navbar } from "../../components/Navbar";
import { NotesCard } from "../../components/NotesCard";
import { Sidebar } from "../../components/Sidebar";
import { useNotes } from "../../contexr/notes-context";
import { Fragment } from "react";
export const Important = () => {

    const { imp } = useNotes();
    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col  w-screen mt-7">
                    <div className="flex flex-col gap-6">
                        {
                            imp?.length > 0 && imp.map(({ id, text, title }) => (
                                <NotesCard key={id} id={id} title={title} text={text} />
                            ))
                        }
                    </div>
                </div>
            </main>s
        </Fragment>
    )
}
