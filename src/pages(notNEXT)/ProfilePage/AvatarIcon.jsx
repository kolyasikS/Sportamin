import React, {useEffect, useRef, useState} from 'react';
import Image from "next/image";
import styles from './styles/AvatarIcon.module.scss';
import camera from '@assets/profile/camera.png';
const srcImageDefaultValue = 'data:image/jpg;base64,'
const AvatarIcon = ({image, isEditing,
                    isCanceling, isApplying,
                    setUpdatedUser}) => {
    const [isImageHover, setIsImageHover] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(srcImageDefaultValue + image);
    const fileRef = useRef();

    useEffect(() => {
        if (fileRef.current) {
            fileRef.current.onchange = () => {
                const reader = new FileReader();
                reader.readAsDataURL(fileRef.current.files[0]);
                reader.onload = () => {
                    setUploadedImage(reader.result);
                };
            };
        }
    }, [fileRef.current]);

    useEffect(() => {
        if (isCanceling) {
            setUploadedImage(srcImageDefaultValue + image);
        }
    }, [isCanceling])
    useEffect(() => {
        if (isApplying) {
            if (srcImageDefaultValue + image === uploadedImage) {
                setUpdatedUser(() => null);

            } else {
                let substr = 'base64,';
                let endOfSubstr = uploadedImage.indexOf(substr) + substr.length;
                let newImageBase64 = uploadedImage.substring(endOfSubstr);
                setUpdatedUser(() => ({avatar: newImageBase64}));
            }
        }
    }, [isApplying])
    return (
        <label className={`${styles.container} ${isEditing && styles.pointer}`}
             onMouseEnter={() => setIsImageHover(true)}
             onMouseLeave={() => setIsImageHover(false)}>
            {isEditing && <input type={"file"} className={'w-0 h-0'}
                   ref={fileRef}
            />}
            <Image src={uploadedImage} alt={''}
                   width={120} height={120}
                   className={styles.avatar}
            >
            </Image>
            <div className={`${styles.uploadImage} ${isImageHover && isEditing ? styles.active : ''}`}>
                    <Image src={camera} alt={'camera'} width={25}/>
            </div>
        </label>
    );
};

export default AvatarIcon;