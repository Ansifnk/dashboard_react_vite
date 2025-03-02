
import './widgetSmall.css'
import { Visibility } from '@material-ui/icons'
import User from '../../assets/images/user.png'



const WidgetSmall = () => {
    return (
        <div className='widgetSmall'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src={User} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmallUsername">Lorem Ipsum</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className='WidgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={User} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmallUsername">Lorem Ipsum</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className='WidgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={User} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmallUsername">Lorem Ipsum</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className='WidgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={User} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmallUsername">Lorem Ipsum</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className='WidgetSmIcon' />
                        Display
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src={User} alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmallUsername">Lorem Ipsum</span>
                        <span className="widgetSmallUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmBtn">
                        <Visibility className='WidgetSmIcon' />
                        Display
                    </button>
                </li>
            </ul>

        </div>
    )
}

export default WidgetSmall
