import React from 'react';

import Card from './card';

export default function List() {
    const cards = [];
    for (let i = 0; i < 3; i++) {
        cards.push(
        <li>
            <Card />
        </li>
        );
    }
    return (
        <div>
            <h3>Example list</h3>
            <ul className="list">
              {cards}
            </ul>
        </div>
    );
}
