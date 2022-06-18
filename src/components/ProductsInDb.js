import React, {useEffect, useState} from 'react';
function ProductsInDb (){

    const [products, setProducts ] = useState([])
    useEffect( ()=> {
        fetch('http://localhost:3001/api/products')
        .then(respuesta =>{
            return respuesta.json()
        })
        .then(products =>{
        setProducts(products.products)
        })
        .catch(error => console.log(error))
    }, [])


    return (
        <>
                {/*<!-- Categories in DB -->*/}
                <div className="container-productos-existentes">						

                        <div className="container-product ">
                        <div className="miniatura">
                                {
                                    products ? products.map ((product,i)=> 
                                    <div className = "product-details" ><h3 key={product.name + i}>{product.name}</h3>
                                    <p>{product.description} </p>
                                     <img className="w-100" src={product.imagen_del_producto} alt="I Mentor"/>
                                    
                                    </div>
                                    
                                ) : <p>No hay categorías disponibles</p>} 
                                </div>
                            </div>
                            </div>

        </>
    )
    }
    export default ProductsInDb;