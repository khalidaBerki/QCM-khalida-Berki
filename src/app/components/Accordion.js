'use client'; // Marque ce fichier comme un composant côté client

import React, { useState } from 'react'; // Importer React explicitement

// Composant principal Accordion
const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
          index,
        });
      })}
    </div>
  );
};

// Composant pour chaque section de l'Accordion
const AccordionItem = ({ children, isOpen, onToggle, index }) => {
  const panelId = `panel-${index}`;
  const headerId = `header-${index}`;

  return (
    <div style={{ marginBottom: '10px' }}>
      <button
        id={headerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        style={{
          display: 'block',
          padding: '10px',
          backgroundColor: isOpen ? '#704214' : '#954535' ,
          color: 'white',
          border: '1px solid #ccc',
          cursor: 'pointer',
          textAlign: 'left',
          width: '100%',
          fontSize: '16px',
          fontWeight: 'bold',
          position: 'relative',  // Pour positionner la flèche
        }}
      >
        {children[0]} {/* Titre de la section */}
        <span
          style={{
            position: 'absolute',
            right: '10px',  // Positionne la flèche à droite
            top: '50%',  // Centre la flèche verticalement
            transform: 'translateY(-50%)', // Aligne la flèche parfaitement au centre
            transition: 'transform 0.3s, color 0.3s', // Animation pour la rotation et la couleur
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', // Rotation de la flèche
            color: isOpen ? '#FDCB18 ' : '#ffffff',  // Change la couleur de la flèche quand la section est ouverte
          }}
        >
          ▼
        </span>
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        style={{
          display: isOpen ? 'block' : 'none',
          padding: '10px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ddd',
        }}
      >
        {children[1]} {/* Contenu de la section */}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem };
