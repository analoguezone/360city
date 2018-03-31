
import CardBlock from './CardBlock';
import multiRowCardBlock from '../../hoc/multiRowCardBlock/multiRowCardBlock';

export default multiRowCardBlock(CardBlock,2)
export const ThreeRowCardBlock= multiRowCardBlock(CardBlock,3)
export const FourRowCardBlock= multiRowCardBlock(CardBlock,4)

