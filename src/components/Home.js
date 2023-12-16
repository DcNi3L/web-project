import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { BiLogoFacebookCircle, BiLogoTelegram, BiLogoInstagramAlt } from "react-icons/bi";
import { SiYoutube } from "react-icons/si";
import { RiShoppingCartFill } from "react-icons/ri";

//css
import './Home.css';

//components
import Homeproduct from './inc/Home_prods';

const Home = () => {

    // Product Category
    const[newProduct, setNewProduct] = useState([])
    const[featuredProduct, setFeaturedProduct] = useState([])
    const[topProduct, setTopProduct] = useState([])

    // Trending product
    const[trendingProduct, setTrendingProduct] = useState(Homeproduct)
    const filtercate = (x) =>
    {
        const fillterProd = Homeproduct.filter((current) => 
        {
            return current.type === x
        })

        setTrendingProduct(fillterProd)
    }

    const allTrendingProd = () =>
    {
        setTrendingProduct(Homeproduct)
    }


    // Product type
    useEffect(() => 
    {
        productCategory()
    }) 

    const productCategory = () => 
    {
        // For new products
        const newCategory = Homeproduct.filter((x) =>
        {
            return x.type === 'new'
        })

        // For featured
        const featuredCategory = Homeproduct.filter((x) =>
        {
            return x.type === 'featured'
        })

        // For top
        const topCategory = Homeproduct.filter((x) =>
        {
            return x.type === 'top'
        })

        setNewProduct(newCategory)
        setFeaturedProduct(featuredCategory)
        setTopProduct(topCategory)
    }

    return(
        <>
            <main className='home'>
                <div className='top_banner'>
                    <div className='content'>
                        <h3>silver aluminum</h3>
                        <h2>Apple Watch</h2>
                        <p>40% off at your first offer</p>
                        <Link to='/shop' className='banner-link'>Shop Now</Link>
                    </div>
                </div>

                <div className='trending'>
                    <div className='container'>
                        <div className='left-box'>
                            <div className='header'>
                                <div className='heading'>
                                    <h2 onClick={() => allTrendingProd()}>trending product</h2>
                                </div>
                                <div className='cate'>
                                    <h3 onClick={() => filtercate('new')}>New</h3>
                                    <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                    <h3 onClick={() => filtercate('top')}>Top Selling</h3>
                                </div>
                            </div>

                            <div className='products'>
                                <div className='container'>
                                    {
                                        trendingProduct.map((current) => 
                                        {
                                            return(
                                                <>
                                                    <div className='box'>
                                                        <div className='img-box'>
                                                            <img src={current.img} alt=''></img>
                                                            <div className='icon'>
                                                                <div className='icon-box'>
                                                                    <FaEye />
                                                                </div>

                                                                <div className='icon-box'>
                                                                    <IoHeart />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='info'>
                                                            <h3>{current.name}</h3>
                                                            <p>${current.price}</p>
                                                            <button className='btn btn-primary'>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        } )
                                    }
                                </div>

                                <button>More...</button>
                            </div>
                        </div>

                        <div className='right-box'>
                            <div className='container'>
                                <div className='testimonial'>
                                    <div className='head'>
                                        <h3>Our testimonial</h3>
                                    </div>

                                    <div className='detail'>
                                        <div className='img-box'>
                                            <img src='images/T1.avif' alt='Testimonial'></img>
                                        </div>

                                        <div className='info'>
                                            <h3>stephan robot</h3>
                                            <h4>web designer</h4>
                                            <p>Make and generate your stylish symbol and fonts for free . Pretty easy platform to make fancy text just by click and copy.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='newsletter'>
                                    <div className='head'>
                                        <h3>newsletter</h3>
                                    </div>

                                    <div className='form'>
                                        <p>join our malling list</p>
                                        <input type='email' placeholder='Your e-mail' autoComplete='off' />
                                        <button>subscribe</button>
                                        <div className='icon-box'>
                                            <div className='icon instagram'>
                                                <BiLogoInstagramAlt />
                                            </div>

                                            <div className='icon facebook'>
                                                <BiLogoFacebookCircle />
                                            </div>

                                            <div className='icon telegram'>
                                                <BiLogoTelegram />
                                            </div>

                                            <div className='icon youtube'>
                                                <SiYoutube />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='banners'>
                    <div className='container'>
                        <div className='left-box'>
                            <div className='box'>
                                <img src='images/Multi-Banner-1.avif' alt='Banner'></img>
                            </div>

                            <div className='box'>
                                <img src='images/Multi-Banner-2.avif' alt='Banner'></img>
                            </div>
                        </div>

                        <div className='right-box'>
                            <div className='top'>
                                <img src='images/Multi-Banner-3.webp' alt=''></img>
                                <img src='images/Multi-Banner-4.avif' alt=''></img>
                            </div>

                            <div className='bottom'>
                                <img src='images/Multi-Banner-5.webp' alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='product_type'>
                    <div className='container'>
                        <div className='box'>
                            <div className='header'>
                                <h2>New Product</h2>
                            </div>

                            {
                                newProduct.map((current) =>
                                {
                                    return(
                                        <>
                                            <div className='product-box'>
                                                <div className='img-box'>
                                                    <img src={current.img} alt=''></img>
                                                </div>
                                                
                                                <div className='detail'>
                                                    <h3>{current.name}</h3>
                                                    <p>${current.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><IoHeart /></button>
                                                        <button><RiShoppingCartFill /></button>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }

                        </div>

                        <div className='box'>
                            <div className='header'>
                                <h2>Featured Product</h2>
                            </div>

                            {
                                featuredProduct.map((current) =>
                                {
                                    return(
                                        <>
                                            <div className='product-box'>
                                                <div className='img-box'>
                                                    <img src={current.img} alt=''></img>
                                                </div>
                                                
                                                <div className='detail'>
                                                    <h3>{current.name}</h3>
                                                    <p>${current.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><IoHeart /></button>
                                                        <button><RiShoppingCartFill /></button>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }

                        </div>

                        <div className='box'>
                            <div className='header'>
                                <h2>Top Product</h2>
                            </div>

                            {
                                topProduct.map((current) =>
                                {
                                    return(
                                        <>
                                            <div className='product-box'>
                                                <div className='img-box'>
                                                    <img src={current.img} alt=''></img>
                                                </div>
                                                
                                                <div className='detail'>
                                                    <h3>{current.name}</h3>
                                                    <p>${current.price}</p>
                                                    <div className='icon'>
                                                        <button><FaEye /></button>
                                                        <button><IoHeart /></button>
                                                        <button><RiShoppingCartFill /></button>
                                                    </div>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;