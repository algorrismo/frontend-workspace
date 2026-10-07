"use client"; //Server Components.

import { ClientPageRoot } from "next/dist/client/components/client-page";
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

  // Handle delete button click
  async function deleteBtn(userId) {
    try{
      const response = await fetch(`http://localhost:6767/users/${userId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        // console.error("Failed to delete user:", response.statusText);
        throw new Error("Failed to delete user");
      } else {
        // Remove the deleted user from the state
        //?Give me all users except the one with this ID.
        setUsers(users.filter((user) => user._id !== userId));
        console.log("User deleted successfully");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  //handle update button click
  async function updateUser(user) {
  const newName = prompt("Enter new name:", user.name);
  const newEmail = prompt("Enter new email:", user.email);

  if (!newName || !newEmail) {
    return;
  }

  const updatedUser = {
    name: newName,
    email: newEmail,
  };

  try {
    const response = await fetch(
      `http://localhost:6767/users/${user._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(updatedUser),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user");
    }
    else{
      // console.log("User updated successfully");
      const data = await response.json();
      console.log("User updated:", data);

      // Fetch users again
      const usersResponse = await fetch(
        "http://localhost:6767/users"
      );
      const usersData = await usersResponse.json();
      setUsers(usersData);
    }

  } catch (error) {
    console.error("Error updating user:", error);
  }
}

  return (
    <div>
      <h1 className="font-bold text-3xl text-pink-600 text-center">Lets doo CRUD operations</h1>

      <div className="flex justify-center items-center mt-10">
       <input id="name" type="text" placeholder="Enter your name" className="border border-gray-300 rounded-md px-4 py-2 mr-2" />
       <input id="email" type="email" placeholder="Enter your email" className="border border-gray-300 rounded-md px-4 py-2 mr-2" />
       <button  onClick={submitBtn} className="bg-blue-500 text-white rounded-md px-4 py-2">Submit</button>
      </div>


      {/* //* lets get data get */}
       <div className="grid grid-cols-3 items-center mt-10 text-center gap-4 container mx-auto">
          {users.map((user) => (
            <div key={user._id} className="mr-4 border-2 border-gray-300 rounded-md px-4 py-2 mb-2">
              <p className="text-orange-400">user id:{user._id}</p>
              <p className="text-orange-400">user name:{user.name}</p>
              <p className="text-orange-400">user email:{user.email}</p>

              <div>
                <button onClick={() => updateUser(user)} className="bg-green-500 text-white rounded-md px-4 py-2 mr-2">Update</button>
                <button onClick={() => deleteBtn(user._id)}  className="bg-red-500 text-white rounded-md px-4 py-2">Delete</button>
              </div>
            </div>
          ))}
       </div>

       
    </div>
  );
}
