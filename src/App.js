import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState([
      {
        id: 1,
        name: "Charlie", 
        role: "Intern", 
        img: "https://images.pexels.com/photos/8121155/pexels-photo-8121155.jpeg"
      },
      {
        id: 2,
        name: "Jim",
        role: role, 
        img: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg"
      },
      {
        id: 3,
        name: "Kamee",
        role: "Team Manager",
        img: "https://images.pexels.com/photos/800330/pexels-photo-800330.jpeg"
      },
      {
        id: 4,
        name: "Francis",
        role: "Software Engineer",
        img: "https://images.pexels.com/photos/3658120/pexels-photo-3658120.jpeg"
      },
      {
        id: 5,
        name: "Nicole",
        role: "Marketing Director",
        img: "https://images.pexels.com/photos/2463238/pexels-photo-2463238.jpeg"
      },
      {
        id: 6,
        name: "Sammy",
        role: role,
        img: "https://images.pexels.com/photos/4588052/pexels-photo-4588052.jpeg"
      },
      {
        id: 7,
        name: "Ozzie",
        role: "Security",
        img: "https://images.pexels.com/photos/2774140/pexels-photo-2774140.jpeg"
      }
    ]);

  function updateEmployee(id, newName, newRole){
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id){
        return {...employee, name: newName, role: newRole}
      }
      return employee;
    });
    setEmployees(updatedEmployees)
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

  const showEmployees = true;
  return (
    <div className="App bg-blue-200">
      <Header />
      { console.log('inside the return') }
      { showEmployees ? (
        <>
          <input 
            type="text" 
            onChange={(e) => {
              setRole(e.target.value)
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(employee);
              const editEmployee = (
                <EditEmployee
                  id={employee.id} 
                  name={employee.name} 
                  role={employee.role} 
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  alt="Employee Photo"
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee}/>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
