import {v4} from 'uuid';
export const filtrationItems = [
    {
        id: 1,
        title: 'Ratings',
        items: [
            {
                id: v4(),
                rating: 4.5,
                title: '4.5 and up',
                isActive: true,
            },
            {
                id: v4(),
                rating: 4,
                title: '4.0 and up',
                isActive: false,
            },
            {
                id: v4(),
                rating: 3.5,
                title: '3.5 and up',
                isActive: false,
            },
            {
                id: v4(),
                rating: 3,
                title: '3.0 and up',
                isActive: false,
            },
        ],
        multiple: false,
    },
    {
        id: 2,
        title: 'Languages',
        items: [
            {
                id: v4(),
                rating: 'English',
                title: 'English',
                isActive: true,
            },
            {
                id: v4(),
                rating: 'Ukrainian',
                title: 'Ukrainian',
                isActive: false,
            },
            {
                id: v4(),
                rating: 'French',
                title: 'French',
                isActive: false,
            },
            {
                id: v4(),
                rating: 'German',
                title: 'German',
                isActive: false,
            },
        ],
        multiple: true,
    }
];