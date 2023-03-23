import React from 'react';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import styles from '../styles/Calculator.module.scss';
import {BMICalculator} from "@/widgets/api/Widgets";
const Calculator = () => {
    return (
        <section className={styles.calculatorSection}>
            <div className={styles.calculator}>
                <TitleWithImage>BMI calculator</TitleWithImage>
                <BMICalculator/>
                <div className={styles.titleForTable}>
                    <TitleWithImage fontSize={24} image={false}>Body mass index</TitleWithImage>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <table className={styles.tableBMI}>
                    <tbody>
                        <tr className={styles.headerRow}>
                            <th>BMI</th>
                            <th>Classification</th>
                        </tr>
                        <tr>
                            <td>18-25</td>
                            <td>Normal weight</td>
                        </tr>
                        <tr>
                            <td>25-30</td>
                            <td>Over weight</td>
                        </tr>
                        <tr>
                            <td>30-40</td>
                            <td>Obesity weight</td>
                        </tr>
                        <tr>
                            <td>40 - above</td>
                            <td>Morbid weight</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Calculator;