import {getByRole, render, screen, act} from '@testing-library/react'
import HomePage from '@/pages';
import '@testing-library/jest-dom';
import Introduction from "@/pages(notNEXT)/HomePage/Introduction/Introduction";
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe('Introduction block', () => {
    it('button "Log in" exists', () => {
        render(<Introduction/>);

        const loginBtn = screen.getByRole('button', {name: /log in/i});
        expect(loginBtn).toBeInTheDocument();
    });
    it('redirect to /login', () => {
        render(<Introduction/>);
        const loginBtn = screen.getByRole('button', {name: /log in/i});
        act(() => {
            loginBtn.click();
        });

        expect(mockRouter).toMatchObject({
            asPath: '/login',
            pathname: '/login',
            query: {}
        });
    });
});