import './Sidebar.css'
import { SidebarData } from './SidebarData';
import { useNavigate } from 'react-router-dom';

function Sidebar(){
    const navigate = useNavigate();
    return(
        <div className="Sidebar">
            <ul className='SidebarList'>
                {SidebarData.map((value, key) => {
                    return (
                        <li
                            key={key}
                            className='row'
                            onClick={() => navigate(value.url)}
                        >
                            <div id='icon'>{value.icon}</div>
                            <div id='title'>{value.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;