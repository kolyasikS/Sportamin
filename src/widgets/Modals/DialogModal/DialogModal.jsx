import React, {useState} from 'react';
import * as Dialog from "@radix-ui/react-dialog";
import styles from './DialogModal.module.scss';
import Image from "next/image";
import AddImage from "@assets/profile/add.png";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";

const DialogModal = ({isOpen, children, setIsOpen, trigger, error,
                         title, description, close, triggerStyle}) => {
    return (
        <Dialog.Root open={isOpen}>
            <Dialog.Trigger className={`${styles.triggerBtn} ${triggerStyle}`} onClick={() => setIsOpen(true)}>
                {trigger}
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className={styles.overlay}/>
                <Dialog.Content className={styles.dialogContent}
                                onInteractOutside={close}
                                onEscapeKeyDown={close}>
                    <Dialog.Title className={styles.title}>{title}</Dialog.Title>
                    <Dialog.Description className={styles.description}>{description}</Dialog.Description>
                    <form action="" className={styles.form}>
                        {children}
                    </form>
                    <div className={styles.submit}>
                        <p className={styles.error}>{error}</p>
                        <Dialog.Close onClick={() => close(true)}>
                            <p>
                                Apply
                            </p>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close className={styles.crossClose} onClick={close}>
                        <svg width="15" height="15" viewBox="0 0 15 15"
                             fill="#fff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="#fff" fillRule="evenodd" clipRule="evenodd">
                            </path>
                        </svg>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default DialogModal;