import './sideBar.css'

import {
    LineStyle,
    Timeline, TrendingUp,
    PermIdentity, Storefront,
    AttachMoney, BarChart,
    MailOutline, DynamicFeed,
    ChatBubbleOutline, WorkOutline,
    Report
} from '@material-ui/icons'
import { Link } from 'react-router-dom'

const sideBar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sideBarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/' className='link' >
                            <li className="sideBarListItem active">
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sideBarListItem">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <TrendingUp />
                            Sales
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sideBarTitle">Quick Menu</h3>
                    <ul className="sidebarList">

                        <Link to='/users' className='link' >
                            <li className="sideBarListItem ">
                                <PermIdentity className='sidebarIcon' />
                                Users
                            </li>
                        </Link>

                        <Link to='/products' className='link' >
                            <li className="sideBarListItem">
                                <Storefront />
                                Products
                            </li>
                        </Link>
                        <li className="sideBarListItem">
                            <AttachMoney />
                            Transactions
                        </li>

                        <li className="sideBarListItem">
                            <BarChart />
                            Reports
                        </li>

                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sideBarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sideBarListItem ">
                            <MailOutline className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sideBarListItem">
                            <DynamicFeed />
                            Feedback
                        </li>
                        <li className="sideBarListItem">
                            <ChatBubbleOutline />
                            Messages
                        </li>

                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sideBarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sideBarListItem ">
                            <WorkOutline className='sidebarIcon' />
                            Manage
                        </li>
                        <li className="sideBarListItem">
                            <Timeline />
                            Analytics
                        </li>
                        <li className="sideBarListItem">
                            <Report />
                            Reports
                        </li>

                    </ul>
                </div>

            </div>
        </div>
    )
}

export default sideBar
