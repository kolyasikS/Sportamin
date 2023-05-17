import React, {useEffect, useState} from 'react';
import {DoubleTitleList} from "@/widgets/api/Widgets";

const FiltrationDoubleTitleList = ({title, options, sortPath, setSort,
                                      width}) => {
    const [activeOption, setActiveOption] = useState(options[0]);
    const optionClick = (option) => {
        const newActiveOption = options.find(item => item.id === option.id);
        const sort = {};
        sort[(sortPath || '') + newActiveOption.title.toLowerCase()] = -1;
        setSort(sort);

        setActiveOption(newActiveOption);
    }
    useEffect(() => {
        const sort = {};

        sort[(sortPath || '') + options[0].title.toLowerCase()] = -1;
        setSort(sort);
    }, [])
    return (
        <DoubleTitleList options={options} title={title}
                         width={width}
                         activeOption={activeOption}
                         setActiveOption={optionClick}
        />
    );
};

export default FiltrationDoubleTitleList;