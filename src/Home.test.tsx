import React from 'react';
import { render, screen } from '@testing-library/react';

describe('Home', () => {
    it('muestra una flor', () => {
        render(<Home />);
        expect(screen.getByText('Orquídea')).toBeInTheDocument();
    })
})

function Home(){
    return(
        <>
        Orquídea
        </>
    )
}