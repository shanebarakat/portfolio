import React, { useState, useMemo, useCallback, useRef } from 'react';

function computeFilteredSorted(items, filter) {
  if (!Array.isArray(items) || items.length === 0) return [];
  const normalizedFilter = typeof filter === 'string' ? filter.trim().toLowerCase() : '';
  const matched = [];
  for (let i = 0; i < items.length; i += 1) {
    const item = items[i];
    if (!item) continue;
    const name = String(item.name || '').toLowerCase();
    if (normalizedFilter === '' || name.includes(normalizedFilter)) {
      matched.push(item);
    }
  }
  matched.sort((a, b) => {
    const na = String(a.name || '');
    const nb = String(b.name || '');
    return na.localeCompare(nb);
  });
  return matched;
}

export default function OptimizedList({ items = [], initialFilter = '', onSelect = () => {} }) {
  const [filter, setFilter] = useState(initialFilter);
  const selectionHistoryRef = useRef([]);

  const filteredItems = useMemo(() => computeFilteredSorted(items, filter), [items, filter]);

  const handleFilterChange = useCallback((event) => {
    setFilter(event && event.target ? event.target.value : '');
  }, []);

  const handleItemClick = useCallback(
    (item) => {
      selectionHistoryRef.current.push({ id: item && item.id, time: Date.now() });
      onSelect(item);
    },
    [onSelect]
  );

  return (
    <div>
      <input
        aria-label="Filter items"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter by name"
        type="text"
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={String(item && item.id || Math.random())}>
            <button type="button" onClick={() => handleItemClick(item)}>
              {String((item && item.name) || 'Unnamed')}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}