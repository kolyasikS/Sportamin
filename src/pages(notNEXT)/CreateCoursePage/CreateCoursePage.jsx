import React, {useEffect, useState} from 'react';
import styles from './styles/CreateCoursePage.module.scss';
import Image from "next/image";
import createImage from '@assets/createCourse.png';
import createCourseImage from '@assets/addCourse.png';
import returnImg from '@assets/return.png';
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import {MainInput, MainTextArea} from "@/shared/ui/Inputs/api/Inputs";
import {DoubleTitleList, MainList} from "@/widgets/api/Widgets";
import languages from "@/app/Static Data/Languages/Languages";
import ProvidedItems from "@/pages(notNEXT)/CreateCoursePage/ProvidedItems";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import FirstStepForm from "@/pages(notNEXT)/CreateCoursePage/FirstStepForm";
import SecondStepForm from "@/pages(notNEXT)/CreateCoursePage/SecondStepForm";
import {scrollToUp} from "@/app/lib/features/animations/scroll";
import CreatingExerciseMenu from "@/pages(notNEXT)/CreateCoursePage/Content/CreatingExerciseMenu";
const CreateCoursePage = () => {
    const [step, setStep] = useState(1);
    const [transform, setTransform] = useState('');
    const nextStep = () => {
        setStep(step + 1);
        scrollToUp(1000, 120, 50);
    }
    const prevStep = () => {
        setStep(step - 1);
        scrollToUp(1000, 120, 50);
    }
    useEffect(() => {
        if (step === 2) {
            setTransform('translateX(calc(-100% - 2.5rem))');
        } else {
            setTransform('translateX(0)');
        }
    }, [step])
    return (
        <main className={styles.main}>
            <section className={`${styles.section} 
            shadow-gray-600 shadow-lg`}>
                <div className={styles.container}>
                    <h1 className={styles.formTitle}>
                        <Image src={createImage} alt={''} width={45}/>
                        <p>
                            Creating a course
                        </p>
                    </h1>
                    <div className={styles.formSteps} style={{transform}}>
                        <FirstStepForm/>
                        <SecondStepForm/>
                    </div>
                    <div className={styles.navButtons}>
                        {step === 2
                        ? <>
                            <DarkBtnWithImg height={40} img={createCourseImage}
                                            widthImg={20}
                            >Create</DarkBtnWithImg>
                            <DarkBtnWithImg height={40} img={returnImg}
                                            widthImg={15} onClick={prevStep}
                            >Back</DarkBtnWithImg>
                        </>
                        : <DarkBtnWithImg height={40} onClick={nextStep}>Continue</DarkBtnWithImg>
                        }
                    </div>
                    <span className={styles.progress}>{step}/2</span>
                </div>
                <CreatingExerciseMenu/>
            </section>
        </main>
    );
};

export default CreateCoursePage;