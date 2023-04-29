import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import styles from './WarningModalW.module.scss';

const WarningModalW = ({open, title, children, applyTitle,
                           cancel, apply, description}) => {
    return (
        <AlertDialog.Root open={open}>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className={styles.overlay}/>
                <AlertDialog.Content className={styles.content}>
                    <AlertDialog.Title className={styles.title}>{title}</AlertDialog.Title>
                    <AlertDialog.Description className={styles.description}>{description}</AlertDialog.Description>
                    <div className={styles.features}>
                        <div className={styles.children}>
                            {children}
                        </div>
                        <div className={styles.defaultFeatures}>
                            <AlertDialog.Cancel className={styles.cancelBtn}
                                                onClick={cancel}>
                                Cancel
                            </AlertDialog.Cancel>
                            <AlertDialog.Action className={styles.actionBtn}
                                                onClick={apply}>
                                {applyTitle}
                            </AlertDialog.Action>
                        </div>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
};

export default WarningModalW;