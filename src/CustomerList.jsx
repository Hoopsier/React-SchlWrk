import React from 'react';
import CustomerService from './services/customer';

const [customers, setCustomers] = useState([])
const [showCustomers, setShowCustomers] = useState(false)


const CustomerList = () => {
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