import { BsAirplaneEnginesFill, BsBackpack2, BsBarChartFill, BsBinoculars } from 'react-icons/bs';
import FlagImage from '../icon/FlagImage';

export const stateData = [
    {
        name: 'Earnings',
        value: '$350.4',
        startContent: <BsBarChartFill />,
    },
    {
        name: 'Spend this month',
        value: '$642.39',
        startContent: <BsAirplaneEnginesFill />,
    },
    {
        name: 'Sales',
        value: '$574.34',
        growth: '+24.5%',
    },
    {
        name: 'Your balance',
        value: '$1,000',
        endContent: <FlagImage country="usa" />,
    },
    {
        name: 'New Tasks',
        value: '154',
        startContent: <BsBackpack2 />,
    },
    {
        name: 'Total Projects',
        value: '2935',
        startContent: <BsBinoculars />,
    },
];
