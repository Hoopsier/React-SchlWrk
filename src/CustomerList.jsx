import CustomerService from './services/customer';
import React, { useState, useEffect } from 'react';
import Customer from './Customer';
import CustomerAdd from './CustomerAdd'

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
                        {/*
                        <h2 onClick={() => setShowCustomers(!showCustomers)}>Customers</h2>
                        */}
                        <h1><nobr style={{ cursor: 'pointer' }}
                                onClick={() => setShowCustomers(!showCustomers)}>Customers</nobr>

                                {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h1>

                        {lisäystila && <CustomerAdd setLisäystila={setLisäystila}
                        />}
                        {

                                showCustomers && customers && customers.map(c => (

                                        <h3> <Customer key={c.id} customer={c} /> </h3>

                                )
                                )

                        }
                        
                </div>
        );
};

export default CustomerList;