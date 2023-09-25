import { HiOutlineMail } from 'react-icons/hi'
import Form from '@/components/Form'
import Logo from '../../public/ecxLogo.webp'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <main className={`mx-6  lg:mx-[5%] pt-6 `}>
      <Head>
        <title>ECX Newsletter Form</title>
      </Head>
      <div>
       <Image src={Logo} width={157.41} height={49.3} alt='Logo' />
      </div>
      <section className='mt-20 font-inter md:max-w-[700px] md:mx-auto' >
             <HiOutlineMail className='text-[8rem] text-center mx-auto' />
          <h2 className='text-4xl font-varela font-normal text-center  capitalize
           '>Subscribe to Our newsletter</h2> 
          <Form />
      </section>
   </main> 
  )
}
