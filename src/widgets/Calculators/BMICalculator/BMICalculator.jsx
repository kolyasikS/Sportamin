import React, {useRef, useState} from 'react';
import styles from './BMICalculator.module.scss';
import {MainList} from "../../api/Widgets";
import Genders from "@/app/Static Data/Calculator/Genders";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {GBButton, RBButton} from "@/shared/ui/Buttons/api/Buttons";
const BmiCalculator = () => {
    const [BMI, setBMI] = useState(0);
    const ageRef = useRef();
    const heightRef = useRef();
    const weightRef = useRef();
    const [gender, setGender] = useState();
    const [error, setError] = useState(false);
    const calculate = () => {
        if (!weightRef.current.value
            || !heightRef.current.value
            || !ageRef.current.value) {
            setError(true);
        } else {
            let result = +weightRef.current.value /Math.pow(+heightRef.current.value / 100, 2);
            result = Math.round((result + Number.EPSILON) * 100) / 100;
            setBMI(result);
            setError(false);
        }
    };
    const clear = () => {
        weightRef.current.value = '';
        heightRef.current.value = '';
        ageRef.current.value = '';
        setGender(null);
    }
    return (
        <div className={styles.calculatorInner}>
            <MainList options={Genders} setOption={setGender} option={gender}/>
            <MainInput id={'age'} ref={ageRef}>Age</MainInput>
            <div className={`${styles.anthropometry}`}>
                <MainInput id={'height'} ref={heightRef}>Height (cm)</MainInput>
                <MainInput id={'weight'} ref={weightRef}>Weight (kg)</MainInput>
            </div>
            {error
                ? <h2 className={styles.error}>Fill up all fields!</h2>
                : <h2 className={styles.result}>BMI = {BMI}</h2>
            }
            <div className={styles.calculatorButtons}>
                <GBButton onclick={calculate}>Calculate</GBButton>
                <RBButton onclick={clear}>Clear</RBButton>
            </div>
        </div>
    );
};

export default BmiCalculator;