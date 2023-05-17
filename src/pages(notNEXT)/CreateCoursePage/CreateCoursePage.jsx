import React, {useEffect, useState} from 'react';
import styles from './styles/CreateCoursePage.module.scss';
import generalStyles from './styles/general.module.scss';
import Image from "next/image";
import createImage from '@assets/createCourse.png';
import createCourseImage from '@assets/addCourse.png';
import returnImg from '@assets/return.png';
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import FirstStepForm from "@/pages(notNEXT)/CreateCoursePage/FirstStepForm";
import SecondStepForm from "@/pages(notNEXT)/CreateCoursePage/SecondStepForm";
import {scrollToUp} from "@/app/lib/features/animations/scroll";
import BackgroundShadow from "@/app/lib/features/contexts/BGShadowContext";
import {useDispatch} from "react-redux";
import {setStatus} from "@/app/lib/store/actions/courseActions";
import {statuses} from "@/app/lib/store/constants/generalConstants";

const CreateCoursePage = ({course}) => {
    const [step, setStep] = useState(1);
    const [style, setStyle] = useState({});
    const [isBGShadow, setIsBGShadow] = useState(false);
    const dispatch = useDispatch();
    const nextStep = () => {
        setStep(step + 1);
        scrollToUp(1000, 120, 50);
    }
    const prevStep = () => {
        setStep(step - 1);
        scrollToUp(1000, 120, 50);
    }
    const createCourse = () => {
        dispatch(setStatus(statuses.FETCHING));
    }
    useEffect(() => {
        if (step === 2) {
            setStyle({
                transform: 'translateX(calc(-100% - 2.5rem))',
            });
        } else {
            setStyle({
                transform: 'translateX(0)',
            });
        }
    }, [step])
    return (
        <BackgroundShadow.Provider value={[isBGShadow, () => setIsBGShadow(prev => !prev)]}>
            <main className={`${styles.main}`}>
                <div className={`${isBGShadow ? generalStyles.bgShadow : ''}`}></div>
                <section className={`${styles.section} 
                         shadow-gray-600 shadow-lg`
                }>
                    <div className={styles.container}>
                        <h1 className={styles.formTitle}>
                            <Image src={createImage} alt={''} width={45}/>
                            <p>
                                Creating a course
                            </p>
                        </h1>
                        <div className={`${isBGShadow ? generalStyles.bgShadow : ''}`}></div>
                        <div className={styles.formSteps} style={style}>
                            <FirstStepForm course={course}/>
                            <SecondStepForm content={course?.content} courseID={course?._id}/>
                        </div>
                        <div className={styles.navButtons}>
                            {step === 2
                            ? <>
                                <DarkBtnWithImg height={40} img={createCourseImage}
                                                widthImg={20} onClick={createCourse} width={140}
                                >Create</DarkBtnWithImg>
                                <DarkBtnWithImg height={40} img={returnImg}
                                                widthImg={15} onClick={prevStep} width={140}
                                >Back</DarkBtnWithImg>
                            </>
                            : <DarkBtnWithImg height={40} onClick={nextStep}>Continue</DarkBtnWithImg>
                            }
                        </div>
                        <span className={styles.progress}>{step}/2</span>
                    </div>
                </section>
            </main>
        </BackgroundShadow.Provider>
    );
};

export default CreateCoursePage;