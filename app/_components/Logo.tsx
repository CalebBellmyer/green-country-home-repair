import Image from 'next/image';
import React from 'react';

function Logo() {
    return (
        <Image
            src='/decal.png'
            alt="Green Country Home Repair's logo"
            className='z-50 cursor-pointer'
            width={150}
            height={150}
        />
    );
}

export default Logo;
