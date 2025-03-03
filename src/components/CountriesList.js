import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function CountriesList() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        
        async function getData(){
            let response = await axios.get('https://restcountries.com/v3.1/all')
            setCountries(response.data)
        }

        getData()

    }, [])

    if (!countries) {
        return <p>Loading...</p>;
      }

    return (
        <div>
        {
            countries.map((elem) => {
                return (
                    <div>
                      <img className="flag" src={elem.flags.svg} alt="flag"></img>
                      <Link to={`/${elem.cca3}`} > {elem.name.common} </Link>
                    </div>
                )
            })
        }
        </div>
    )
}

export default CountriesList
