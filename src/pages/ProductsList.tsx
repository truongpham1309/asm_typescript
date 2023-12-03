import { useEffect, useState } from "react"

export type Products = {
    id: number,
    name: string,
    price: number,
    desc: string,
}

const ProductsList = () => {

    const [products, setProducts] = useState<Products[]>([]);

    useEffect(() => {
        fetch("http://localhost:3000/products").then(res => res.json()).then(data => setProducts(data));

    }, []);

    const handleRemove = (e: React.SyntheticEvent<HTMLElement>) => {
         if(!confirm("Are you sure you want to remove?")) return;

         const id = e.currentTarget.dataset.id;

         fetch(`http://localhost:3000/products/${id}`, {
            method: "DELETE",
         })
        

         const newProducts = products.filter(p => p.id !== Number(id));
         setProducts(newProducts);


    }


    return (
        <div><a href="/products_add">Add products</a>
            {products.map(product => (
                <div key={product.id}>
                    {product.name}
                    <p>{product.price}</p>
                    <p>{product.desc}</p>

                    <div>
                        <a href={`/products_update/${product.id}`}><button>EDIT</button></a>
                        <button data-id={product.id} onClick={handleRemove}>REMOVE</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductsList