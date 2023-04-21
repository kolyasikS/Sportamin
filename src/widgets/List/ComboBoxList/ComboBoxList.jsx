import React, {useState} from 'react';
import {ComboBox} from "@/shared/ui/Inputs/api/Inputs";

const ComboBoxList = ({options, setOptions}) => {
    return (
        <ul>
            {options.map(option =>
                <ComboBox key={option.id}
                          isActive={option.isActive}
                          toggleActive={() =>
                              setOptions(options.map(prevOpt => prevOpt.id === option.id
                                  ? {...prevOpt, isActive: !prevOpt.isActive}
                                  : prevOpt))
                          }
                >
                    {option.title}
                </ComboBox>
            )}
        </ul>
    );
};

export default ComboBoxList;