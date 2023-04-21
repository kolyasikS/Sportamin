import React from 'react';
import {useRouter} from "next/router";
import Image from "next/image";
import {AnimBorderTranspBgButton} from "@/shared/ui/Buttons/api/Buttons";
import {TrainerPrivatePage} from "@/pages(notNEXT)/api/Components";
import {getTrainer, getTrainers} from "@/app/lib/controllers/userController";

const Trainer = ({trainer}) => {
    return (
        <TrainerPrivatePage {...trainer}/>
    );
};
export async function getServerSideProps(context) {
    const { id } = context.query;
    const trainer = await getTrainer(id);
    console.log(trainer);
    return {
        props: {
            trainer
        }, // will be passed to the page component as props
    }
}
export default Trainer;