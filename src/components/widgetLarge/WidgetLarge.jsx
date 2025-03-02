

import './widgetLarge.css'
import User from '../../assets/images/user.png'

const WidgetLarge = () => {

    const Button = ({ type }) => {
        return (
            <button className={'widgetLgBtn ' + type} >{type}</button>
        )
    }

    return (
        <div className='widgetLg' >
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={User} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Lorem Ipsem</span>

                    </td>
                    <td className="widgetLgDate">23 apr 2021</td>
                    <td className="widgetLgAmount">Rs.300.00</td>
                    <td className="widgetLgStatus"><Button type='Approved' /></td>

                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={User} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Lorem Ipsem</span>

                    </td>
                    <td className="widgetLgDate">23 apr 2021</td>
                    <td className="widgetLgAmount">Rs.300.00</td>
                    <td className="widgetLgStatus"><Button type='Declined' /></td>

                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={User} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Lorem Ipsem</span>

                    </td>
                    <td className="widgetLgDate">23 apr 2021</td>
                    <td className="widgetLgAmount">Rs.300.00</td>
                    <td className="widgetLgStatus"><Button type='Pending' /></td>

                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={User} alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Lorem Ipsem</span>

                    </td>
                    <td className="widgetLgDate">23 apr 2021</td>
                    <td className="widgetLgAmount">Rs.300.00</td>
                    <td className="widgetLgStatus"><Button type='Approved' /></td>

                </tr>
            </table>
        </div>
    )
}

export default WidgetLarge
