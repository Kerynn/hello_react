import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
      {
        name: "Charlie", 
        role: "Intern", 
        img: "https://images.pexels.com/photos/8121155/pexels-photo-8121155.jpeg"
      },
      {
        name: "Jim",
        role: role, 
        img: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg"
      },
      {
        name: "Kamee",
        role: "Team Manager",
        img: "https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg"
      },
      {
        name: "Francis",
        role: "Software Engineer",
        img: "https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg"
      },
      {
        name: "Nicole",
        role: "Marketing Director",
        img: "https://images.pexels.com/photos/2463238/pexels-photo-2463238.jpeg"
      },
      {
        name: "Sammy",
        role: role,
        img: "https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg"
      },
      {
        name: "Ozzie",
        role: "Security",
        img: "https://images.pexels.com/photos/2774140/pexels-photo-2774140.jpeg"
      }
    ]);
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
            {employees.map((employee) => {
              console.log(employee);
              return (
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  alt="Employee Photo"
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
