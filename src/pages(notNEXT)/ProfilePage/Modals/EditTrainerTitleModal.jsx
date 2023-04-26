import React, {useRef, useState} from 'react';
import styles from '../styles/EditNameModal.module.scss';
import Image from "next/image";
import AddImage from "@assets/profile/add.png";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import DialogModal from "@/widgets/Modals/DialogModal/DialogModal";

const EditNameModal = ({title, setTitle, children}) => {
    const titleRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const close = () => {
        setIsOpen(false);
        setTitle(titleRef.current?.value);
    }
    return (
        <DialogModal isOpen={isOpen} setIsOpen={setIsOpen}
                     description={`You can change your title as trainer here`}
                     title={`Edit title`}
                     trigger={children} close={close} triggerStyle={`${styles.trigger} -top-[4px]`}
        >
            <MainInput bgColor={'#161b22'}
                       color={'inherit'} width={'100%'}
                       ref={titleRef} defaultValue={title}
            >
                Title
            </MainInput>
        </DialogModal>
    );
};

export default EditNameModal;