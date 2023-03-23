import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import styles from '../styles/Introduction.module.scss';
import {RBButton, SliderButton} from '../../../shared/ui/Buttons/api/Buttons';
import Slides from "@/app/Static Data/Slides/Slides";
import {Avatar, Loading, MainLogo} from "@/shared/ui/Logos/api/Logos";
import {Header, SliderFullScreen} from "@/widgets/api/Widgets";
import {useDispatch, useSelector} from "react-redux";
import TestImage from 'public/media/images/muhamed.jpg';
import {checkAuth} from "@/app/lib/controllers/authController";
const Introduction = () => {
    const [showSlider, setShowSlider] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const state = useSelector(state => state.authReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        setShowSlider(true);
    }, []);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth(dispatch, () => setIsLoading(false)).then();
        } else {
            setIsLoading(false);
        }
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