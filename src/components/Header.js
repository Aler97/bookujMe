import React, { useContext } from 'react';
import {
    Box, Image, Flex, Link, Spacer, Button, useMediaQuery, IconButton, Drawer, DrawerBody, DrawerContent, DrawerCloseButton, useDisclosure, Menu, MenuButton, MenuList, MenuItem
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { BiUserCircle } from 'react-icons/bi';
import { Link as ReactLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Profile from '../assets/profile.png';
import SmallLogo from '../assets/smallLogo.png';
import { AuthContext } from '../helpers/AuthContext';


function Header() {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);


    const [isLargerThan850] = useMediaQuery('(min-width: 850px)');
    const [isLargerThan450] = useMediaQuery('(min-width: 450px)');
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef();

    return (<Box w='100%' h={['70px', '80px', '90px', '100px']} display='flex' flexDir='row' justifyContent={'space-between'} alignItems='center' px={['20px', '40px']} borderBottom='1px solid black'>
        {isLargerThan450 ? <Image src={Logo} w={{ base: '110px', sm: '130px', md: '140px', lg: '200px' }} h={["50px", '60px', '70px']}></Image> : <Image src={SmallLogo} w='40px' h='40px'></Image>}
        {isLargerThan850 ? <Flex w={{ md: '60%', xl: '45%' }} justifyContent='space-evenly' alignItems='center'>
            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/'>Početna</Link>
            <Spacer />
            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/ONama'>O Nama</Link>
            <Spacer />
            <Link fontSize={[20]} _hover={{ textDecoration: 'none', borderBottom: '1px solid black' }} as={ReactLink} to='/Kontakt'>Kontakt</Link>
            <Spacer />
            {!isLoggedIn ? <Button as='a' href='#' border='1px solid black' fontWeight='light' bgColor='transparent' borderRadius='0' fontSize={20} py='6' _hover={{ bgColor: 'brand.normal' }} _active={{ bgColor: 'brand.normal', transform: 'scale(0.95)' }} onClick={() => { setIsLoggedIn(true) }} >Prijavi Se</Button>
                :
                <Menu>
                    <MenuButton
                        as={Button}
                        bgImage={Profile}
                        bgSize='contain'
                        bgColor='white'
                        _hover={{ bgImage: { Profile }, bgSize: 'containe' }}
                        _active={{ bgImage: { Profile }, bgSize: 'containe' }}

                    />
                    <MenuList>
                        <Link as={ReactLink} to='/Profil' _hover={{ textDecoration: 'none' }}>
                            <MenuItem>
                                Profil
                            </MenuItem>
                        </Link>
                        <Link as={ReactLink} to='/Profil' _hover={{ textDecoration: 'none' }}>
                            <MenuItem>
                                Postavi Oglas
                            </MenuItem>
                        </Link>
                        <MenuItem color='red' fontWeight='semibold'>
                            Odjavi Se
                        </MenuItem>
                    </MenuList>
                </Menu>}

        </Flex> :
            <Flex justifyContent='space-evenly' alignItems='center' gap='5px'>
                {!isLoggedIn ? <Button as='a' href='#' border='1px solid black' fontWeight='light' bgColor='transparent' borderRadius='0' fontSize={12} _hover={{ bgColor: 'brand.normal' }} _active={{ bgColor: 'brand.normal', transform: 'scale(0.95)' }}>Prijavi Se</Button>
                    : <Menu>
                        <MenuButton
                            as={Button}
                            bgImage={Profile}
                            bgSize='contain'
                            bgColor='white'
                            _hover={{ bgImage: { Profile }, bgSize: 'containe' }}
                            _active={{ bgImage: { Profile }, bgSize: 'containe' }}

                        />
                        <MenuList>
                            <Link as={ReactLink} to='/Profil' _hover={{ textDecoration: 'none' }}>
                                <MenuItem>
                                    Profil
                                </MenuItem>
                            </Link>
                            <Link as={ReactLink} to='/Profil' _hover={{ textDecoration: 'none' }}>
                                <MenuItem>
                                    Postavi Oglas
                                </MenuItem>
                            </Link>
                            <MenuItem color='red' fontWeight='semibold'>
                                Odjavi Se
                            </MenuItem>
                        </MenuList>
                    </Menu>
                }
                <IconButton ref={btnRef} bgColor='brand.normal' onClick={onOpen} aria-label='Menu' icon={<GiHamburgerMenu />} _hover={{ bgColor: 'brand.normalt' }} _active={{ bgColor: 'brand.normal' }} />

                <Drawer
                    isOpen={isOpen}
                    placement='top'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >

                    <DrawerContent>
                        <DrawerCloseButton />


                        <DrawerBody display='flex' flexDirection='column' justifyContent='flex-start' alignItems='center' mt='40px' gap='10px'>
                            <Link fontSize={[20]} _hover={{ textDecoration: 'none' }} onClick={onClose} as={ReactLink} to='/' >Početna</Link>
                            <Link fontSize={[20]} _hover={{ textDecoration: 'none' }} onClick={onClose} as={ReactLink} to='/ONama' >O Nama</Link>
                            <Link fontSize={[20]} _hover={{ textDecoration: 'none' }} onClick={onClose} as={ReactLink} to='/Kontakt' >Kontakt</Link>
                        </DrawerBody>


                    </DrawerContent>
                </Drawer>
            </Flex>}
    </Box>);
}

export default Header;