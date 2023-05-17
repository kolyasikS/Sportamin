import React from 'react';
import {TrainerPrivatePage} from "@/pages(notNEXT)/api/Components";
import {getTrainer} from "@/app/lib/controllers/userController";

const Trainer = ({trainer}) => {
    return (
        <TrainerPrivatePage {...trainer}/>
    );
};
export async function getServerSideProps(context) {
    const { id } = context.query;
    const trainer = await getTrainer(id);
    return {
        props: {
            trainer
        },
    }
}
export default Trainer;