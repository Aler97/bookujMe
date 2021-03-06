import { Box, Button, Flex, Grid, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import Oglas from "./Oglas";
import React, { useState, useEffect } from 'react';


function Oglasi() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [allBooks, setAllBooks] = useState([]);

    const getAllBooks = async () => {
        try {
            const res = await fetch(`https://api.bookuj.ml/books`);
            const data = await res.json();
            setAllBooks(data)
        }
        catch {
            window.alert('Došlo je do greške')
        }

    }


    useEffect(() => {
        getAllBooks();
    }, [])

    return (<Box w='100$' minH='70vh'>
        <Flex w='100%' padding={['30px 10px 30px 10px', '30px', '50px']} gap={['7px', '10px', '20px']} justifyContent='center' alignItems='center' flexDirection={['column', 'column', 'row']}>

            <Input placeholder="Traži knjigu..." _placeholder={{ color: 'black', opacity: '.5' }} size='md' w={['85%', '80%', '50%', '40%', '20%']} variant='unstyled' border='1px solid black' padding='6.5px 9px' />
            <Flex gap={['5px', '10px', '20px']}>
                <Button bgColor='button.normal' color='white' fontWeight='bold' _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }}>Traži</Button>
                <Button bgColor='button.normal' color='white' fontWeight='bold' _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }} onClick={onOpen}>Filtriraj</Button>
            </Flex>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Filtriraj:</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Žanr...
                    </ModalBody>
                    <ModalFooter>
                        <Button bgColor='button.normal' color='white' _hover={{ bgColor: 'black', color: 'white' }} _active={{ bgColor: 'black', color: 'white' }} mr={3} onClick={onClose}>
                            Sačuvaj
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </Flex>
        <Grid marginTop={['20px', '30px', '40px', '50px']} w='100%' padding='10px' templateColumns={['1fr', '1fr 1fr', 'repeat(3,1fr)', 'repeat(4, 1fr)']} gap=' 15px'>
            {allBooks.length !== 0 ? allBooks.map((book, index) => <Oglas
                name={book.name}
                author_firstname={book.author.first_name}
                author_lastname={book.author.last_name}
                preservation_level={book.preservation_level}
                genre={book.genre}
                key={index}
                id={book.id}
            />) : <Grid w='100vw' textAlign='center'><Text fontWeight='bold' fontSize={['lg', 'xl', '2xl', '3xl']} >Učitavanje...</Text></Grid>}
        </Grid>
    </Box>)
}
export default Oglasi;