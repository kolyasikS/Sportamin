import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/CreatingExerciseMenu.module.scss';
import {MainInput, MainTextArea} from "@/shared/ui/Inputs/api/Inputs";
import Image from "next/image";
import exerciseImg from "@assets/exercise.png";
import generalStyles from "@/pages(notNEXT)/CreateCoursePage/styles/general.module.scss";
import {ComboBoxList} from "@/widgets/api/Widgets";
import muscles from "@/app/Static Data/Muscles/muscles";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import addImg from '@assets/apply.png';
import cancelImg from '@assets/cancel.png';
import {v4} from "uuid";
const CreatingExerciseMenu = ({addExercise, exercise}) => {
    const techniqueRef = useRef();
    const titleRef = useRef();
    const [options, setOptions] = useState(muscles);
    useEffect(() => {
        if (exercise) {
            titleRef.current.value = exercise.title;
            techniqueRef.current.value = exercise.technique;
            setOptions(options.map(opt =>
                exercise.muscles.includes(opt.title)
                    ? {...opt, isActive: true}
                    : opt
            ));
        }
    }, []);
    const add = () => {
        const newExercise = {
            id: exercise ? exercise.id : v4(),
            title: titleRef.current.value,
            technique: techniqueRef.current.value,
            muscles: options.filter(option => option.isActive).map(item => item.title),
        }
        addExercise(newExercise);
    }
    const cancel = () => {
        addExercise(null);
    }
    return (
        <div className={`${styles.menu} shadow-gray-700 shadow-md`}>
            <h1 className={styles.title}>
                <Image src={exerciseImg} alt={''} width={45}/>
                <p>
                    Adding a exercise
                </p>
            </h1>
            <div className={styles.menuInner}>
                <div>
                    <MainInput bgColor={'#1b2331'} color={'inherit'}
                               width={'100%'} ref={titleRef}
                    >
                        Title
                    </MainInput>
                    <h2 className={generalStyles.formItemTitle}>Muscles</h2>
                    <ComboBoxList setOptions={setOptions} options={options}/>
                </div>
                <div className={styles.textareaBlock}>
                    <h2 className={generalStyles.formItemTitle}>Technique</h2>
                    <MainTextArea message={'Type here...'} color={'inherit'}
                                  bgColor={'#151a1f'} ref={techniqueRef}
                                  resize={'none'} height={400}
                    />
                    <div className={styles.features}>
                        <DarkBtnWithImg height={45} width={'100%'}
                                        img={addImg} widthImg={20}
                                        onClick={add}
                        >Add</DarkBtnWithImg>
                        <DarkBtnWithImg height={45} width={'100%'}
                                        img={cancelImg} widthImg={20}
                                        onClick={cancel}
                        >Cancel</DarkBtnWithImg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatingExerciseMenu;