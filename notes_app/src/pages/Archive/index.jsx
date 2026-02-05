import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../contexr/notes-context"
import { NotesCard } from "../../components/NotesCard"


export const Archive = () => {
const {archive}=useNotes();
    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col  w-screen mt-7">
                    <div className="flex flex-col gap-6">
                        {
                            archive?.length >0 && archive.map(({id,text,title})=>(
                                <NotesCard key={id} id={id} title={title} text={text}   />
                            ))
                        }
                    </div>
                </div>
            </main>s
        </Fragment>
    )
}