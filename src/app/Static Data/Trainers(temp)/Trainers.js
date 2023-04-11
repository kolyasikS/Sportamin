import Mikasa from '@assets/mikasa.jpg';
import Eren from '@assets/eren.jpg';
import {v4} from 'uuid';

const TopTrainers = [
    {
        id: v4(),
        src: Mikasa,
        name: 'David',
        surname: 'Williams',
        activity: 'Master of Sport, public speaker, blogger',
        rating: 3,
        amountStudents: 25750,
        amountCourses: 15,
        languages: ['English', 'Ukrainian'],
        description: 'The basis of success is the relationship between coach and athlete. The great ones can only succeed when there is the right atmosphere. Athletes should enjoy the game and work, demonstrate their talents.',
    },
    {
        id: v4(),
        src: Mikasa,
        name: 'Rosy',
        surname: 'Rivera',
        activity: 'Master of Sport, public speaker, blogger',
        rating: 4.6,
        amountStudents: 22750,
        amountCourses: 18,
        languages: ['English', 'French'],
        description: 'The basis of success is the relationship between coach and athlete. The great ones can only succeed when there is the right atmosphere. Athletes should enjoy the game and work, demonstrate their talents.',
    },
    {
        id: v4(),
        src: Mikasa,
        name: 'Matt',
        surname: 'Stonie',
        activity: 'Master of Sport, public speaker, blogger',
        rating: 4.1,
        amountStudents: 10750,
        amountCourses: 10,
        languages: ['English', 'German'],
        description: 'The basis of success is the relationship between coach and athlete. The great ones can only succeed when there is the right atmosphere. Athletes should enjoy the game and work, demonstrate their talents.',
    },
    {
        id: v4(),
        src: Mikasa,
        name: 'Sofia',
        surname: 'Lauren',
        activity: 'Master of Sport, public speaker, blogger',
        rating: 3.8,
        amountStudents: 15750,
        amountCourses: 13,
        languages: ['English', 'Ukrainian'],
        description: 'The basis of success is the relationship between coach and athlete. The great ones can only succeed when there is the right atmosphere. Athletes should enjoy the game and work, demonstrate their talents.',
    },
    {
        id: v4(),
        src: Eren,
        name: 'Eren',
        surname: 'Jaeger',
        activity: 'Suicidal Blockhead',
        rating: 5,
        amountStudents: 1,
        amountCourses: 1,
        languages: ['English', 'French'],
        description: 'If someone tries to steal my freedom away.. I won\'t hesitate to take away theirs',
    },
];

export default TopTrainers;