import React from 'react';
import styles from "@/pages(notNEXT)/CoursePage/styles/PurchaseAdv.module.scss";
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import {buyCourse} from "@/app/lib/controllers/userController";
import {useDispatch, useSelector} from "react-redux";

const PurchaseAdv = ({price, courseId, trainerId}) => {
    const userId = useSelector(state => state.authReducer?.user?.id);
    const dispatch = useDispatch();
    const buy = async () => {
        await buyCourse(dispatch, trainerId, userId, courseId);
    }

    return (
        <div className={`${styles.headerPurchase} shadow-gray-600 shadow-lg`}>
            <div className={styles.headerPurchaseInfo}>
                <span className={styles.price}>${price}</span>
                <p>Full Lifetime Access</p>
            </div>
            <DarkBtnWithImg height={50} width={'100%'} onClick={buy}>Buy this course</DarkBtnWithImg>
        </div>
    );
};

export default PurchaseAdv;