import React from 'react';
import MiniState from './MiniState';

const MiniStateGrid = ({ stateData }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {stateData.map((item, index) => (
                <MiniState
                    key={index}
                    {...item}
                    // name={item.name}
                    // value={item.value}
                    // startContent={item.startContent}
                    // endContent={item.endContent}
                    // growth={item.growth}
                />
            ))}
        </div>
    );
};

export default MiniStateGrid;
