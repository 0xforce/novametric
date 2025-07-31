'use client';
import { motion } from 'framer-motion';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Cta({ locale, CTALocale }) {
	return (
		<section
			id='contact'
			className='relative py-10 md:py-20'
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
				}}
			>
				<div className='relative z-10 flex flex-col gap-5 items-start md:items-center mb-10 mx-auto'>
					<h2 className='font-bold  text-5xl md:text-7xl bg-gradient-to-r from-base-content from-50% to-[#9c9c9c] md:text-center bg-clip-text text-transparent !leading-[1.25em]'>
						{locale.h2}
					</h2>

					<h3 className='w-full md:w-10/12 mx-auto text-xl md:text-2xl text-base-content/80 md:text-center'>{locale.h3}</h3>

					<a
						title='get source code'
						className='mt-10 btn btn-sm md:btn-md btn-base border-none hover:ring-1 ring-base-content text-base-100 hover:text-base-content bg-base-content hover:bg-base-100 rounded-full'
						href='https://wa.me/18442001000?text=Hi! I saw your Novametric website and I am interested in learning more about how you can help bring new patients to my medical practice. Could you please provide more information about your services and pricing?'
					>
						{CTALocale.btn1}
					</a>
				</div>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					duration: 0.5,
					delay: 0.2,
				}}
			>
				<div className='relative z-10 w-full md:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
					<div className='flex flex-col items-center text-center gap-3 p-6 rounded-lg bg-base-200/50 backdrop-blur-sm'>
						<FiPhone className='text-2xl text-primary' />
						<h4 className='font-semibold text-lg'>{locale.phone}</h4>
						<p className='text-base-content/70'>+1 (555) 123-4567</p>
					</div>
					
					<div className='flex flex-col items-center text-center gap-3 p-6 rounded-lg bg-base-200/50 backdrop-blur-sm'>
						<FiMail className='text-2xl text-primary' />
						<h4 className='font-semibold text-lg'>{locale.email}</h4>
						<p className='text-base-content/70'>contact@novametric.com</p>
					</div>
					
					<div className='flex flex-col items-center text-center gap-3 p-6 rounded-lg bg-base-200/50 backdrop-blur-sm'>
						<FiMapPin className='text-2xl text-primary' />
						<h4 className='font-semibold text-lg'>{locale.address}</h4>
						<p className='text-base-content/70'>150 South Pine Island Road, Suite 300<br />Plantation, FL 33324</p>
					</div>
				</div>
			</motion.div>

			<div className='hidden md:block absolute left-[30%] top-0 z-0'>
				<div className='absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]'></div>
			</div>
		</section>
	);
}
