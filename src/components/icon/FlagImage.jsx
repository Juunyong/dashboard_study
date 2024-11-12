import Image from 'next/image';
import React from 'react';

const FlagImage = ({ country, size = 'md' }) => {
    const sizes = {
        sm: 30,
        md: 50,
        lg: 70,
    };

    return (
        <div>
            <Image src={`/Images/${country}.jpg`} alt={country} width={50} height={50} />
        </div>
    );
};

export default FlagImage;
