import React, {useRef, useState} from 'react';
import styles from '../styles/CreatingExerciseMenu.module.scss';
import {ComboBox, MainInput, MainTextArea} from "@/shared/ui/Inputs/api/Inputs";
import Image from "next/image";
import exercise from "@assets/exercise.png";
import generalStyles from "@/pages(notNEXT)/CreateCoursePage/styles/general.module.scss";
import {ComboBoxList} from "@/widgets/api/Widgets";
import muscles from "@/app/Static Data/Muscles/muscles";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import addImg from '@assets/apply.png';
import cancel from '@assets/cancel.png';
const CreatingExerciseMenu = () => {
    const techniqueRef = useRef();
    const [options, setOptions] = useState(muscles);

    return (
        <div className={`${styles.menu} shadow-gray-700 shadow-md`}>
            <h1 className={styles.title}>
                <Image src={exercise} alt={''} width={45}/>
                <p>
                    Adding a exercise
                </p>
            </h1>
            <div className={styles.menuInner}>
                <div>
                    <MainInput bgColor={'#1b2331'} color={'inherit'}
                               width={'100%'}
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
                        >Add</DarkBtnWithImg>
                        <DarkBtnWithImg height={45} width={'100%'}
                                        img={cancel} widthImg={20}
                        >Cancel</DarkBtnWithImg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatingExerciseMenu;