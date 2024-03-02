
import './App.css';

function App() {
  return (
            <>
            <div className = "bchanger">

            <h1>Background Color - Changer</h1>
            <br>
            </br>

           <input type = "color" onChange = {(e) => {

               let properties = e.target.value;
               console.log(properties);

               document.body.style.backgroundColor = properties;
                     
           }}/>

            </div>
            
            </>
  );
}

export default App;
