import { NavLink } from 'react-router-dom'
export const Sidebar = () => {
    const getStyle=({isActive})=>{
        return isActive ? 'text-white bg-indigo-900 flex align-center gap-1 px-2 py-1 rounded-tr-full rounded-full':'hover:bg-indigo-900 hover:text-white flex align-center gap-1  px-2 py-1 rounded-full rounded-br-full '
    }
    return (
        <aside className='flex flex-col gap-3 border-r-2 border-slate-300 w-38 h-screen p-4'>
            <NavLink className={getStyle} to='/'><span className="material-icons">
                home
            </span>
                <span>Home</span>
            </NavLink>
            <NavLink className={getStyle } to='/archive'>
                <span className="material-icons">
                    archive
                </span>
                <span>Archive</span></NavLink> 
            <NavLink className={getStyle} to='/important'>
                <span className="material-icons">
                    label_important
                </span>
                <span>Important</span></NavLink>
            <NavLink className={getStyle} to='/bin'>
                <span className="material-icons">
                    delete
                </span>
                <span>Bin</span></NavLink>
        </aside>
    )
}