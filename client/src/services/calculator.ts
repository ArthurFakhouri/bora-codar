import percentage from '../assets/Percent.png'
import divider from '../assets/Divider.png'
import multiplier from '../assets/X.png'
import equals from '../assets/Equals.png'
import plus from '../assets/Plus.png'
import minus from '../assets/Minus.png'
import flagSign from '../assets/PlusMinus.png'

export const buttons = [
    {
        operator: 'CE',
        description: 'Clear Entry',
        type: 'CE',
        hotkey: 'Delete',
    },
    {
        operator: 'C',
        description: 'Clear',
        type: 'default',
        hotkey: 'Escape'
    },
    {
        operator: percentage,
        description: 'Percentage',   
        type: 'default',
        image: true,
        hotkey: '%'
    },
    {
        operator: divider,
        description: 'Divider operator',
        type: 'operator',
        image: true,
        hotkey: '/'
    },
    {
        operator: '7',
        description: 'Number 7',
        type: 'default',
        hotkey: '7'
    },
    {
        operator: '8',
        description: 'Number 8',
        type: 'default',
        hotkey: '8'
    },
    {
        operator: '9',
        description: 'Number 9',
        type: 'default',
        hotkey: '9'
    },
    {
        operator: multiplier,
        description: 'Multiplier operator',
        image: true,
        type: 'operator',
        hotkey: '*'
    },
    {
        operator: '4',
        description: 'Number 4',
        type: 'default',
        hotkey: '4'
    },
    {
        operator: '5',
        description: 'Number 5',
        type: 'default',
        hotkey: '5'
    },
    {
        operator: '6',
        description: 'Number 6',
        type: 'default',
        hotkey: '6'
    },
    {
        operator: minus,
        description: 'Minus operator',
        image: true,
        type: 'operator',
        hotkey: '-'
    },
    {
        operator: '1',
        description: 'Number 1',
        type: 'default',
        hotkey: '1'
    },
    {
        operator: '2',
        description: 'Number 2',
        type: 'default',
        hotkey: '2'
    },
    {
        operator: '3',
        description: 'Number 3',
        type: 'default',
        hotkey: '3'
    },
    {
        operator: plus,
        description: 'Plus operator',
        image: true,
        type: 'operator',
        hotkey: '+'
    },
    {
        operator: flagSign,
        description: 'Change number to negative or positive',
        image: true,
        type: 'default',
        hotkey: '!',
    },
    {
        operator: '0',
        description: 'Number 0',
        type: 'default',
        hotkey: '0',
    },
    {
        operator: ',',
        description: 'Floating number',
        type: 'default',
        hotkey: ','
    },
    {
        operator: equals,
        description: 'Result of equation',
        image: true,
        type: 'equals',
        hotkey: '='
    },
]