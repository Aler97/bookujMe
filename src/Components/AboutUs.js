import React from 'react';

import {
    Box,
    Text,
    Center,
    Img,
    Stack,
    SimpleGrid,
    Link

} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

import bookss from '../Images/reading-notes-at-work.jpg'
import reading from '../Images/reading.jpg'
import readding from '../Images/reading2.jpg'

const AboutUs = () => {
    return (<><Center><SimpleGrid
        columns={{ sm: 1, md: 2 }}
        spacing={['5', '10', '20']}
        rounded='lg'
        padding='3%'
        w={['90%', '70%']}
        h='auto'
        margin='3%'
        bg='#89D0CA'
    >
        <Box padding="5%">
            <Stack spacing={4}>
                <Text fontSize={['lg', 'xl', '2xl']} > Vebsajt Bookuj.me nastao je sa idejom da kroz jednostavan interfejs omogući korisnicima razmjenu/trgovinu polovnih veoma očuvanih knjiga.</Text>

            </Stack>
        </Box>
        <Box>
            <Img src={bookss} alt='reading at work' rounded='lg' />
        </Box>

    </SimpleGrid>
    </Center>

        <Center>
            <SimpleGrid
                columns={{ sm: 1, md: 2 }}
                spacing='20'
                rounded='lg'
                padding='3%'
                w={['90%', '70%']}
                h='auto'
                margin='3%'
                bg='#89D0CA'
            > <Box>
                    <Img src={reading} alt='reading at work' rounded='lg' />
                </Box>
                <Box padding="5%">
                    <Stack spacing={4}>
                        <Text fontSize={['lg', 'xl', '2xl']} > Registracijom korisnik dobija mogućnost da brzo i lako pronadje željenu knjigu, ponudi knjigu/e na razmjenu, da postavlja oglase i da prati ponude.</Text>

                    </Stack>
                </Box>


            </SimpleGrid>
        </Center>


        <Center><SimpleGrid
            columns={{ sm: 1, md: 2 }}
            spacing='20'
            rounded='lg'
            padding='3%'
            w={['90%', '70%']}
            h='auto'
            margin='3%'
            bg='#89D0CA'
        >
            <Box padding="3%">
                <Stack spacing={4}>
                    <Text fontSize={['lg', 'xl']} > Koja ponuda mu najviše odgovara, može da je potvrdi i ugovori razmjenu/prodaju.</Text>
                    <Text fontSize={['lg', 'xl']} fontWeight='bold'> Za korišćenje Bookuj.me usluga možete se registrovati <Link as={ReactLink} to='/Registracija' textColor='blue'>ovdje</Link></Text>
                    <Text fontSize={['lg', 'xl']} fontWeight='bold'> Ako imate bilo kakvih pitanja ili nedoumica kontaktirajte nas!-<Link as={ReactLink} to='/Kontakt' textColor='blue'>Kontakt</Link></Text>
                </Stack>
            </Box>
            <Box>
                <Img src={readding} alt='reading at work' rounded='lg' />
            </Box>

        </SimpleGrid>
        </Center>


    </>);
}

export default AboutUs;