import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Customer(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState();
  useEffect(() => {
    const url = 'http://localhost:8000/api/customers/' + id;
    fetch(url)
      .then((response) => {
        if(response.status === 404){
          setNotFound(true);
        }
        return response.json();
      })
      .then((data) => {
        setCustomer(data.customer);
      });
  }, []);
  return (
    <>
      { notFound ? <p>The customer with id {id} you are looking for was not found</p> : null }
      { customer ? (
        <div>
          <p>{customer.id}</p>
          <p>{customer.name}</p>
          <p>{customer.industry}</p>
        </div> 
      ) : null }
      <Link to="/customers">Back to Customers List</Link>
    </>
  );
}