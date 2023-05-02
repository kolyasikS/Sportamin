import React from 'react';
import {DarkBtnWithImg} from "@/shared/ui/Buttons/api/Buttons";
import {useRouter} from "next/router";

const Test = () => {
    const router = useRouter()
    const handler = async () => {
        await router.push('api/hello');
    }
    return (
        <div>
            <DarkBtnWithImg onClick={handler}>Sign in</DarkBtnWithImg>
        </div>
    );
};

export default Test;