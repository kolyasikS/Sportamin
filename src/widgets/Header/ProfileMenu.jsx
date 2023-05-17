import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {Avatar} from "@/shared/ui/Logos/api/Logos";
import styles from './styles/ProfileMenu.module.scss';
import Link from "next/link";
import {logout} from "@/app/lib/controllers/authController";
import {useDispatch, useSelector} from "react-redux";
import {signOut, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {getImageFromBase64} from "@/app/lib/features/image";

const ProfileMenu = ({avatar}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const userID = useSelector(state => state.authReducer.user.id);
    const {data: session} = useSession();
    const toLogout = async () => {
        await logout(dispatch);
        if (session) {
            await signOut();
        } else {
            await router.push('/login');
        }
    }
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger className={styles.menuBtn}>
                <Avatar src={getImageFromBase64(avatar)}/>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className={styles.content} sideOffset={5}>
                    {/*<DropdownMenu.Label>
                    </DropdownMenu.Label>*/}
                    <Link href={`/profile/${userID}`} className={'w-full'}>
                        <DropdownMenu.Item className={styles.menuItem}>
                                    Profile
                        </DropdownMenu.Item>
                    </Link>
                    <Link href={`/profile/${userID}/courses`} className={'w-full'}>
                        <DropdownMenu.Item  className={styles.menuItem}>
                            Your bought courses
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