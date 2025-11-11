import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import userEvent from "@testing-library/user-event";

describe('App - Container Component', () =>{
    it('always renders the Wrapper Component', () =>{
        render(<App />);
        const header = screen.queryByRole('banner');
        const footer = screen.queryByRole('contentinfo');
        
        expect(header).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });
    test('The first render contains the Landingpage Component', () =>{
        render(<App />);
        const firstDonationCall = screen.queryByRole('region', { name: /Sende Hoffnung - Spende Kleidung/i });
        const secondDonationCall = screen.queryByRole('region', { name: /So einfach kannst du helfen/i });
        const button = screen.queryByRole('button', { name: /Unterstützen/i });

        expect(firstDonationCall).toBeInTheDocument();
        expect(secondDonationCall).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
    test('A click on the support button switches to the RegOrChange-View', async () =>{
        render(<App />);
        const button = screen.queryByRole('button', { name: /Unterstützen/i });
        const user = userEvent.setup();
        
        await user.click(button);

        const newReg = await screen.findByRole('button', { name: /Neue Registrierung/i });

        expect(newReg).toBeInTheDocument();
        
    });
})