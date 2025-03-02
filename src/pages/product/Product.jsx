
import { Link } from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import { prodcutsData } from '../../constants/dummyData'
import ProductImg from '../../Assets/images/Product.png'

import './product.css'
import { Publish } from '@material-ui/icons'

const Product = () => {
    return (
        <div className='product' >

            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='/newProduct'>
                    <button className="productAddButton">Add</button>
                </Link>


            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={prodcutsData} dataKey='sales' title='Sales Performance' />
                </div>

                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={ProductImg} alt="" className="productInfoImg" />
                        <span className="productName">Samsung</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">id:</div>
                            <div className="productInfoValue">12</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">sales</div>
                            <div className="productInfoValue">2548</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Active</div>
                            <div className="productInfoValue">Yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">in Stock</div>
                            <div className="productInfoValue">Yes</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder='samsung' />
                        <label htmlFor="">in Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                        <label htmlFor="">Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={ProductImg} alt="" className="productUploadImg" />
                            <label htmlFor="" for='file'>
                                <Publish />
                            </label>
                            <input type="file" id='file' style={{ display: 'none' }} />
                        </div>

                        <button className='productButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
