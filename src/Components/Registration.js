import React from 'react';
import {Box,
    Input,
    Stack,
    Center, 
    InputLeftElement,
     InputGroup,
     Button ,
     InputRightElement,
    FormControl,
Text}from '@chakra-ui/react';
import { PhoneIcon, 
    InfoIcon, 
    EmailIcon,
    ViewOffIcon ,
    ViewIcon} from '@chakra-ui/icons'
    import { useForm } from "react-hook-form";


const Reg=() =>{
    const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

 const SubmitHandler=(e)=>{
     e.preventDefault();
 }
 const { register, handleSubmit, formState: { errors } } = useForm();

 const onSubmit = (data)=>{
     console.log(data);
     data.preventDefault();
 };

    return (<Center><Box w='400px'
     h='auto' 
     bg='#89D0CA'
     boxShadow='md' 
     rounded='lg' 
     padding='5%' 
    >
        <Text fontSize='3xl' align='center'>Bookuj.me</Text>
        <br />
        
        <form action="submit" h='auto'   onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
        <Input type='name'
         placeholder='Ime' 
         area-lable='Ime' 
         backgroundColor='white'
         {...register("Firstname")} />
        
        </InputGroup>
        </FormControl>
        <FormControl isRequired>
        <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
        <Input type='name' 
        placeholder='Prezime'
         area-lable='Prezime'
         backgroundColor='white'
         {...register("Lastname")} />
        </InputGroup>
        </FormControl>
        <FormControl isRequired>
        <InputGroup>
                <InputLeftElement children={<InfoIcon />} />
        <Input type='text' 
        placeholder='Grad' 
        backgroundColor='white'
        {...register("City")}/>
        </InputGroup>
        </FormControl>
        <FormControl isRequired>
        <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
        <Input type='email'
         placeholder='email'
          backgroundColor='white'
          {...register("Email")}/>
        </InputGroup>
        </FormControl>
        <FormControl isRequired>
        <InputGroup>
                <InputLeftElement children={<PhoneIcon />} />
        <Input type='number' 
        placeholder='Broj telefona'
         backgroundColor='white' 
         {...register("Phone")}/>
        </InputGroup>
        </FormControl>
        <FormControl >
    
        <InputGroup>
        
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Unesi Lozinku'
        backgroundColor='white'
        {...register("password", {
            required: "Please enter Password!",
            minLength: { value: 8, message: "Too Short! It needs to be at least 8 characters long!" }
          })}
      />
      
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Sakrij' : 'Prikazi'}
        </Button>
      </InputRightElement>
      
        </InputGroup>
        </FormControl>
        {errors.password &&<p >{errors.password.message}</p>}
        <Button type='submit' 
        boxShadow='sm' 
        _hover={{boxShadow:'md'}} 
       >Sign up!</Button>
        </Stack>

    </form>
    </Box>
    </Center>);
}
 
export default Reg;