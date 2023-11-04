import ItemCount from "../ItemCount/ItemCount";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemListContainer.css";

const ItemListContainer = () => {
    return(
        <div className="card-container">
            <div className="card">
                <h1>Remera Oversize XL</h1>
                <img src="https://kritikalstore.com/wp-content/uploads/2021/11/remeras-kritikal-1.jpg" alt="Remera Blanca Oversize" width="300px" height="400px" />
                <p>Excelente remera Oversize XL - Unisex - Black</p>
                <button>detalle</button>
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("cantidad agregada", quantity)}/>
            </div>
            <div className="card">
                <h1>Remera Oversize XL</h1>
                <img src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/049/193/products/eze095851-c2d1bb2d29b77210a716953040048199-640-0.webp" alt="Remera Blanca Oversize" width="300px" height="400px" />
                <p>Excelente remera Oversize XL - Unisex - Grey</p>
                <button>detalle</button>
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("cantidad agregada", quantity)}/>
            </div>
            <div className="card">
                <h1>Remera Oversize XL</h1>
                <img src="https://www.indy.com.ar/cdn/shop/files/2ad3688b-9ad9-4f1a-966b-ac8a480072a1copia.jpg?v=1696107090&width=713" alt="Remera Blanca Oversize" width="300px" height="400px" />
                <p>Excelente remera Oversize XL - Unisex - White</p>
                <button onClick={ItemDetail}>detalle</button>
                <ItemCount initial={0} stock={10} onAdd={(quantity) => console.log("cantidad agregada", quantity)}/>
            </div>
        </div>
    )
}

export default ItemListContainer;