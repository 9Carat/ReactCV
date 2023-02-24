import {useState, useEffect} from 'react'

export function Education() {
    const [isLoaded, setIsloaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('education.json')
        .then(res => res.json())
        
        .then(
            result => {
                setIsloaded(true);
                setItems(result);
            },
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
            <div className='info'>
                {items.map(item => (
                    <li key = {item.id}>
                        {item.title} <br></br> {item.period} <br></br> {item.description}
                    </li>
                ))}
            </div>
        );
    }
}

export default Education;