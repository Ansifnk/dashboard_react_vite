import { NotificationsNone, Language, Settings } from '@material-ui/icons/';

import './topbar.css'

function TopBar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper {
">
                <div className="topLeft">
                    <span className="logo">
                        Admin
                    </span>
                </div>

                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                        <span className="topIconBadge">2</span>
                    </div>
                    <img src="https://unsplash.com/photos/kmYw-PkX5M4" alt="" className="topAvatar" />
                </div>

            </div>

        </div>
    )
}

export default TopBar
