import React, { useState } from 'react'
import Card from './Card.jsx';
import Contact from './Contact.jsx';

const Tours = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showContact, setShowContact] = useState(false);

    function getId(id)
    {
        props.removeTour(id);
    }

    // Filter tours based on search term
    const filteredTours = props.tours.filter(tour => 
        tour.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tour.info.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='container'>
            <div>
                <h2 className="title">Plan With Love</h2>
            </div>

            <div className="search-container">
                <div className="search-input-wrapper">
                    <input 
                        type="text" 
                        placeholder="Search destinations..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                    <span className="search-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                </div>
            </div>

            <div className="cardsContainer">
                {
                    filteredTours.length > 0 ? (
                        filteredTours.map((tour) => {
                            return <Card key={tour.id} tour={tour} getRemoveId={getId}/>
                        })
                    ) : (
                        <div className="no-results">No destinations found matching your search.</div>
                    )
                }
            </div>

            <div className="contact-section">
                <button 
                    className="contact-toggle-btn"
                    onClick={() => setShowContact(!showContact)}
                >
                    {showContact ? "Hide Contact Details" : "Contact Us"}
                </button>
                
                {showContact && <Contact />}
            </div>
        </div>
    )
}

export default Tours
