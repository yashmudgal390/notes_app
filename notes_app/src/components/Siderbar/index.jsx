import { NavLink } from 'react-router-dom'
export const Siderbar = () => {
    const getStyle=({isActive})=>{
        return isActive ? 'bg-indigo-500 flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-br-full':'hover:bg-indigo-500 flex align-center gap-1  px-2 py-1 rounded-tr-full rounded-br-full '
    }
    return (
        <aside className='flex flex-col gap-3 border-r-2 border-slate-300 w-38 h-screen p-4'>
            <NavLink className={getStyle} to='/'><span className="material-symbols-outlined">
                home
            </span>
                <span>Home</span>
            </NavLink>
            <NavLink className={getStyle } to='/archive'>
                <span className="material-symbols-outlined">
                    archive
                </span>
                <span>Archive</span></NavLink>
            <NavLink className={getStyle} to='/important'>
                <span class="material-symbols-outlined">
                    label_important
                </span>
                <span>Important</span></NavLink>
            <NavLink className={getStyle} to='/bin'>
                <span className="material-symbols-outlined">
                    delete
                </span>
                <span>Bin</span></NavLink>
        </aside>
    )
}