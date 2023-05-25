import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev');
  const showEmployees = true;
  return (
    <div className="App">
      { console.log('inside the return') }
      { showEmployees ? (
        <>
          <input 
            type="text" 
            onChange={(e) => {
              console.log(e.target.value)
              setRole(e.target.value)
            }}
          />
            <div className="flex flex-wrap justify-center">
              <Employee 
                name="Charlie" 
                role="Intern" 
                img="https://images.pexels.com/photos/8121155/pexels-photo-8121155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Employee 
                name="Jim" 
                role={role} 
                img="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Employee 
                name="Kamee"
                role="Team Manager"
                img="https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Employee 
                name="Francis" 
                role="Software Engineer"
                img="https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <Employee name="Nicole" role={role} />
              <Employee name="Sammy" role={role}/>
              <Employee name="Ozzie"/>
            </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
