import {useState, useEffect} from 'react'
import image from './images/github.png'

export function Portfolio() {
    const [isLoaded, setIsloaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/9Carat/repos`)
        .then(res => res.json())
        .then(
            result => {
                setIsloaded(true);
                setItems(result);
            }
        )
    },[])

    if (!isLoaded) {
        return (
                <div className="spinner-border text-secondary" role="status">
                  <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
    else {
        return(
            <div className='portfolio'>
                {items.map(item => (
                    <li key = {item.id}>
                        <img src={image} className="logo"/> <br></br> <a href={item.html_url} className="link">{item.name}</a>
                    </li>
                ))}
            </div>
        );
    }
}

export default Portfolio;
