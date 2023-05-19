import React from 'react';
import {ProfilePage} from "@/pages(notNEXT)/api/Components";
import {getUsers} from "@/app/lib/controllers/userController";

const Profile = ({user}) => {
    return (
        <ProfilePage user={user}/>
    );
};
export async function getServerSideProps(context) {
    const result = await getUsers({id: context.query.id});
    const user = result.items[0];
    return {
        props: {
            user
        }
    }
}
export default Profile;