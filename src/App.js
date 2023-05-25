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
            <div className="flex flex-wrap">
              <Employee name="Charlie" role="Intern"/>
              <Employee name="Jim" role={role} />
              <Employee name="Kamee"/>
              <Employee name="Francis" role="Software Engineer"/>
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
