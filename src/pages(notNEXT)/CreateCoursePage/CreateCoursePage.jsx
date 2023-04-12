import React from 'react';
import styles from './styles/CreateCoursePage.module.scss';
import Image from "next/image";
import createImage from '@assets/createCourse.png';
import {HorizontalSeparator} from "@/shared/ui/api/separators";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {DoubleTitleList, MainList} from "@/widgets/api/Widgets";
import languages from "@/app/Static Data/Languages/Languages";
const CreateCoursePage = () => {
    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.formHeader}>
                    <h1 className={styles.formTitle}>
                        <Image src={createImage} alt={''} width={45}/>
                        <p>
                            Creating a course
                        </p>
                    </h1>
                    <form className={styles.form}>
                        <HorizontalSeparator color={'#0d8068'}>General information</HorizontalSeparator>
                        <div className={styles.formInner}>
                            <MainInput bgColor={'#161b22'} color={'inherit'}
                                width={'100%'}
                            >
                                Title
                            </MainInput>
                            <MainInput bgColor={'#161b22'} color={'inherit'}
                                width={'100%'}
                            >
                                Caption
                            </MainInput>
                            <DoubleTitleList options={languages} width={'100%'}
                                             sortPath={''} title={'Language'} setSort={() => {}}
                            />
                            <MainInput bgColor={'#161b22'} color={'inherit'}
                                       width={'100%'}
                            >
                                Price ($)
                            </MainInput>
                        </div>
                        <h2 className={styles.formItemTitle}>What do course provide?</h2>

                    </form>
                </div>
            </section>
        </main>
    );
};

export default CreateCoursePage;