import React, {useRef, useState} from 'react';
import {DialogModalW} from "@/widgets/api/Modals";
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import styles from '../styles/EditPasswordModal.module.scss';

const EditPasswordModal = ({children, updateUser}) => {
    const newPasswordRef = useRef(null);
    const prevPasswordRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const close = async (isApply) => {
        let newPass = newPasswordRef.current.value;
        let prevPass = prevPasswordRef.current.value;
        if ((!newPass || !prevPass) && isApply === true) {
            setError('Both fields must be filled!');
            return;
        }
        setIsOpen(false);
        setError('');
        updateUser({
                new: newPass,
                prev: prevPass
        })
            .then(res => {

            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <DialogModalW isOpen={isOpen} setIsOpen={setIsOpen}
                     description={`You can change your password here`}
                     title={`Change password`} triggerStyle={styles.trigger}
                     trigger={children} close={close} error={error}
        >
            <MainInput bgColor={'#161b22'}
                       color={'inherit'} width={'100%'}
                       ref={prevPasswordRef}
            >
                Previous
            </MainInput>
            <MainInput bgColor={'#161b22'}
                       color={'inherit'} width={'100%'}
                       ref={newPasswordRef}
            >
                New
            </MainInput>
        </DialogModalW>
    );
};

export default EditPasswordModal;