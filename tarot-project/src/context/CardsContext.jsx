import React, { createContext, useState, useEffect } from 'react';
import { getAllCards } from '../api/services';

export const CardsContext = createContext();

export function CardsProvider({ children }) {
    const [cards, setCards] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    const ac = new AbortController();
    getAllCards(ac.signal)
    .then(data => { setCards(data); setLoading(false); })
    .catch(err => {
        if (err.name !== 'AbortError') { setError(err); setLoading(false); }
    });
    return () => ac.abort();
    }, []);

    return (
    <CardsContext.Provider value={{ cards, loading, error }}>
    {children}
    </CardsContext.Provider>
);
}
