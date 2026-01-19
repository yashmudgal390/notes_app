import logo from '../../assets/notesIcon.png';
export const Navbar=()=>{
    return(<header className='flex bg-stone-100 px-4 py-1 gap-3 border-b-2 border-slate-400'>
        <div className='w-12 h-12'>
            <img src={logo} alt='logo' className=' w-full h-full'/>
        </div>
        <h1 className="align-middle font-mono	font-family: ui-monospace text-4xl text-violet-500 mt-">NoteIt</h1>
    </header>)
}