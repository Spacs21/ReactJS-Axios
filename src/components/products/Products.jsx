import axios from '../../api'
import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Products.scss"
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useFetch } from '../../hooks/useFetch';



const Products = () => {
    const [limit, setLimit] = useState(6)
    const [offset, setOffset] = useState(6)
    const [category, setCategory] = useState("/")
    const {data, loading, error} = useFetch(`/products${category}`, {limit: limit}, [limit, category])
    const {data: categories} = useFetch("/products/category-list")

    useEffect(() => {
        AOS.init({
            duration: 800, 
            easing: 'ease-in-out-cubic',
        });
    }, []);

    const handleLimit = () => {
        setLimit(prevLimit => prevLimit + offset)
    }

    // useEffect(()=> {
    //     axios
    //         .get(`/products?limit=${limit}`)
    //         .then(res => {
    //             setProducts(res.data.products)
    //         })
    //         .catch(err => console.log(err))
    //         .finally() 
    // }, [limit])

    // useEffect(()=>{
    //     axios.get(`/products/category-list`)
    // })

    const productItems = data?.products?.map((product)=>(
        <div className="carts__item" key={product.id} data-aos="fade-up">
            <img src={product.images[0]}/>
            <div className="carts__item__title">
                <div className="name"><h3>{product.title}</h3></div>
                <div className="price"><h3>{product.price}</h3></div>
            </div>
            <div className="descp">{product.description}</div>
            <div className="review">
                <div className="add"><button>+</button></div>
                <div className="stars">
                    <FaStar/><FaStar/><FaStar/><FaStar/><CiStar/>
                </div>
            </div>
        </div>
    ))
    const cateogryItems = categories?.map((item)=>(
        <li className='categories__item' key={item} onClick={()=> setCategory(`/category/${item}`)}>
            {item}
        </li>
    ))
    // console.log(category);
  return (

    <main>
        <div className="container" data-aos="fade-up" data-aos-duration="600">
            <div className="title">
                <p className='tag'>M E N U</p>
                <h2>Food Full of treaty Love</h2>
                <p className='title__descp'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            </div>
            <div className="categories">
                {cateogryItems}
            </div>
            <div className="products">
                <div className="carts">
                    {productItems}
                </div>
                <div className="products__button">
                    <button onClick={handleLimit}>See More</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Products