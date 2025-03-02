import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featureditem">
                <span className="featureTitle">Revenue</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">Rs 250</span>
                    <span className="featuredMoneyRate">-25.3 <ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>


            <div className="featureditem">
                <span className="featureTitle">Sales</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">Rs 250</span>
                    <span className="featuredMoneyRate">-25.3 <ArrowDownward className='featuredIcon negative' /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>


            <div className="featureditem">
                <span className="featureTitle">Cost</span>
                <div className="featureMoneyContainer">
                    <span className="featuredMoney">Rs 250</span>
                    <span className="featuredMoneyRate">+2.3 <ArrowUpward className='featuredIcon' /></span>
                </div>
                <div className="featuredSub">Compared to last month</div>
            </div>

        </div>
    )
}

export default FeaturedInfo
