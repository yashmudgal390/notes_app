import { useNotes } from "../../contexr/notes-context"
export const NotesCard = ({ id, text, title, isPinned }) => {
    const { notesDispatch } = useNotes();
    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: "PIN",
            payload: { id },
        }):notesDispatch({
            type:"UNPIN",
            payload:{id}
        })
    }
    return (
        <div className="border w-56 border-neutral-800 p-2 rounded-md " key={id}>
            <div className="flex justify-between ">
                <p >{title}</p>
                <button onClick={() => onPinClick(id)}><span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>
                    push_pin
                </span></button>
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                    <button ><span className="material-icons">
                        archive
                    </span></button>
                    <button><span className="material-icons">
                        delete
                    </span></button>
                </div>
            </div>
        </div>
    )
}