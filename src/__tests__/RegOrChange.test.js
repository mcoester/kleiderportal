import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RegOrChange from '../RegOrChange';

describe('RegOrChange', () =>{
    it('contains a button for a new registry and a button for existing registry', () =>{
        render(<RegOrChange />);
        const newRegistry = screen.queryByRole('button', { name: /Neue Registrierung/i });
        const existingReg = screen.queryByRole('button', { name: /Bestehende Registrierung/i });

        expect(newRegistry).toBeInTheDocument();
        expect(existingReg).toBeInTheDocument();
    })
})