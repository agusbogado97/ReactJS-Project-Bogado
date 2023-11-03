import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = () => {
    return(
        <div className="card-container">
            <div className="card">
                <h1>Remera Oversize XL</h1>
                <img src="https://kritikalstore.com/wp-content/uploads/2021/11/remeras-kritikal-1.jpg" alt="Remera Blanca Oversize" width="300px" height="400px" />
                <p>Excelente remera, comoda, para que puedas llevar tu look acabo.</p>
                <button>COMPRAR</button>
                <ItemCount/>
            </div>
        </div>
    )
}

export default ItemDetail