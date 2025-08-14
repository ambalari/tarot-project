import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardItem({ card }) {
const nav = useNavigate();
return (
    <button onClick={() => nav(`/card/${card.id}`)} className="card-back">
      {/* стилизованный задник карты. Можно CSS-анимацию flip на Reading */}
    <div className="card-back-inner">Tarot</div>
    </button>
);
}
