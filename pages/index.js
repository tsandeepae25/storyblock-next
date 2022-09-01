import { getStoryblokApi } from '@storyblok/react';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import FeatureSlider from '../components/landing/feature-slider';
import styles from '../styles/Home.module.css'
import { HomeMain } from '../styles/styled/landing.styled';


export default function Home(props) {

  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(false);


  useEffect(() => {
    setisLoading(true)
    fetch('https://api.storyblok.com/v2/cdn/stories/landing-page?version=draft&token=Fng0zxrBaX7QHQZ1eEYUVwtt&cv=1656589763')
      .then(response => response.json())
      .then(data => {
        // console.log(data.story.content)
        setData(data.story.content)
        setisLoading(false)
      })
      .catch(err => console.error(err));
  }, []);


  console.log(props.data);

  return (


    <HomeMain>
      {isLoading && <div className='loading-box'>Loading...</div>}
      <div className='page-box'>
        <h1> {data && data.title}</h1>
        <p> {data && data.description}</p>
        <img src={data && data.image.filename} />
      </div>

      <h2 className='sub-header'>Protect Life, Truth and Justice</h2>

      <FeatureSlider data={props.data} />


    </HomeMain>




  )
}




export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "landing-page";

  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
    // starts_with: "",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      data
    },
    revalidate: 3600, // revalidate every hour
  };
}