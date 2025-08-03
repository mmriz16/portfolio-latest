'use client';
import Container from '@/app/components/container';

export default function Project() {
  return (
    <Container>
      <h2 className="text-base font-bold">Portfolio Designs</h2>
      <div className="flex gap-7 mt-6">
        <div className="col-3 w-full gap-3 flex flex-col">
          <img className='bg-white/5 rounded-xl h-[188px]' src="/images/project/1.png" alt="SocialVit" />
          <h1 className='text-xl font-bold'>SocialVit</h1>
          <p className='text-sm text-white/50 overflow-ellipsis line-clamp-2'>SocialVit is a social media platform that allows users to connect with their friends and family. It provides features such as profile customization, photo upload, and video sharing.</p>
          <p className='text-sm font-semibold text-white/50 uppercase'>Social Media 2025</p>
        </div>
        <div className="col-3 w-full gap-3 flex flex-col">
          <img className='bg-white/5 rounded-xl h-[188px]' src="/images/project/1.png" alt="Eduwork" />
          <h1 className='text-xl font-bold'>Eduwork</h1>
          <p className='text-sm text-white/50 overflow-ellipsis line-clamp-2'>Eduwork is an online platform that provides education courses for students. It offers a wide range of courses in different fields, including business, technology, and health. Eduwork is committed to providing quality education and helping students achieve their goals.</p>
          <p className='text-sm font-semibold text-white/50 uppercase'>Course 2025</p>
        </div>
        <div className="col-3 w-full gap-3 flex flex-col">
          <img className='bg-white/5 rounded-xl h-[188px]' src="/images/project/1.png" alt="Sinergi" />
          <h1 className='text-xl font-bold'>Sinergi</h1>
          <p className='text-sm text-white/50 overflow-ellipsis line-clamp-2'>Sinergi is a company that provides software solutions for businesses. It offers a range of products and services that help organizations streamline their operations and improve efficiency.</p>
          <p className='text-sm font-semibold text-white/50 uppercase'>Company Profile 2025</p>
        </div>
      </div>
    </Container>
  );
}
