import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import styles from './WarningModalW.module.scss';

const WarningModalW = ({open, title, children,
                           cancel, apply}) => {
    return (
        <AlertDialog.Root open={open}>
            <AlertDialog.Portal>
                <AlertDialog.Overlay className={styles.overlay}/>
                <AlertDialog.Content className={styles.content}>
                    <AlertDialog.Title className={styles.title}>{title}</AlertDialog.Title>
                    <AlertDialog.Description className={styles.description}>{children}</AlertDialog.Description>
                    <div className={styles.features}>
                        <AlertDialog.Cancel className={styles.cancelBtn}
                                            onClick={cancel}>
                            Cancel
                        </AlertDialog.Cancel>
                        <AlertDialog.Action className={styles.actionBtn}
                                            onClick={apply}>
                            Yes, delete the course
                        </AlertDialog.Action>
                    </div>
                </AlertDialog.Content>
            </AlertDialog.Portal>
        </AlertDialog.Root>
    );
};

export default WarningModalW;