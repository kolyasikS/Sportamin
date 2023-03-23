import React from 'react';
import styles from '../styles/Blog.module.scss';
import {TitleWithImage} from "@/shared/ui/Titles/api/Titles";
import {RBButton} from "@/shared/ui/Buttons/api/Buttons";
import Blogs from "@/app/Static Data/Blogs/Blogs";
import {InfoTopicItem3} from "@/shared/ui/InfoItems/api/Items";
const Blog = () => {
    return (
        <section className={styles.blogSection}>
            <div className={styles.blog}>
                <TitleWithImage color={'#fff'}>Blogs</TitleWithImage>
                <div className={styles.blogItems}>
                    {Blogs.map(item =>
                        <InfoTopicItem3 date={item.date} title={item.title}
                            src={item.srcImage} amount={Blogs.length} key={item.id}
                        />
                    )}
                </div>
                <RBButton uppercase={true} width={180} height={50}>view all</RBButton>
            </div>
        </section>
    );
};

export default Blog;