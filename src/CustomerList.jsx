import CustomerService from './services/customer';
import React, { useState, useEffect } from 'react';



const CustomerList = () => {
        const [customers, setCustomers] = useState([])
        const [showCustomers, setShowCustomers] = useState(false)

        useEffect(() => {
                CustomerService.getAll()
                        .then(data => {
                                setCustomers(data)
                        }
                        )
        }, []
        )
        return (
                <div>
                        <h2 onClick={() => setShowCustomers(!showCustomers)}>Customers</h2>
                        {
                                
                                showCustomers && customers && customers.map(c => (
                                        <h3 key={c.id}> {c.id} {c.companyName} </h3>
                                )
                                )
                                
                        }
                        
                </div>
        );
};

export default CustomerList;