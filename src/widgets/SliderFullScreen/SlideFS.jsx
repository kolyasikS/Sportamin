import React from 'react';
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
import styles from './SliderFullScreen.module.scss';
const SlideFs = ({title, mainWords, description, onClick, active}) => {
    return (
        <div className={`${styles.slideWrapper} ${active ? 'active' : ''}`} data-testid={'slide-test'}>
            <div className={styles.slide}>
                <h1><span>{mainWords}</span> {title}</h1>
                <p className={'px-5'}>{description}</p>
                <RBButton width={200} height={60} uppercase={true}
                    onclick={onClick}
                >More...</RBButton>
            </div>
        </div>
    );
};

export default SlideFs;