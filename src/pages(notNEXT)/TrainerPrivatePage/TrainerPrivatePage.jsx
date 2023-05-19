import React from 'react';
import Image from "next/image";
import styles from './styles/TrainerPrivatePage.module.scss';
import {AnimBorderTranspBgButton} from "@/shared/ui/Buttons/api/Buttons";
import TrainerInfo from "@/pages(notNEXT)/TrainerPrivatePage/TrainerInfo";
import {getImageFromBase64} from "@/app/lib/features/image";
import website from '@assets/website.png';
import twitter from '@assets/twitter.png';
import facebook from '@assets/facebook.png';
import Link from "next/link";
const TrainerPrivatePage = ({name, surname, trainer, avatar}) => {
    return (
        <main className={styles.main}>
            <TrainerInfo name={name} surname={surname}
                trainer={trainer}
            />
            <aside className={styles.aside}>
                <Image src={`data:image/jpg;base64,${getImageFromBase64(avatar)}`} alt={''}
                    width={200} height={200}
                />
                <div className={styles.links}>
                    <AnimBorderTranspBgButton width={200} padding={50}
                                              uppercase={false}
                    >
                        <Link href={'#'}>
                            <Image src={website} alt={''} width={20}/>
                        </Link>
                        <p>Website</p>
                    </AnimBorderTranspBgButton>
                    <AnimBorderTranspBgButton width={200} padding={50}
                                              uppercase={false}
                    >
                        <Link href={'#'}>
                            <Image src={twitter} alt={''} width={20}/>
                        </Link>
                        <p>Twitter</p>
                    </AnimBorderTranspBgButton>
                    <AnimBorderTranspBgButton  width={200} padding={50}
                                               uppercase={false}
                    >
                        <Link href={'#'}>
                            <Image src={facebook} alt={''} width={20}/>
                        </Link>
                        <p>Facebook</p>
                    </AnimBorderTranspBgButton>
                </div>
            </aside>
        </main>
    );
};
export default TrainerPrivatePage;