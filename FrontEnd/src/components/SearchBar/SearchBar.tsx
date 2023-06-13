import React from 'react';


interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input 
      type="text" 
      placeholder="Buscar por nome..." 
      value={value} 
      onChange={(e) => onChange(e.target.value)}
      style={{
        position: 'fixed',
        right: '20px',
        top: '20px',
        padding: '10px',
        fontSize: '1rem',
        width: '200px',
        border: 'none',
        borderRadius: '20px',
        outline: 'none',
        boxShadow: '0 4px 6px 0 hsla(0, 0%, 0%, 0.2)',
      }}
    />
  );
}