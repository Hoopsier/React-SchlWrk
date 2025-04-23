import './App.css'
import React, { useState } from 'react'
import CustomerService from './services/customer'


const Customer = ({ customer, editCustomer, reload, reloadNow }) => {
        const [showDetails, setShowDetails] = useState(false)
        

        return (
                <div>
                        <h4 onClick={() => setShowDetails(!showDetails)}>
                                {customer.companyName}
                        </h4>
                        {showDetails && <div className="customerDetails">
                                <h3>{customer.companyName}</h3>
                                <button onClick={() => editCustomer(customer)}>Edit</button>
                                <button onClick={() => CustomerService.remove(customer)}>Delete</button>
                                <table>
                                        <thead>
                                                <tr>
                                                        <th>id</th>
                                                        <th>Contact person</th>
                                                        <th>Phone</th>
                                                        <th>Address</th>
                                                        <th>City</th>
                                                        <th>Country</th>
                                                </tr>
                                        </thead>
                                        <tbody>
                                                <tr>
                                                        <td>{customer.id}</td>
                                                        <td>{customer.contactName}</td>
                                                        <td>{customer.phone}</td>
                                                        <td>{customer.address}</td>
                                                        <td>{customer.city}</td>
                                                        <td>{customer.country}</td>
                                                </tr>
                                        </tbody>
                                </table>
                        </div>
                        }
                </div>

        )
}

export default Customer