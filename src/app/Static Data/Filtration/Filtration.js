import {v4} from 'uuid';
export const filtrationItems = [
    {
        id: 1,
        title: 'Ratings',
        items: [
            {
                id: v4(),
                value: 4.5,
                title: '4.5 and up',
                isActive: true,
            },
            {
                id: v4(),
                value: 4,
                title: '4.0 and up',
                isActive: false,
            },
            {
                id: v4(),
                value: 3.5,
                title: '3.5 and up',
                isActive: false,
            },
            {
                id: v4(),
                value: 3,
                title: '3.0 and up',
                isActive: false,
            },
        ],
        multiple: false,
        isRated: true,
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
    }
];