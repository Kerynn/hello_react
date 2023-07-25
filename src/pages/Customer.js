import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { baseUrl } from '../shared'

export default function Customer(){
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState();
  const [notFound, setNotFound] = useState();
  useEffect(() => {
    const url = baseUrl + 'api/customers/' + id;
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

  function deleteCustomer(){
    console.log('deleting...')
  }
  return (
    <>
      { notFound ? <p>The customer with id {id} you are looking for was not found</p> : null }
      { customer ? (
        <div>
          <input class="m-2 block px-2" type="text" value={customer.id} />
          <input class="m-2 block px-2" type="text" value={customer.name} />
          <input class="m-2 block px-2" type="text" value={customer.industry} />
        </div> 
      ) : null }
      <button 
        onClick={(e) => {
          const url = baseUrl + 'api/customers/' + id;
          fetch(url, {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
            if(!response.ok){
              throw new Error('Something went wrong');
            }
          navigate('/customers');
          }).catch((e) => {
            console.log(e);
          });
        }}
      >
        Delete
      </button>
      <br />
      <Link to="/customers">Back to Customers List</Link>
    </>
  );
}