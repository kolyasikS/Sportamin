import React from 'react';
import {ContactPage} from "@/pages(notNEXT)/api/Components";

const Contact = () => {
    return (
        <ContactPage/>
    );
};
export async function getServerSideProps() {

    return { props: {}};

}

export default Contact;