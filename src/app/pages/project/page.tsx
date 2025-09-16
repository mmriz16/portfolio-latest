'use client';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../../components/container';
import InnerCard from '../../components/innerCard';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import OuterCard from '../../components/outerCard';


export default function Projects() {
  return (
    <>
      <Navbar />
      <Container>
        <div className="flex flex-col gap-7 px-6 mt-24 mb-12">
          <div className="w-full max-w-[650px]">
            <h1 id='title' className="text-5xl font-bold leading-[1.1]">Things I’ve made trying to put my dent in the universe.</h1>
          </div>
          <div className="w-full max-w-[650px]">
            <p id='desc' className="text-base font-medium text-white/50">I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
          </div>
          <div className="flex flex-col gap-12 mt-6">
            <div className="w-full">
              <h2 id='title' className="text-base font-bold">Personal Projects</h2>
              <OuterCard>
                <Link href="https://termicons.com" target='_blank'>
                  <InnerCard>
                    <Image className='bg-white/5 rounded-lg w-[56px] h-auto p-2' src="/img/Termicons.png" alt="Company logo" width={48} height={48} unoptimized={true} quality={100} />
                    <h1 className='text-base font-bold'>Termicons</h1>
                    <p className='text-sm text-white/50 overflow-ellipsis line-clamp-2'>SocialVit is a social media platform that allows users to connect with their friends and family. It provides features such as profile customization, photo upload, and video sharing.</p>
                    <p className='text-sm text-[#417ffa]'>termicons.com</p>
                  </InnerCard>
                </Link>
              </OuterCard>
            </div>
            <div className="w-full">
              <h2 id='title' className="text-base font-bold">Portfolio Designs</h2>
              <OuterCard>
                <InnerCard>
                  <Image className='bg-white/5 rounded-xl w-full h-auto' width={300} height={188} src="/project/SocialVit.jpg" alt="SocialVit" unoptimized={true} quality={100} />
                  <h1 className='text-base font-bold'>SocialVit</h1>
                  <p className='text-sm text-white/50 overflow-ellipsis line-clamp-2'>SocialVit is a social media platform that allows users to connect with their friends and family. It provides features such as profile customization, photo upload, and video sharing.</p>
                  <p className='text-sm font-semibold text-white/50 uppercase'>Social Media - 2025</p>
                </InnerCard>
                <InnerCard>
                  <Image className='bg-white/5 rounded-xl w-full h-auto' width={300} height={188} src="/project/Eduwork.jpg" alt="Eduwork" unoptimized={true} quality={100} />
                  <h1 className='text-base font-bold'>Eduwork</h1>
                  <p className='text-sm text-white/50 overflow-ellipsis line-clamp-2'>Eduwork is an online platform that provides education courses for students. It offers a wide range of courses in different fields, including business, technology, and health. Eduwork is committed to providing quality education and helping students achieve their goals.</p>
                  <p className='text-sm font-semibold text-white/50 uppercase'>Course - 2025</p>
                </InnerCard>
                <InnerCard>
                  <Image className='bg-white/5 rounded-xl w-full h-auto' width={300} height={188} src="/project/Sinergi.jpg" alt="Sinergi" unoptimized={true} quality={100} />
                  <h1 className='text-base font-bold'>Sinergi</h1>
                  <p className='text-sm text-white/50 overflow-ellipsis line-clamp-2'>Sinergi is a company that provides software solutions for businesses. It offers a range of products and services that help organizations streamline their operations and improve efficiency.</p>
                  <p className='text-sm font-semibold text-white/50 uppercase'>Company Profile - 2025</p>
                </InnerCard>
              </OuterCard>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}