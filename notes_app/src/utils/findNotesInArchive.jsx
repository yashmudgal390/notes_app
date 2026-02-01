export const findNotesInArchive = (archive, id) => {
    return archive.some(note => note.id === id);
}
export const findNotesInImportant =(imp,id)=>{
    return imp.some(note=>note.id ===id);
}