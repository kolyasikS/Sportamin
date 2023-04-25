import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import TestImage from "@assets/muhamed.jpg";
import {Avatar} from "@/shared/ui/Logos/api/Logos";
import styles from './styles/ProfileMenu.module.scss';
import Link from "next/link";
import {logout} from "@/app/lib/controllers/authController";
import {useDispatch, useSelector} from "react-redux";
const ProfileMenu = () => {
    const dispatch = useDispatch();
    const userID = useSelector(state => state.authReducer.user.id);
    const toLogout = async () => {
        await logout(dispatch);
    }
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className={styles.menuBtn}>
                <Avatar src={TestImage}/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className={styles.content} sideOffset={5}>
                    {/*<DropdownMenu.Label>
                    </DropdownMenu.Label>*/}
                    <Link href={`/profile/${userID}`} className={styles.menuItem}>
                        <DropdownMenu.Item>
                            Profile
                        </DropdownMenu.Item>
                    </Link>
                    <Link href={`/profile/${userID}/courses`} className={styles.menuItem}>
                        <DropdownMenu.Item>
                            Your courses
                        </DropdownMenu.Item>
                    </Link>
                    <DropdownMenu.Separator className={styles.menuSeparator}/>
                    <DropdownMenu.Item className={styles.menuItem} onClick={toLogout}>
                        Logout
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export default ProfileMenu;