import { Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import './index.scss';

const Layout = ()=>
{
    return(
        <div className='App'>
            <SideBar/>
            <div className='page' >
                 <span className='tags top-tags'>&lt;body&gt;</span>
                <div className='container'>
                <Outlet/>
                </div>
                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br/>
                    <span className ='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}
export default Layout;