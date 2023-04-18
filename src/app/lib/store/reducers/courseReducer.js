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
    providedItems: [],
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
                state.providedItems = action.payload.providingItems;
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
                const exercises = action.payload.exercises;
                const weeks = exercises.reduce((IDs, exer) => {
                    if (!IDs.includes(exer.week)) {
                        IDs.push(exer.week);
                    }
                    return IDs;
                }, []);
                state.content = [...new Array(weeks.length)].map(() => ({days: []}));

                console.log(state.content);
                for (let i = 0; i < weeks.length; i++) {
                    const days = exercises.reduce((IDs, exer) => {
                        if (exer.week === weeks[i] && !IDs.includes(exer.day)) {
                            IDs.push(exer.day);
                        }
                        return IDs;
                    }, []);
                    console.log('i', state.content[i]);
                    state.content[i].days = [...new Array(days.length)].map(() => ({}));
                }
                for (let i = 0; i < action.payload.exercises.length; i++) {
                    const week = action.payload.exercises[i].weekNum;
                    const day = action.payload.exercises[i].dayNum;
                    state.content[week - 1].days[day - 1] = {
                        dayOfWeek: nameDayOfWeek(day),
                        exercises: action.payload.exercises.filter(item => {
                            if (item.dayNum === day && item.weekNum === week) {
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