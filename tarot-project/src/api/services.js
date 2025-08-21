const API_BASE = 'https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot';

export async function getAllCards(signal) {
    const res = await fetch(API_BASE, { signal });
    if (!res.ok) throw new Error(`Failed fetching cards: ${res.status}`);
    return res.json();
}

export async function getCardById(id, signal) {
    const res = await fetch(`${API_BASE}/${id}`, { signal });
    if (!res.ok) throw new Error(`Failed fetching card ${id}: ${res.status}`);
    return res.json();
}
