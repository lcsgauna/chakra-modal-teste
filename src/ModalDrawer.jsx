import React, { useState } from "react";
import { Avatar, AvatarBadge, Button, Circle, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay,Text,useDisclosure } from "@chakra-ui/react";
import { ChevronLeftIcon, SettingsIcon } from "@chakra-ui/icons";


export default function ModalDrawer(){
    const [options,setOptions] = useState([{
        
    }])
    const {isOpen,onOpen,onClose} = useDisclosure()
    return (
        <>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20%'}}>
                {/* <Button onClick={onOpen} w={100} h={100} borderRadius={100} boxShadow={'4.33px 4.33px 6.18px rgba(1, 1, 1, 0.15);'} bgColor={'white'}>
                    <SettingsIcon boxSize={12} color={'#ADB5BD'}/>
                </Button> */}
                <IconButton
                    bgColor={'white'}
                    boxShadow={'4.33px 4.33px 6.18px rgba(1, 1, 1, 0.15)'}
                    onClick={onOpen}
                    w={100}
                    h={100}
                    borderRadius={100}
                    icon={<SettingsIcon boxSize={12} color={'#ADB5BD'}/>}
                />

                <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent borderRadius={'16px'} bgColor={'white'}>
                    <Circle 
                    variant='outline' 
                    margin='-4rem auto 1.5rem'
                    size='150px' 
                    border='3px solid tomato'
                    bg='white' 
                    color='tomato' 
                    padding='2rem'
                    boxShadow='0 3px 6px rgba(0,0,0,0.1)'
                    alignSelf='center'>
                        <div style={{display:'flex',  flexDirection:'column', alignItems:'center', gap:'5px'}}>
                            <SettingsIcon boxSize={16}/>
                            <Text as='b' fontSize='sm'>Estabelecimentos</Text>
                        </div>
                    </Circle>
                    <ModalCloseButton color="black"/>
                    <ModalBody color={'black'} display='grid' gridTemplateColumns='repeat(4,1fr)' padding={10} gap={10}>
                        <Button _hover={{bgColor:'red'}} variant="solid" bgColor='tomato' w='80px' h='80px' borderRadius={16}>Teste</Button>
                        <Button variant="solid" bgColor='tomato' w='80px' h='80px' borderRadius={16}>Teste</Button>
                        <Button variant="solid" bgColor='tomato' w='80px' h='80px' borderRadius={16}>Teste</Button>
                        <Button variant="solid" bgColor='tomato' w='80px' h='80px' borderRadius={16}>Teste</Button>
                        <Button variant="solid" bgColor='tomato' w='80px' h='80px' borderRadius={16}>Teste</Button>
                        <Button variant="solid" bgColor='tomato' w='80px' h='80px' borderRadius={16}>Teste</Button>                    
                    </ModalBody>
                </ModalContent>
                </Modal>
                </div>
        </>
    )
}