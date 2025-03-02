

import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'
import { userData } from '../../constants/dummyData'

import './home.css'

const Home = () => {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title='User Analytics' grid dataKey="Active User" />
            <div className="homeWidget">
                <WidgetSmall />
                <WidgetLarge />
            </div>

        </div>
    )
}

export default Home
