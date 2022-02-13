import React from 'react';

import books from '../Images/Books-High-Quality-PNG.png'
import {Box,
    Text,
    Center,
    Img ,
    Stack,
    SimpleGrid,
    Link,
    Button
    
    } from '@chakra-ui/react';


const Oglas = () => {
    return ( <><SimpleGrid
        columns={{ sm: 2, md: 1}}
         w='100%'
        h='auto' 
       border='solid'
       borderColor='black'
       borderRadius='0.5em'
     ><Img src={books} alt='books'></Img>
     <Center><Stack spacing={4}  mb='15px'>
         <Text>Something</Text>
         <Text>Something</Text>
         <Text>Something</Text>
         <Text>Something</Text>
         <Button >Opsirnije</Button>
         </Stack></Center>
         
         </SimpleGrid></> );
}
 
export default Oglas;