import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducers/noteReducers";

const NotesContext = createContext();
const NotesProvider = ({ children }) => {
    const initialState = {
        title: '',
        text: '',
        notes: [],
        archive: [],
        imp:[],
    }

    const [{ title, text, notes, archive,imp }, notesDispatch] = useReducer(notesReducer, initialState);
    return (
        <NotesContext.Provider value={{ title, text, notes, archive ,imp, notesDispatch }}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes = () => useContext(NotesContext);
export { NotesProvider, useNotes }