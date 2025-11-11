import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Registry_Selection from '../Registry_Selection';

describe('Registry_Selection', () =>{
    it('contains a button for donations at the office', () =>{
        render(<Registry_Selection />);
        const officeBtn = screen.queryByRole('button', { name: /Übergabe an der Geschäftsstelle/i });

        expect(officeBtn).toBeInTheDocument();
    })
    it('contains a button for donations from home', () =>{
        render(<Registry_Selection />);
        const homeBtn = screen.queryByRole('button', { name: /Abholung per Sammelfahrzeug/i });

        expect(homeBtn).toBeInTheDocument();
    })
})