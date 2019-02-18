import React from 'react';

import './card.css';

export default class Card extends React.Component { 
    render() {
        const text  = 'Example card';
        return (
            <div className="card">
                {text}
            </div>
        );
    }
  
    render2() {
      
    }
}
