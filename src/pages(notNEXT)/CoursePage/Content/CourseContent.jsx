import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import Week from "@/pages(notNEXT)/CoursePage/Content/Week";

const CourseContent = ({content, isBought}) => {

    return (
        <div className='mt-4 mb-8'>
            <Accordion.Root type={"multiple"}
                            defaultValue={['item-1']}
            >
            {content.map((week, num) =>
                   <Week {...week} num={num + 1}
                         key={week._id} isBought={num === 0 || isBought}/>
            )}
            </Accordion.Root>
        </div>
    );
};

export default CourseContent;