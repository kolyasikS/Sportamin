import React from 'react';
import * as Accordion from "@radix-ui/react-accordion";
import Day from "@/pages(notNEXT)/CoursePage/Content/Day";
import styles from '../styles/Content.module.scss';
import {ChevronDownIcon} from "@radix-ui/react-icons";
import padlock from '@assets/course/padlock.png';
import Image from "next/image";
const Week = ({num, days, isBought}) => {
    return (
        <Accordion.Item className={`${styles.week}`}
                        value={`item-${num}`}
        >
            <Accordion.Header className={`${styles.header} ${styles.headerWeek} ${!isBought && styles.closed}`}>
                <AccordionTrigger className={`${styles.weekAccTrigger} ${styles.accordionTrigger} `}
                                  isBought={isBought}>Week {num}</AccordionTrigger>
            </Accordion.Header>
            {isBought && <Accordion.Content className={styles.weekContent}>
                <Accordion.Root type={"multiple"}
                                defaultValue={[days[0]._id]}
                >
                    {days.map(day =>
                        <Day {...day} key={day._id}/>
                    )}
                </Accordion.Root>
            </Accordion.Content>}
        </Accordion.Item>
    );
};
const AccordionTrigger = React.forwardRef(({ children, className, isBought, ...props }, forwardedRef) => {
    return (
        <Accordion.Trigger
            className={className}
            {...props}
            ref={forwardedRef}
        >
            {children}
            {isBought
                ? <ChevronDownIcon className={styles.accordionChevron}/>
                : <Image src={padlock} alt={''} width={20}/>
            }
        </Accordion.Trigger>
    )
});
AccordionTrigger.displayName = 'AccordionTrigger';

export default Week;