import React, {useState} from 'react';
import styles from './Menu.module.scss';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Menu = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <DropdownMenu.Root open={isOpen} onOpenChange={(state) => setIsOpen(state)}>
            <DropdownMenu.Trigger className={`${styles.button} ${isOpen ? styles.active : ''}`}>
                    <svg viewBox="0 0 24 24">
                        <g>
                            <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                        </g>
                    </svg>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className={styles.content} sideOffset={5}>
                    {items.map((item) =>
                        <DropdownMenu.Item key={item.id} onClick={item.onClick}
                                           className={styles.menuItem}>
                            {item.title}
                        </DropdownMenu.Item>
                    )}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>

    );

{/*            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>*/}
};

export default Menu;