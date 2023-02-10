import percentage from '../assets/Percent.png'
import divider from '../assets/Divider.png'
import multiplier from '../assets/X.png'
import equals from '../assets/Equals.png'
import plus from '../assets/Plus.png'
import minus from '../assets/Minus.png'
import flagSign from '../assets/PlusMinus.png'

export const buttons = [
    {
        value: 'ClearEntry',
        operator: 'CE',
        description: 'Clear Entry',
        type: 'CE',
        hotkey: 'Delete',
    },
    {
        value: 'Clear',
        operator: 'C',
        description: 'Clear',
        type: 'default',
        hotkey: 'Escape'
    },
    {
        value: 'Percent',
        operator: percentage,
        description: 'Percentage',   
        type: 'default',
        image: true,
        hotkey: '%'
    },
    {
        value: 'Divider',
        operator: divider,
        description: 'Divider operator',
        type: 'operator',
        image: true,
        hotkey: '/'
    },
    {
        value: '7',
        operator: '7',
        description: 'Number 7',
        type: 'default',
        hotkey: '7'
    },
    {
        value: '8',
        operator: '8',
        description: 'Number 8',
        type: 'default',
        hotkey: '8'
    },
    {
        value: '9',
        operator: '9',
        description: 'Number 9',
        type: 'default',
        hotkey: '9'
    },
    {
        value: 'Times',
        operator: multiplier,
        description: 'Multiplier operator',
        image: true,
        type: 'operator',
        hotkey: '*'
    },
    {
        value: '4',
        operator: '4',
        description: 'Number 4',
        type: 'default',
        hotkey: '4'
    },
    {
        value: '5',
        operator: '5',
        description: 'Number 5',
        type: 'default',
        hotkey: '5'
    },
    {
        value: '6',
        operator: '6',
        description: 'Number 6',
        type: 'default',
        hotkey: '6'
    },
    {
        value: 'Minus',
        operator: minus,
        description: 'Minus operator',
        image: true,
        type: 'operator',
        hotkey: '-'
    },
    {
        value: '1',
        operator: '1',
        description: 'Number 1',
        type: 'default',
        hotkey: '1'
    },
    {
        value: '2',
        operator: '2',
        description: 'Number 2',
        type: 'default',
        hotkey: '2'
    },
    {
        value: '3',
        operator: '3',
        description: 'Number 3',
        type: 'default',
        hotkey: '3'
    },
    {
        value: 'Plus',
        operator: plus,
        description: 'Plus operator',
        image: true,
        type: 'operator',
        hotkey: '+'
    },
    {
        value: 'FlagSign',
        operator: flagSign,
        description: 'Change number to negative or positive',
        image: true,
        type: 'default',
        hotkey: '!',
    },
    {
        value: '0',
        operator: '0',
        description: 'Number 0',
        type: 'default',
        hotkey: '0',
    },
    {
        value: ',',
        operator: ',',
        description: 'Floating number',
        type: 'default',
        hotkey: ','
    },
    {
        value: 'Equals',
        operator: equals,
        description: 'Result of equation',
        image: true,
        type: 'equals',
        hotkey: '='
    },
]