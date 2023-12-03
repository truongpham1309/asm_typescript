import { useEffect, useState } from "react"
import { Products } from "./ProductsList"
import { useNavigate, useParams} from "react-router-dom";


const ProductsUpdate = () => {

    const [ productsAdd, setProductsAdd ] = useState<Products>({
        id: 0,
        name: "",
        price: 0,
        desc: ""
    });

    const {id} = useParams();

    const navigate = useNavigate();

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        if(productsAdd.name.length === 0){
            alert("Name khong de trong");
            return;
        }
        if(productsAdd.price <= 0){
            alert("Price khong nho hon 0");
            return;
        }

        fetch(`http://localhost:3000/products/${id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(productsAdd),
        });

        navigate("/products");

    }   

    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`).then(res => res.json().then(data => setProductsAdd(data)));
    },[id]);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductsAdd({...productsAdd, [e.target.name]: e.target.value});
    }


  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            Name <br />
            <input type="text" name="name" value={productsAdd.name} id="" onChange={handleChangeInput} /> <br />

            Price <br />
            <input type="number" name="price" value={productsAdd.price} id="" onChange={handleChangeInput} /> <br />

            Desc <br />
            <input type="text" name="desc" id="" value={productsAdd.desc} onChange={handleChangeInput} /> <br />

            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default ProductsUpdate