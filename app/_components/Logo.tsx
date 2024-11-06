import Image from 'next/image';
import React from 'react';

function Logo() {
    return (
        <Image
            src='/decal.png'
            alt="Green Country Home Repair's logo"
            className='z-50 cursor-pointer'
            width={128}
            height={128}
        />
    );
}

export default Logo;
