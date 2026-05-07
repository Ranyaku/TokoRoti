export default function Checkout({cart, setCart, total, incItem, deleteItem}) {

return (
    <>
    <div>
        {cart.map ((item) => (

            <div     
            key={item.id}>
            <p>{item.name}</p>
            <button
            onClick={() => {
                deleteItem(item)
            }}
            >-</button>
            <span>x{item.qty}</span>
            <button
            onClick={() => {
                incItem(item)
            }}
            >+</button>
            <span>Rp.{item.price * item.qty}</span>
        </div>
        )
        )}

        <span>Total Rp. {total} </span>
        <button>bayar</button>
        </div>
        </>
    )
}

