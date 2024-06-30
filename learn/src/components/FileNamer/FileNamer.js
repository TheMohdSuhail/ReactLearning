import React, { useState, useEffect } from 'react';
import './FileNamer.css';

export default function FileNamer() {
    const [name, setName] = useState('');
    const [alert, setAlert] = useState(false);

    useEffect(() => {
        const handleWindowClick = () => setAlert(false);
        if (alert) {
            window.addEventListener('click', handleWindowClick);
        } else {
            window.removeEventListener('click', handleWindowClick);
        }
        return () => window.removeEventListener('click', handleWindowClick);
    }, [alert]);

    const validate = event => {
        if (/\*/.test(name)) {
            event.preventDefault();
            setAlert(true);
            return;
        }
        setAlert(false);
    };

    const handleMoreInfoClick = event => {
        event.stopPropagation();
        setAlert(true);
    };

    return (
        <div className="wrapper">
            <div className="preview">
                <h2>Preview: {name}.js</h2>
            </div>
            <form>
                <label>
                    <p>Name:</p>
                    <input
                        name="name"
                        autoComplete="off"
                        onChange={event => setName(event.target.value)}
                    />
                </label>
                <div className='information-wrapper'>
                    <button
                        className="information"
                        onClick={handleMoreInfoClick}
                        type='button'
                    >
                        More Information
                    </button>
                    {alert && (
                        <div className='popup'>
                            <span role="img" aria-label="allowed">✅</span> Alphanumeric Characters
                            <br />
                            <span role="img" aria-label="not allowed">⛔️</span> *
                        </div>
                    )}
                </div>
                <div>
                    <button onClick={validate} type="submit">Save</button>
                </div>
            </form>
        </div>
    );
}