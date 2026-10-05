"use client"; //Server Components.

import { useEffect, useState } from "react";

export default function Home() {

  //? useState  → remember/store something
  const [users, setUsers] = useState([]);

  //? useEffect → do something when component loads/changes
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:6767/users");

        //200 OK, 201 Created
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        //?Convert the response to JSON into JS
        const data = await response.json();
        setUsers(data); //*Stores the data
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    //?When the component loads, execute fetchUsers().
    fetchUsers();
  }, []); //*dependency array.

  // Handle submit button click  
  async function submitBtn () {
    const nameInput = document.getElementById("name").value;
    const emailInput = document.getElementById("email").value;

    // Create a user object
    const user = {
      name: nameInput,
      email: emailInput,
    };

    try {
      // Send a POST request to the server to create a new user
      const response = await fetch("http://localhost:6767/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", //? Specify that we're sending JSON data
        },
        body: JSON.stringify(user), //? Convert the user object to a JSON string
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("User created:", data);

        // Clear input fields after successful submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";

        const usersResponse = await fetch("http://localhost:6767/users");
        if (!usersResponse.ok) {
          throw new Error("Failed to refresh users");
        }
        setUsers(await usersResponse.json());
      } else {
        console.error("Failed to create user:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div>
      <h1 className="font-bold text-3xl text-pink-600 text-center">Lets doo CRUD operations</h1>

      <div className="flex justify-center items-center mt-10">
       <input id="name" type="text" placeholder="Enter your name" className="border border-gray-300 rounded-md px-4 py-2 mr-2" />
       <input id="email" type="email" placeholder="Enter your email" className="border border-gray-300 rounded-md px-4 py-2 mr-2" />
       <button  onClick={submitBtn} className="bg-blue-500 text-white rounded-md px-4 py-2">Submit</button>
      </div>


      {/* //* lets get data get */}
       <div className="grid grid-cols-3 items-center mt-10 text-center gap-4">
          {users.map((user,index) => (
            <div key={index} className="mr-4 border-2 border-gray-300 rounded-md px-4 py-2 mb-2">
              <p className="text-orange-400">user id:{index+1}</p>
              <p className="text-orange-400">user name:{user.name}</p>
              <p className="text-orange-400">user email:{user.email}</p>
            </div>
          ))}
       </div>

       
    </div>
  );
}
