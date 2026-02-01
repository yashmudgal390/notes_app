import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/noteReducers";

const NotesContext = createContext();
const NotesProvider = ({ children }) => {
    const initialState = {
        title: '',
        text: '',
        notes: [],
        pinnedNotes: [],
        unpinnedNotes: [],
        archive: [],
    }

    const [{ title, text, notes, archive }, notesDispatch] = useReducer(notesReducer, initialState);
    return (
        <NotesContext.Provider value={{ title, text, notes, archive, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes }