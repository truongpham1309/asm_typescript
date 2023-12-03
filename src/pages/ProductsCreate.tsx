import { useState } from "react"
import { Products } from "./ProductsList"
import { useNavigate} from "react-router-dom";


const ProductsCreate = () => {

    const [ productsAdd, setProductsAdd ] = useState<Products>({
        id: 0,
        name: "",
        price: 0,
        desc: ""
    });

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

        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(productsAdd),
        });

        navigate("/products");

    }

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProductsAdd({...productsAdd, [e.target.name]: e.target.value});
    }


  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            Name <br />
            <input type="text" name="name" id="" onChange={handleChangeInput} /> <br />

            Price <br />
            <input type="number" name="price" id="" onChange={handleChangeInput} /> <br />

            Desc <br />
            <input type="text" name="desc" id="" onChange={handleChangeInput} /> <br />

            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default ProductsCreate