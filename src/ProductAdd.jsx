import './App.css'
import React, {useState} from 'react'
import ProductService from './services/Product.js'
import md5 from 'md5'
 
const ProductAdd = ({setLisäystila,}) => {
 
// Komponentin tilan määritys
// Id arvo määritellään tietokannassa automaattisesti,
// emme anna sitä itse
const [newName, setNewName] = useState('')
const [newPrice, setNewPrice] = useState(0)
const [newQuantity, setNewQuantity] = useState(2)
 
 
// onSubmit tapahtumankäsittelijä funktio
const handleSubmit = (event) => {
      event.preventDefault()
      var newProduct = {
        name: newName,
        price: parseFloat(newPrice),
        quantity: parseInt(newQuantity),
        
    }
   
    console.log(newProduct)
 
    ProductService.create(newProduct)
    .then(response => {
      if (response.status === 200) {
     
       setTimeout(() => {
       }, 5000)
 
       setLisäystila(false)
    }
 
      })
      .catch(error => {
        
 
        setTimeout(() => {
          
         }, 6000)
      })
    }
 
  return (
    <div id="addNew">
       <h2>Product add</h2>
 
       <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={newName} placeholder="Name"
                    onChange={({ target }) => setNewName(target.value)} required />
            </div>
            <div>
                <input type="number" value={newPrice} placeholder="Price"
                    onChange={({ target }) => setNewPrice(target.value)} required />
            </div>
            <div>
                <input type="text" value={newQuantity} placeholder="Quantity"
                    onChange={({ target }) => setNewQuantity(target.value)} required />
            </div>
           
         <input type='submit' value='save' />
         <input type='button' value='back' onClick={() => setLisäystila(false)} />
       </form>
 
    </div>
  )
}
 
export default ProductAdd