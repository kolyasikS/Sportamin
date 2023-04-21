import {v4} from 'uuid';
import {addLanguage, removeLanguage, setRange, setRating} from "@/app/lib/store/actions/filterActions";
import RatingBar from "@/shared/ui/Rating/RatingBar/RatingBar";
import React from "react";
import {value} from "lodash/seq";
export const filtrationItems = [
    {
        id: 1,
        title: 'Ratings',
        items: [
            {
                id: v4(),
                value: 4.5,
                children: <RatingBar rating={4.5}/>,
                title: '4.5 and up',
                isActive: true,
            },
            {
                id: v4(),
                value: 4,
                children: <RatingBar rating={4}/>,
                title: `4.0 and up`,
                isActive: false,
            },
            {
                id: v4(),
                value: 3.5,
                children: <RatingBar rating={3.5}/>,
                title: '3.5 and up',
                isActive: false,
            },
            {
                id: v4(),
                value: 3,
                children: <RatingBar rating={3}/>,
                title: '3.0 and up',
                isActive: false,
            },
        ],
        multiple: false,
        setActive: (value, dispatch) => {
            dispatch(setRating(value));
        }
    },
    {
        id: 2,
        title: 'Languages',
        items: [
            {
                id: v4(),
                value: 'English',
                title: 'English',
                isActive: true,
            },
            {
                id: v4(),
                value: 'Ukrainian',
                title: 'Ukrainian',
                isActive: false,
            },
            {
                id: v4(),
                value: 'French',
                title: 'French',
                isActive: false,
            },
            {
                id: v4(),
                value: 'German',
                title: 'German',
                isActive: false,
            },
        ],
        multiple: true,
        toggleActive: (value, filterState, dispatch) => {
            if (filterState.languages.includes(value)) {
                dispatch(removeLanguage(value));
            } else {
                dispatch(addLanguage(value));
            }
        }
    }
];
export const filtrationCoursesItems = [
    {
        id: 1,
        title: 'Ratings',
        items: [
            {
                id: v4(),
                value: 4.5,
                children: <RatingBar rating={4.5}/>,
                title: '4.5 and up',
                isActive: true,
            },
            {
                id: v4(),
                value: 4,
                children: <RatingBar rating={4}/>,
                title: `4.0 and up`,
                isActive: false,
            },
            {
                id: v4(),
                value: 3.5,
                children: <RatingBar rating={3.5}/>,
                title: '3.5 and up',
                isActive: false,
            },
            {
                id: v4(),
                value: 3,
                children: <RatingBar rating={3}/>,
                title: '3.0 and up',
                isActive: false,
            },
        ],
        multiple: false,
        setActive: (value, dispatch) => {
            dispatch(setRating(value));
        }
    },
    {
        id: 2,
        title: 'Languages',
        items: [
            {
                id: v4(),
                value: 'English',
                title: 'English',
                isActive: true,
            },
            {
                id: v4(),
                value: 'Ukrainian',
                title: 'Ukrainian',
                isActive: false,
            },
            {
                id: v4(),
                value: 'French',
                title: 'French',
                isActive: false,
            },
            {
                id: v4(),
                value: 'German',
                title: 'German',
                isActive: false,
            },
            {
                id: v4(),
                value: 'Italian',
                title: 'Italian',
                isActive: false,
            },
        ],
        multiple: true,
        toggleActive: (value, filterState, dispatch) => {
            if (filterState.languages.includes(value)) {
                dispatch(removeLanguage(value));
            } else {
                dispatch(addLanguage(value));
            }
        }
    },
    {
        id: 3,
        title: 'Price',
        items: [
            {
                id: v4(),
                minValue: 10,
                maxValue: 150,
                setRange: (dispatch, min, max) => {
                    dispatch(setRange({
                        min,
                        max
                    }))
                },
            }
        ],
        range: true,
        /*toggleActive: (value, filterState, dispatch) => {
            if (filterState.languages.includes(value)) {
                dispatch(removeLanguage(value));
            } else {
                dispatch(addLanguage(value));
            }
        }*/
    },
]