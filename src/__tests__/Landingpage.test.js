import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Landingpage from '../Landingpage';

describe('Landingpage', () =>{
    it('contains two information sections', () =>{
        render(<Landingpage />)
        const firstDonationCall = screen.queryByRole('region', { name: /Sende Hoffnung - Spende Kleidung/i });
        const secondDonationCall = screen.queryByRole('region', { name: /So einfach kannst du helfen/i });

        expect(firstDonationCall).toBeInTheDocument();
        expect(secondDonationCall).toBeInTheDocument();
    })
    it('contains a support button', () =>{
        render(<Landingpage />)
        const button = screen.queryByRole('button', { name: /Unterstützen/i });

        expect(button).toBeInTheDocument();
    })
})