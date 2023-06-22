import React, {useEffect, useRef, useState} from 'react';
import styles from "@/widgets/Header/styles/NavMenu.module.scss";
import Link from "next/link";
import useWindowSize from "@/app/lib/features/hooks/useWindowSize";

const NavMenu = () => {
    // eslint-disable-next-line no-unused-vars
    const [width, height] = useWindowSize(false);
    const [open, setOpen] = useState(false);
    const navRef = useRef();
    const triggerRef = useRef();
    const [status, setStatus] = useState(styles.closed);
    useEffect(() => {
        if (open) {
            setStatus(styles.opening);
        } else {
            setStatus(styles.closing);
        }
    }, [open]);
    useEffect(() => {
        if (status === styles.opening) {
            setTimeout(() => {
                setStatus(styles.opened);
            }, 50);
        } else if (status === styles.closing) {
            setTimeout(() => {
                setStatus(styles.closed);
            }, 50);
        }
    }, [status])
    const show = () => {
        if (open) {
            close();
            return;
        }
        navRef.current.focus();
        setOpen(true);
    }
    const close = (e) => {
        if (e?.relatedTarget === triggerRef.current) {
            return;
        }
        setOpen(false);
    }

    return (
        width > 1024
            ? <nav className={styles.navHeader}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About us</Link></li>
                <li><Link href="/trainers">Trainers</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/contact">Contact us</Link></li>
            </nav>
            : <div className={styles.menuRoot}>
                <button className={`${styles.burgerMenu} ${open ? styles.active : ''}`}
                        ref={triggerRef}
                        onClick={show}>
                    <span className={styles.burgerMenuLine}></span>
                    <span className={styles.burgerMenuLine}></span>
                    <span className={styles.burgerMenuLine}></span>
                </button>
                <div className={`${styles.content} ${status}`}
                     tabIndex={1} onBlur={close} ref={navRef}>
                    <nav className={`${styles.navHeader} ${styles.adaptiveNavHeader}`}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About us</Link></li>
                        <li><Link href="/trainers">Trainers</Link></li>
                        <li><Link href="/courses">Courses</Link></li>
                        <li><Link href="/contact">Contact us</Link></li>
                    </nav>
                </div>
            </div>
    );
};

export default NavMenu;