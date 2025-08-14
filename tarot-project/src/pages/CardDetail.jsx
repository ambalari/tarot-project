import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCardById } from '../api/services';

export default function CardDetail(){
const { id } = useParams();
const [card, setCard] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(()=>{
    const ac = new AbortController();
    getCardById(id, ac.signal)
    .then(data => { setCard(data); setLoading(false); })
    .catch(err => { if (err.name !== 'AbortError') setError(err); setLoading(false); });
    return () => ac.abort();
}, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!card) return <div>Card not found</div>;
return (
    <article>
    <h1>{card.arcaneName} — #{card.arcaneNumber}</h1>
    <img src={card.arcaneImage.imageSrc} alt={card.arcaneName} />
    <p>{card.arcaneDescription}</p>

    <section>
        <h2>{card.goddessName}</h2>
        <img src={card.goddessImage.imageSrc} alt={card.goddessName} />
        <p>{card.goddessDescription}</p>
    </section>
    </article>
);
}
