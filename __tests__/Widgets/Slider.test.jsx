import {getByRole, render, screen, act, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom';
import Introduction from "@/pages(notNEXT)/HomePage/Introduction/Introduction";
import Slides from '@/app/Static Data/Slides/Slides';
import {SliderFullScreen} from "@/widgets/api/Widgets";
import React from "react";

describe('moving slider', () => {
    let container;

    it('move slider to right', async () => {
        await act(async () => {
            container = render(<SliderFullScreen slides={Slides}/>);
        });

        const rightBtn = screen.getByRole('button', {name: 'right-btn'});
        expect(rightBtn).toBeInTheDocument();

        let wrapperSliders;
        await waitFor(() => {
            // noinspection JSCheckFunctionSignatures
            wrapperSliders = screen.getAllByTestId('slide-test');
        })
        expect(wrapperSliders[1]).toHaveClass('slideWrapper active');
        await act(async () => {
            await rightBtn.click();
        });
        expect(wrapperSliders[2]).toHaveClass('slideWrapper active');
        expect(wrapperSliders[1]).not.toHaveClass('slideWrapper active');
    });
    // noinspection DuplicatedCode
    it('move slider to left', async() => {
        await act(async () => {
            container = render(<SliderFullScreen slides={Slides}/>);
        });

        const leftBtn = screen.getByRole('button', {name: 'left-btn'});
        expect(leftBtn).toBeInTheDocument();

        let wrapperSliders;
        await waitFor(() => {
            // noinspection JSCheckFunctionSignatures
            wrapperSliders = screen.getAllByTestId('slide-test');
        })
        screen.debug();
        console.log('WRAPPER', wrapperSliders);
        expect(wrapperSliders[1]).toHaveClass('slideWrapper active');
        act(() => {
            leftBtn.click();
        });
        expect(wrapperSliders[1]).not.toHaveClass('slideWrapper active');
        expect(wrapperSliders[wrapperSliders.length - 2]).toHaveClass('slideWrapper active');
    });
});