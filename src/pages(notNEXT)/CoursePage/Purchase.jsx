import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import verify from '@assets/course/verify.png';
import styles from './styles/Purchase.module.scss';
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import {WarningModalW} from "@/widgets/api/Modals";
import {RatingFeature} from "@/features/api/rating";
import {rateCourse} from "@/app/lib/controllers/courseController";
import {useDispatch, useSelector} from "react-redux";
import {updateBoughtCourseStatus} from "@/app/lib/controllers/userController";

const Purchase = ({courseId, rating, isDone, isRated}) => {
    const [isDoneState, setIsDone] = useState(isDone);
    const [isRatedState, setIsRated] = useState(isRated);
    const [warning, setWarning] = useState(false);
    const ratingRef = useRef(1);
    const dispatch = useDispatch();
    const userId = useSelector(state => state.authReducer?.user?.id);
    const markAsDone = () => {
        setWarning({
            applyTitle: 'Rate',
            title: 'Finishing the work',
            description: 'Please, rate it for promotion',
            cancelTitle: 'Later...',
            apply: rateWindow,
            cancel: () => {
                updateBoughtCourseStatus({id: userId}, courseId, {isDone: true}).then();
            },
        })
    }
    const rateWindow = () => {
        setWarning({
            applyTitle: 'OK',
            title: 'Rating',
            description: <RatingFeature isRated={isRatedState}
                                        setRating={(rating) => ratingRef.current = rating}
                                        setIsRated={setIsRated}/>,
            cancelTitle: 'Cancel',
            apply: rate,
            cancel: () => setIsRated(false),
            onClosed: () => {
                setIsDone(true);
                updateBoughtCourseStatus({id: userId}, courseId, {isDone: true}).then();
            },
        })
    }
    const rate = async () => {
        setWarning(null);
        rateCourse(dispatch, courseId, rating, ratingRef.current)
            .then(res => {
                if (res.isSuccess) {
                    setIsRated(true);
                    updateBoughtCourseStatus({id: userId}, courseId, {isRated: true}).then();
                } else {
                    setIsRated(false);
                }
            })
    }
    useEffect(() => {
        if (warning) {
            rateWindow();
        }
    }, [isRatedState])
    return (
        <div className={styles.purchase}>
            <div className={styles.purchaseInner}>
                <Image src={verify} alt={''} width={30}/>
                <h1>This course is bought</h1>
            </div>
            {isDoneState
                ? <div className={styles.doneInfo}>
                    <p>You have done this course</p>
                    {(!isRatedState || warning) && <DarkBtnWithImg height={50} onClick={rateWindow}>Rate the course</DarkBtnWithImg>}
                </div>
                : <DarkBtnWithImg height={40} onClick={markAsDone}>Mark as Done</DarkBtnWithImg>}
            {warning
                ? <WarningModalW open={warning}
                                 apply={warning.apply}
                                 applyTitle={warning.applyTitle}
                                 cancel={() => {
                                     setIsDone(true);
                                     setWarning(false);
                                     if (warning.cancel) {
                                        warning.cancel();
                                     }
                                 }}
                                 onClosed={warning.onClosed}
                                 cancelTitle={warning.cancelTitle}
                                 title={warning.title}
                                 description={warning.description}
                />
                : null
            }
        </div>
    );
};

export default Purchase;