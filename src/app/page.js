// import Image from "next/image";
"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("http://localhost:6767/users");
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }

    fetchUsers();
  }, []);

  async function submitBtn () {
    // Handle submit button click
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");

    const name = nameInput.value;
    const email = emailInput.value;

    // Create a user object
    const user = {
      name: name,
      email: email,
    };

    try {
      // Send a POST request to the server to create a new user
      const response = await fetch("http://localhost:6767/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User created:", data);
        // Clear input fields after successful submission
        nameInput.value = "";
        emailInput.value = "";

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
      {/* <div className="mt-10">
       </div> */}

      {/* lets get data get */}
       <div className="flex justify-center items-center mt-10 text-center flex-col">
          {users.map((user,index) => (
            <div key={index} className="mr-4 border-2 border-gray-300 rounded-md px-4 py-2 mb-2">
              <p className="text-orange-400">user id:{index+1}</p>
              <p className="text-orange-400">user name:{user.name}</p>
              <p className="text-orange-400">user email:{user.email}</p>
            </div>
          ))}
       </div>

       {/* lets get data get
              <p className="text-orange-400">user name:{user.name}</p>
              <p className="text-orange-400">user email:{user.email}</p>
            </div>
          ))} */}
       {/* </div> */}
    </div>
  );
}
