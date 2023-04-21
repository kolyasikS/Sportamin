import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import Exercise from "@/pages(notNEXT)/CoursePage/Content/Exercise";
import styles from '../styles/Content.module.scss';
import {ChevronDownIcon} from "@radix-ui/react-icons";
const Day = ({dayOfWeek, exercises, _id}) => {
    return (
        <Accordion.Item value={_id} className={styles.day}>
            <Accordion.Header className={styles.header}>
                <AccordionTrigger className={`${styles.dayAccTrigger} ${styles.accordionTrigger}`}>{dayOfWeek}</AccordionTrigger>
            </Accordion.Header>
            <Accordion.Content className={styles.dayContent}>
                {exercises.map(exer =>
                    <Exercise key={exer._id} {...exer}/>
                )}
            </Accordion.Content>
        </Accordion.Item>
    );
};
const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Trigger
        className={className}
        {...props}
        ref={forwardedRef}
    >
        {children}
        <ChevronDownIcon className={styles.accordionChevron}/>
    </Accordion.Trigger>
));
AccordionTrigger.displayName = 'AccordionTrigger';
export default Day;