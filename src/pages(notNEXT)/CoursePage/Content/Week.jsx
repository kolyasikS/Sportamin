import React from 'react';
import * as Accordion from "@radix-ui/react-accordion";
import Day from "@/pages(notNEXT)/CoursePage/Content/Day";
import styles from '../styles/Content.module.scss';
import {ChevronDownIcon} from "@radix-ui/react-icons";
const Week = ({num, days}) => {
    return (
        <Accordion.Item className={styles.week}
                        value={`item-${num}`}
        >
            <Accordion.Header className={`${styles.header} ${styles.headerWeek}`}>
                <AccordionTrigger className={`${styles.weekAccTrigger} ${styles.accordionTrigger}`}>Week {num}</AccordionTrigger>
            </Accordion.Header>
            <Accordion.Content className={styles.weekContent}>
                <Accordion.Root type={"multiple"}
                                defaultValue={[days[0]._id]}
                >
                    {days.map(day =>
                        <Day {...day} key={day._id}/>
                    )}
                </Accordion.Root>
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

export default Week;