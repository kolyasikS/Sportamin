// noinspection JSCheckFunctionSignatures

import {getByRole, render, screen, act, waitFor, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom';
import Introduction from "@/pages(notNEXT)/HomePage/Introduction/Introduction";
import Slides from '@/app/Static Data/Slides/Slides';
import {BMICalculator} from "@/widgets/api/Widgets";
import React from "react";

describe(`calculator's performance`, () => {
    it('drop-down list', async () => {
        await act(async () => {
            await render(<BMICalculator/>);
        });
        const chooseBtn = document.querySelector('.defaultOptions');
        await act(async () => {
            await chooseBtn.click();
        });
        const optionsList = document.querySelector('.options');

        expect(optionsList).toBeInTheDocument();
    });
    it('calculate', async () => {
        const age = 19;
        const height = 175;
        const weight = 70;

        await act(async () => {
            await render(<BMICalculator/>);
        });
        const ageInput = document.querySelector('#age');
        const weightInput = document.querySelector('#weight');
        const heightInput = document.querySelector('#height');

        await act(() => {
            fireEvent.change(ageInput, {target: {value: age}});
            fireEvent.change(weightInput, {target: {value: weight}});
            fireEvent.change(heightInput, {target: {value: height}});
        });
        const calculateBtn = screen.getByRole('button', {name: 'Calculate'});
        const result = screen.getByRole('heading', {level: 2});
        await act(async () => {
            await calculateBtn.click();
        });
        expect(result).toHaveTextContent('BMI = 22.86');
    });
});