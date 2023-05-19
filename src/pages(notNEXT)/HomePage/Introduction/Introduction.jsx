import React, {useEffect, useState} from 'react';
import styles from '../styles/Introduction.module.scss';
import Slides from "@/app/Static Data/Slides/Slides";
import {SliderFullScreen} from "@/widgets/api/Widgets";

const Introduction = () => {
    const [showSlider, setShowSlider] = useState(false);
    useEffect(() => {
        setShowSlider(true);
    }, []);


    return (
        <section>
            <div className={styles.mainIntro}>
                <div className={styles.introWrapper}>
                    {showSlider
                        ? <SliderFullScreen slides={Slides}/>
                        :  null
                    }
                </div>
            </div>
        </section>
    );
};

export default Introduction;