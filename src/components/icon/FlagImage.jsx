import Image from 'next/image';
import React from 'react';

const FlagImage = ({ country, size = 'md' }) => {
    const sizes = {
        sm: 30,
        md: 50,
        lg: 70,
    };

    const pixelSize = sizes[size];

    return (
        <div>
            <Image src={`/Images/${country}.jpg`} alt={country} width={pixelSize} height={pixelSize} />
        </div>
    );
};

export default FlagImage;
