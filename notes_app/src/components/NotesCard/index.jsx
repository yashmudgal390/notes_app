import { useNotes } from "../../contexr/notes-context"
import { findNotesInArchive, findNotesInImportant } from "../../utils/findNotesInArchive";
export const NotesCard = ({ id, text, title, isPinned }) => {
    const { notesDispatch, archive, imp } = useNotes();
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
    const isNoteImp = findNotesInImportant(imp, id)

    const onArchiveClick = (id) => {
        !isNoteArchive ? notesDispatch({
            type: 'ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'REMOVE_FROM_ARCHIVE',
            payload: { id }
        })
    }

    const onImpClick = (id) => {
        !isNoteImp ? notesDispatch({
            type: 'IMP',
            payload: { id }
        }) : notesDispatch({
            type: 'UNIMP',
            payload: { id }
        })

    }

    const onDeleteClick = (id) => {
        notesDispatch({
            type: 'DELETE',
            payload: { id },
        })
    }

    return (
        <div className="border w-56 border-neutral-800 p-2 rounded-md w-[300px] " key={id}>
            <div className="flex justify-between ">
                <p >{title}</p>
                {!isNoteArchive && !isNoteImp ? <button onClick={() => onPinClick(id)}><span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>
                    push_pin
                </span></button> : <></>}

            </div>
            <div className="flex flex-col">
                <p>{text}</p>

                <div className="ml-auto">
                    <button onClick={() => onImpClick(id)}><span className={isNoteImp ? 'material-icons' : 'material-icons-outlined'}>
                        label_important
                    </span></button>
                    <button onClick={() => onArchiveClick(id)} ><span className={isNoteArchive ? 'material-icons' : 'material-icons-outlined'}>
                        archive
                    </span></button>
                    <button onClick={() => onDeleteClick(id)}><span className="material-icons-outlined">
                        delete
                    </span></button>
                </div>
            </div>
        </div>
    )
}