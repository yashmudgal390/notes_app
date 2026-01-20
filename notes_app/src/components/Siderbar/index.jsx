import {Link} from 'react-router-dom'
export const Siderbar=()=>{
    return(
        <aside className='flex flex-col gap-3 border-r-2 border-slate-300 w-34 h-screen p-4'>
            <Link to='/'>Home</Link>
            <Link to='/archive'>Archive</Link>
            <Link to='/important'>Important</Link>
            <Link to='/bin'>Bin</Link>
            
        </aside>
    )
}