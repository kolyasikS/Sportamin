import React, {useRef, useState} from 'react';
import styles from '../styles/EditNameModal.module.scss';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import {DialogModalW} from "@/widgets/api/Modals";

const EditNameModal = ({fullName, setFullname, children}) => {
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const close = () => {
        setIsOpen(false);
        setFullname({
            name: nameRef.current?.value,
            surname: surnameRef.current?.value,
        });
    }
    return (
        <DialogModalW isOpen={isOpen} setIsOpen={setIsOpen}
                     description={`You can change your name and surname here`}
                     title={`Edit name`}
                     trigger={children} close={close} triggerStyle={`${styles.trigger} -top-[0px]`}
        >
            <MainInput bgColor={'#161b22'}
                       color={'inherit'} width={'100%'}
                       ref={nameRef} defaultValue={fullName.name}
            >
                Name
            </MainInput>
            <MainInput bgColor={'#161b22'}
                       color={'inherit'} width={'100%'}
                       ref={surnameRef} defaultValue={fullName.surname}
            >
                Surname
            </MainInput>
        </DialogModalW>
    );
};

export default EditNameModal;