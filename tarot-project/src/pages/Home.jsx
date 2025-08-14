import React, { useContext } from 'react';
import { CardsContext } from '../context/CardsContext';
import CardGrid from '../components/CardGrid';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Home() {
    const { cards, loading, error } = useContext(CardsContext);
    if (loading) return <Loading />;
    if (error) return <Error error={error} />;
    return <CardGrid cards={cards} />;
}
