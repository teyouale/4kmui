import React from "react";
import { MessageInfo } from "../assets/data";
const Message = () => {
	return (
		<div className=' mb-20' data-aos='flip-up' data-aos-delay='300'>
			<div className='max-w-3xl mx-auto mt-00'>
				<div className='relative flex items-start border-2 border-accent rounded bg-primary'>
					<div className='text-center px-12 py-8 pt-20 mx-4 md:mx-0'>
						<div className='absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2'>
							<img
								className='relative rounded-full'
								src={require("../assets/logo.svg").default}
								width='96'
								height='96'
								alt='Message'
							/>
						</div>
						<blockquote className='text-xl font-medium mb-4'>
							{MessageInfo.desc}
						</blockquote>
						<cite className='block font-bold text-lg not-italic mb-1'>
							{MessageInfo.name}
						</cite>
						<div className='text-primaryOn'>
							<span>{MessageInfo.title}</span>{" "}
							<a
								className='text-blue-600 hover:underline'
								href={MessageInfo.link}>
								@{MessageInfo.shortLink}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;
