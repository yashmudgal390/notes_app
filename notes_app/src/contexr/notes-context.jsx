import {   createContext,useContext,useReducer } from "react";
import { notesReducer } from "../reducers/noteReducers";

const NotesContext=createContext();
const NotesProvider=({children})=>{
        const initialState = {
        title: '',
        text: '',
        notes: [],
        pinnedNotes: [],
        unpinnedNotes: [],
    }

    const [{ title, text, notes }, notesDispatch] = useReducer(notesReducer, initialState);
    return(
        <NotesContext.Provider value={{ title, text, notes ,notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}
const useNotes=()=>useContext(NotesContext);
export{NotesProvider,useNotes}