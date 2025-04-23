import './App.css'
import React, {useState, useEffect} from 'react'
import ProductService from './services/Product'
import ProductAdd from './ProductAdd'
 
const ProductList = () => {
 
// Komponentin tilojen ja sitä muuttavien set metodien määritys, sekä alustaminen.
const [products, setProducts] = useState([])
const [lisäystila, setLisäystila] = useState(false)
const [muokkaustila, setMuokkaustila] = useState(false)
const [reload, reloadNow] = useState(false)
const [search, setSearch] = useState("")
 
// UseEffect ajetaan aina alussa kerran
useEffect(() => {
  ProductService.getAll()
  .then(data => {
    setProducts(data)
        })
    },[lisäystila, reload, muokkaustila] // Nämä statet jos muuttuu niin useEffect() ajetaan uudestaan
  )
 
  //Hakukentän onChange tapahtumankäsittelijä
const handleSearchInputChange = (event) => {
    setSearch(event.target.value.toLowerCase())
}
 
return (
<>
        <h1><nobr>Products</nobr>

        {lisäystila && <ProductAdd setLisäystila={setLisäystila} />}

        {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h1>

        {!lisäystila && !muokkaustila &&
        <input placeholder="Search by Last Name" value={search} onChange={handleSearchInputChange} />
        }

        {!lisäystila && !muokkaustila &&
        <table className="table">
        <thead>
                <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                </tr>
        </thead>
        <tbody>


        {products && products.map(u =>
        {
                const lowerCaseName = u.name.toLowerCase();
                if (lowerCaseName.indexOf(search) > -1) {
                return(
                        <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>{u.price}</td>
                        <td>{u.quantity}</td>
                        </tr>
                        
                        )
                        }
                }
                )
        }

        </tbody>

        </table>
        }
        </>
)
}
 
export default ProductList