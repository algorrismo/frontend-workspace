// import logo from './logo.svg';
import './App.css';
import Child from './components/child';
import State from './components/state';
import NameState from './components/nameState'; 

function PersonInfo(){
  return (
    <p className="text-2xl text-white font-bold text-center">
      SWE
    </p>
  );
}

// function 
function App() {

  const userName = "Ismail Hossain Fahim";

  return (
    <div className="App">
      <h1 className='bg-whitehite text-2xl text-orange-400 text-center mt-7'>This is week-01 </h1>
      <h1 className="text-xl text-center text-blue-200`">This is parent component</h1>
      <header className="App-header">
        <p className ="text-white text-5xl font-bold bg-green-900">
          Ismail Hossain Fahim
        </p>
          <p className ="text-white text-2xl font-bold bg-red-300">
         Hello {userName}
        </p>

        {/* {using PersonInfo component} */}
        <PersonInfo/>
        
        <p className="text-2xl text-white font-bold text-center">
          23-50009-1
        </p>
      </header>

        {/* sending data to child component */}
      <div>
          <Child
          textColor =" text-center text-5xl text-pink-500"
          heading="Hello from child component"
          headingColor ="text-2xl text-white font-bold text-center"
          
          />
      </div>

      {/* {using state component} */}
      <div>
        <State/>
        <NameState/>
      </div>
    </div>
  );
}

export default App;
