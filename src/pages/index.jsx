import Head from 'next/head'
import {HomePage} from "@/pages(notNEXT)/api/Components";
import {getCourses} from "@/app/lib/controllers/courseController";
export default function Home({courses}) {
  return (
    <>
      <Head>
        <title>Sportamin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomePage courses={courses}/>
    </>
  )
}
export async function getServerSideProps() {
    let courses = await getCourses(null, {rating: -1}, 3, 0);

    return {
        props: {
            courses: courses?.items ?? []
        },
    };
}