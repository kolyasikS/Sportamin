import {createReducer} from "@reduxjs/toolkit/src";
import {setAuth, setUser} from "@/app/lib/store/actions/authActions";
import {statuses} from "@/app/lib/store/constants/courseConstants";
import {
    setDays, setExercises,
    setGeneralInformation,
    setProvidedItems,
    setRequirements,
    setStatus, setWeeks
} from "@/app/lib/store/actions/courseActions";
import {nameDayOfWeek} from "@/app/lib/features/date";

const defaultState = {
    status: statuses.CREATING,
    providingItems: [],
    requirements: [],
    description: '',
    title: '',
    language: '',
    subtitle: '',
    price: '',
    content: [],
}

const reducer = createReducer(
    defaultState,
    (builder) => {
        builder
            .addCase(setStatus, (state, action) => {
                state.status = action.payload.status;
                if (state.status === statuses.CREATING) {
                    state = defaultState;
                }
            })
            .addCase(setProvidedItems, (state, action) => {
                state.providingItems = action.payload.providingItems;
            })
            .addCase(setRequirements, (state, action) => {
                state.requirements = action.payload.requirements;
            })
            .addCase(setGeneralInformation, (state, action) => {
                const generalInformation = action.payload.generalInformation;
                state.title = generalInformation.title;
                state.language = generalInformation.language;
                state.subtitle = generalInformation.caption;
                state.price = generalInformation.price;
                state.description = generalInformation.description;
            })
            .addCase(setWeeks, (state, action) => {
                state.content = action.payload.weeks.map(() => {
                });
            })
            .addCase(setDays, (state, action) => {
                const week = action.payload.days[0].week;
                state.content[week + 1].days = action.payload.days.map(() => {
                    days: []
                });
            })
            .addCase(setExercises, (state, action) => {
                console.log(action.payload.exercises);
                const exercises = action.payload.exercises;
                const weeks = exercises.reduce((max, exer) => {
                    if (exer.week > max) {
                        max = exer.week;
                    }
                    return max;
                }, 0);
                if (!state.content.length) {
                    state.content = [...new Array(weeks)].map(() => ({days: []}));
                }

                for (let i = 0; i < weeks; i++) {
                    const days = exercises.reduce((max, exer) => {
                        if (exer.week == i + 1 && exer.day > max) {
                            max = exer.day;
                        }
                        return max;
                    }, 0);
                    console.log('content', state.content);
                    state.content[i].days = [...new Array(days)].map(() => ({}));
                }
                for (let i = 0; i < action.payload.exercises.length; i++) {
                    const week = action.payload.exercises[i].week;
                    const day = action.payload.exercises[i].day;
                    console.log(week, day, state.content);
                    state.content[week - 1].days[day - 1] = {
                        dayOfWeek: nameDayOfWeek(day),
                        exercises: action.payload.exercises.filter(item => {
                            if (item.day === day && item.week === week) {
                                return true;
                            } else {
                                return false;
                            }
                        }).map(item => {
                            return {
                                muscles: item.muscles,
                                title: item.title,
                                technique: item.technique
                            };
                        })
                    };
                }
            })
    }
);
export default reducer;