// create your App component here
import react, { useState, useEffect} from "react";

function App() {
    const [randomImage, setRandomImage] = useState(''); // set up state to store random image obtained from endpoint
    const [isLoaded, setIsLoaded] = useState(false) // Used for conditional rendering of loading...

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(src => {
                setRandomImage(src.message) //changes state, rerenders
                setIsLoaded(true) // will take the loading off the page.
            })

    }, []); // Have to use the blank dependency array because it infinetely loaded,  because our side effect changes state, causes App to render, side effect kicks in again, etc. 

    if (!isLoaded) return <p>Loading...</p> // WIll display before dog picture is loaded

    return <img src={randomImage} alt="A Random Dog" /> // Final thing to return.

    

}

export default App;