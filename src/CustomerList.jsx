import CustomerService from './services/customer';
import React, { useState, useEffect } from 'react';
import Customer from './Customer';
import CustomerAdd from './CustomerAdd'
import CustomerEdit from './CustomerEdit'

const CustomerList = (setIsPositive, setShowMessage, setMessage) => {
        const [customers, setCustomers] = useState([])
        const [showCustomers, setShowCustomers] = useState(false)
        const [lisäystila, setLisäystila] = useState(false)
        const [muokkaustila, setMuokkaustila] = useState(false)
        const [muokattavaCustomer, setMuokattavaCustomer] = useState(false)
        const [search, setSearch] = useState("")


        const [reload, reloadNow] = useState(false)
        useEffect(() => {
                CustomerService.getAll()
                        .then(data => {
                                setCustomers(data)
                        }
                        )
        }, [lisäystila, reload, muokkaustila]
        )
        const editCustomer = (customer) => {
                { window.scrollBy(0, -10000) }
                setMuokattavaCustomer(customer)
                setMuokkaustila(true)
        }
        const handleSearchInputChange = (event) => {
                setShowCustomers(true)
                setSearch(event.target.value.toLowerCase())
        }
        return (
                <div>
                        <h1><nobr style={{ cursor: 'pointer' }}
                                onClick={() => setShowCustomers(!showCustomers)}>Customers</nobr>

                                {!lisäystila && <button className="nappi" onClick={() => setLisäystila(true)}>Add new</button>}</h1>
                        {
                                muokkaustila && <CustomerEdit setMuokkaustila={setMuokkaustila}
                                        setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
                                        muokattavaCustomer={muokattavaCustomer}
                                />
                        }
                        {!lisäystila && !muokkaustila &&
                                <input placeholder="Search by company name" value={search} onChange={handleSearchInputChange} />
                        }
                        {lisäystila && <CustomerAdd setLisäystila={setLisäystila}
                                setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
                        />}
                        {
                                !lisäystila && !muokkaustila && showCustomers && customers && customers.map(c => {
                                        const lowerCaseName = c.companyName.toLowerCase()
                                        if (lowerCaseName.indexOf(search) > -1) {
                                                return (
                                                        <Customer key={c.customerId} customer={c} reloadNow={reloadNow} reload={reload}
                                                                setIsPositive={setIsPositive} setMessage={setMessage} setShowMessage={setShowMessage}
                                                                editCustomer={editCustomer}
                                                        />
                                                )
                                        }
                                }
                                )
                        }



                </div>
        );
};

export default CustomerList;