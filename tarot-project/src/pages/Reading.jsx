const positions = ['Past','Present','Future'];
const [selected, setSelected] = useState([]); // [{id, card, position}]

function onSelect(card) {
    if (selected.some(s => s.id === card.id)) return;
  if (selected.length >= 3) return; // можно показать toast
    setSelected(prev => [...prev, { id: card.id, card, position: positions[prev.length] }]);
}
function onRemove(id) {
    setSelected(prev => prev.filter(s => s.id !== id));
}
function reset() { setSelected([]); }
