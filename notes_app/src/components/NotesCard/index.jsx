import { useNotes } from "../../contexr/notes-context"
import { findNotesInArchive, findNotesInImportant } from "../../utils/findNotesInArchive";
export const NotesCard = ({ id, text, title, isPinned }) => {
    const { notesDispatch, archive, imp } = useNotes();

    const isNoteArchive = findNotesInArchive(archive, id);
    const isNoteImp = findNotesInImportant(imp, id);

    const onPinClick = () => {
        notesDispatch({
            type: isPinned ? "UNPIN" : "PIN",
            payload: { id }
        });
    };

    const onArchiveClick = () => {
        notesDispatch({
            type: isNoteArchive ? "REMOVE_FROM_ARCHIVE" : "ARCHIVE",
            payload: { id }
        });
    };

    const onImpClick = () => {
        notesDispatch({
            type: isNoteImp ? "UNIMP" : "IMP",
            payload: { id }
        });
    };

    const onDeleteClick = () => {
        notesDispatch({
            type: "DELETE",
            payload: { id }
        });
    };

    return (
        <div className="border border-neutral-800 p-2 rounded-md w-[300px]">
            <div className="flex justify-between">
                <p>{title}</p>

                
                {!isNoteArchive && !isNoteImp && (
                    <button onClick={onPinClick}>
                        <span
                            className={
                                isPinned
                                    ? "material-icons"
                                    : "material-icons-outlined"
                            }
                        >
                            push_pin
                        </span>
                    </button>
                )}
            </div>

            <div className="flex flex-col">
                <p>{text}</p>

                <div className="ml-auto">
                   
                    {!isNoteArchive && (
                        <button onClick={onImpClick}>
                            <span
                                className={
                                    isNoteImp
                                        ? "material-icons"
                                        : "material-icons-outlined"
                                }
                            >
                                label_important
                            </span>
                        </button>
                    )}

                    
                    {!isNoteImp && (
                        <button onClick={onArchiveClick}>
                            <span
                                className={
                                    isNoteArchive
                                        ? "material-icons"
                                        : "material-icons-outlined"
                                }
                            >
                                archive
                            </span>
                        </button>
                    )}

                   
                    {!isNoteArchive && !isNoteImp && (
                        <button onClick={onDeleteClick}>
                            <span className="material-icons-outlined">
                                delete
                            </span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
