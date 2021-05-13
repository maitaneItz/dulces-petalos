import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
    it('muestra una flor', () => {
        render(<Home />);
        expect(screen.getByText('Orquídea')).toBeInTheDocument();
    })
})

