import React from 'react';
import Image from "next/image";
import styles from './Course.module.scss';
import checkMark from '@assets/check-mark.png';
import cross from '@assets/close.png';
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";

const Course = ({title, price, facilities}) => {
    return (
        <div className={styles.course}>
            <div className={styles.courseTitle}>
                <h1>{title}</h1>
            </div>
            <h3>
                <Image src={facilities['Includes Membership'] ? checkMark : cross} alt={''}
                    width={facilities['Includes Membership'] ? 20 : 15}
                />
                Includes Membership
            </h3>
            <h3>
                <Image src={facilities['Access To All Gym Facilities'] ? checkMark : cross} alt={''}
                    width={facilities['Access To All Gym Facilities'] ? 20 : 15}
                />
                Access To All Gym Facilities
            </h3>
            <h3>
                <Image src={facilities['Diet Plan Included'] ? checkMark : cross} alt={''}
                    width={facilities['Diet Plan Included'] ? 20 : 15}
                />
                Diet Plan Included
            </h3>
            <h3>
                <Image src={facilities['Health and Fitness Tips'] ? checkMark : cross} alt={''}
                    width={facilities['Health and Fitness Tips'] ? 20 : 15}
                />
                Health and Fitness Tips
            </h3>
            <h3>
                <Image src={facilities['Monday-Friday Gym Access'] ? checkMark : cross} alt={''}
                    width={facilities['Monday-Friday Gym Access'] ? 20 : 15}
                />
                Monday-Friday Gym Access
            </h3>
            <h3>
                <Image src={facilities['Full Access To Everything'] ? checkMark : cross} alt={''}
                    width={facilities['Full Access To Everything'] ? 20 : 15}
                />
                Full Access To Everything
            </h3>
            <h3>
                <Image src={facilities['No Additional Amenities'] ? checkMark : cross} alt={''}
                    width={facilities['No Additional Amenities'] ? 20 : 15}
                />
                No Additional Amenities
            </h3>
            <h2><span className={styles.dollarSpan}>$</span><span className={styles.priceSpan}>{price}</span>/month</h2>
            <div className={styles.buttonBlock}>
                <RBButton width={150} height={50} uppercase={true}>Buy now</RBButton>
            </div>
        </div>
    );
};

export default Course;