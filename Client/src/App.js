import './App.css';

function App() {

  function hitTestAPI(){
    fetch('/user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data));
  }

  return (
    <div className="App">
      <button onClick={() => {hitTestAPI()}}>test</button>
    </div>
  );
}

export default App;
