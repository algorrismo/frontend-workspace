import React, { useEffect, useState } from 'react';
import Apiloader from './components/apiloader';

const Apiholder = ({text}) => {
    //*API URL
    // https://dummyjson.com/posts
    // const apiUrl = 'https://dummyjson.com/posts';

    //array to hold the data fetched from the API
    const [data, setData] = useState([]); 

    useEffect(()=>{
        fetch('https://dummyjson.com/posts')
        .then((res) => res.json())
        .then((json) => {
            // console.log(json);
            setData(json.posts);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, [])

    return (
        <div>
            <p className="text-2xl text-green-300 text-center">
                {text}
            </p>

            <div>
                <p className='text-2xl font-bold text-orange-400'>There are {data.length} posts</p>

                <div className='grid grid-cols-3 gap-5 mt-5'>
                    {
                        data.map((posts,index)=>{
                            return <Apiloader key={index} 
                            post={posts} />;
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Apiholder;


// import { useEffect, useState } from "react";

// const Products = () => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch("https://dummyjson.com/products")
//             .then((res) => res.json())
//             .then((data) => {
//                 setProducts(data.products);
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Products</h1>

//             {products.map((product) => (
//                 <p key={product.id}>{product.title}</p>
//             ))}
//         </div>
//     );
// };

// export default Products;