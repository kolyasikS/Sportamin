import React, {useState, useRef, useEffect} from 'react';
import styles from './styles/SocNet.module.scss';
import Image from "next/image";
import AddImage from '@assets/profile/add.png';
import {MainInput} from "@/shared/ui/Inputs/api/Inputs";
import DialogModal from "@/widgets/Modals/DialogModal/DialogModal";
const SocNet = ({title, image, links,
                isEditing,
                isApplying, setUpdatedUser}) => {
    const usernameRef = useRef(null);
    const linkRef = useRef(null);
    const [content, setContent] = useState(() => {
        let link = links.find(item => item.title === title);
        return link ? {link: link.link, title: link.title, username: link.username} : {};
    });
    const [isOpen, setIsOpen] = useState(false);
    const close = () => {
        setIsOpen(false);
        setContent({
            username: usernameRef.current?.value,
            link: linkRef.current?.value,
        });
    }
    useEffect(() => {
        if (isApplying) {
            if (content.username || content.link) {
                setUpdatedUser((prev) => ({
                        trainer:
                            prev.trainer.links.find(item => item.title === title)
                                ? {links: [...prev.trainer.links
                                        .filter(item => item.title !== title),
                                        {link: content.link, username: content.username, title}
                                    ]}
                                : {links: [...prev.trainer.links, {link: content.link, username: content.username, title}]}
                    })
                );
            } else {
                setUpdatedUser((prev) => {
                    let newLinks = [...prev.trainer.links
                        .filter(item => item.title !== title)
                    ];
                    if (prev.trainer.links.length === newLinks.length) {
                        return null;
                    }
                    return { trainer: {links: newLinks}};
                });
            }
        }
    }, [isApplying])
    return (
        isEditing || content.username || content.link
        ?  <DialogModal isOpen={isOpen} setIsOpen={setIsOpen}
                        description={`Fill up the form to students can find you in ${title}`}
                        title={`Add ${title}`}
                        trigger={content.username || content.link
                            ? <>
                                <Image src={image} alt={''} width={30}/>
                                <p className={styles.content}>{content.username || content.link}</p>
                            </>
                            : <>
                                <Image src={AddImage} alt={''} width={30}/>
                                <p className={styles.triggerTitle}>Add {title}</p>
                            </>
                        } close={close}
        >
            <MainInput bgColor={'#161b22'}
                       color={'inherit'} width={'100%'}
                       ref={usernameRef} defaultValue={content.username}
            >
                Username
            </MainInput>
            <MainInput bgColor={'#161b22'}
                       color={'inherit'} width={'100%'}
                       ref={linkRef} defaultValue={content.link}
            >
                Link
            </MainInput>
        </DialogModal>
        : <p className={styles.notIndicated}>Not indicated</p>
    );
};

export default SocNet;