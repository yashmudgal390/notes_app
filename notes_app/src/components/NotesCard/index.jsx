import { useNotes } from "../../contexr/notes-context"
import { findNotesInArchive } from "../../utils/findNotesInArchive";
export const NotesCard = ({ id, text, title, isPinned }) => {
    const { notesDispatch, archive } = useNotes();
    const onPinClick = (id) => {
        !isPinned ? notesDispatch({
            type: "PIN",
            payload: { id },
        }) : notesDispatch({
            type: "UNPIN",
            payload: { id }
        })
    }
    const isNoteArchive = findNotesInArchive(archive, id)
    const onArchiveClick = (id) => {
        !isNoteArchive ? notesDispatch({
            type: 'ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }
    const onDeleteClick=(id)=>{
        notesDispatch({
            type:'DELETE',
            payload:{id},
        })
    }

    return (
        <div className="border w-56 border-neutral-800 p-2 rounded-md w-[300px] " key={id}>
            <div className="flex justify-between ">
                <p >{title}</p>
                {!isNoteArchive?<button onClick={() => onPinClick(id)}><span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>
                    push_pin
                </span></button> : <></>}
                
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                    <button onClick={() => onArchiveClick(id)} ><span className={isNoteArchive ? 'material-icons' : 'material-icons-outlined'}>
                        archive
                    </span></button>
                    <button onClick={()=>onDeleteClick(id)}><span className="material-icons">
                        delete
                    </span></button>
                </div>
            </div>
        </div>
    )
}