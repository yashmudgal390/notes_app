import { Fragment } from "react"
import { Navbar } from "../../components/Navbar"
import { Sidebar } from "../../components/Sidebar"
import { NotesCard } from "../../components/NotesCard"
import { useNotes } from "../../contexr/notes-context"

export const Home = () => {

    const { title, text, notes,archive, notesDispatch } = useNotes();

    const onTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }
    const onTextChange = (e) => {
        notesDispatch({
            type: 'TEXT',
            payload: e.target.value
        })
    }
    const onAddClick = () => {
        notesDispatch(
            { type: 'ADD_NOTE' }
        )
        notesDispatch(
            { type: 'CLEAR_INPUT' }
        )
    }

    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);
    console.log({archive});
    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col  w-screen mt-7">
                    <div className="flex flex-col w-[300px]  relative self-center">
                        <input value={title} onChange={onTitleChange} className="border border-netural-800 rounded-t-md focus:outline-none border-b-0 p-1" placeholder="Enter Title" />

                        <textarea value={text} onChange={onTextChange} className="h-[100px] border border-netural-800 rounded-b-md focus:outline-none border-t-0 p-1" placeholder="Enter Text"></textarea>
                        <button disabled={title.length == 0} onClick={onAddClick} className="w-6 h-6 bg-indigo-900 absolute bottom-0 right-0 text-slate-50 rounded-full mr-1 mb-1">
                            <span className="material-icons">
                                add
                            </span>
                        </button>

                    </div>
                    <div className="mt-20 ml-10 flex flex-col gap-5">
                        {
                            pinnedNotes?.length > 0 && (
                                <div><h3 className=''>Pinned notes</h3>
                                    <div className="flex flex-wrap gap-4 ">

                                        {
                                            pinnedNotes?.length > 0 && pinnedNotes.map(({ id, text, title, isPinned }) => (
                                                <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned}></NotesCard>
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                        <div>
                            {pinnedNotes?.length > 0 && <h3 className='mt-14'>Other notes</h3>}
                            <div className="flex flex-wrap gap-4 ">

                                {
                                    otherNotes?.length > 0 && otherNotes.map(({ id, text, title, isPinned }) => (
                                        <NotesCard key={id} id={id} text={text} title={title} isPinned={isPinned}></NotesCard>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </Fragment >
    )
} 