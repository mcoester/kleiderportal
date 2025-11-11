import Registry_Home from "../Registry_Home";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Registry_Home', () =>{
    it('contains a selection group for the type of clothing', () =>{
        const PLZ = 12345;
        render(<Registry_Home />);
        const typeOfClothing = screen.queryByRole('combobox', { name: /Art der Kleidung/i });

        expect(typeOfClothing).toBeInTheDocument();
    })
})