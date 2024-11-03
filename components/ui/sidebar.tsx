'use client'
import {Flex,Text, HStack ,Box, Drawer,useDisclosure,VStack, } from "@chakra-ui/react"
import { CloseButton } from '@/components/ui/close-button';
import {DrawerBody,DrawerHeader,DrawerRoot,} from "@/components/ui/drawer"
import {useColorModeValue} from '@/components/ui/color-mode'
import {FiHome,FiTrendingUp,FiCompass,FiStar,FiSettings} from 'react-icons/fi'
import {NavItem} from '@/components/ui/nav-items'
export const Sidebar = () => {
const { isOpen, onOpen, onClose } = useDisclosure();
  const LinkItems = [
    { name: 'Home', icon: FiHome ,link:'/dashboard' },
    { name: 'Sales', icon: FiTrendingUp,link:'/dashboard/sales' },
    { name: 'Stokes', icon: FiCompass,link:'/dashboard/stokes' },
    { name: 'Reports', icon: FiStar,link:'/dashboard/reports' },
    { name: 'Sign Out', icon: FiSettings,link:'/dashboard' },
  ]
  return (
    
    <HStack wrap="wrap" >
    <DrawerRoot isOpen={isOpen} placement="start" onClose={onClose}>
      <Box 
        p={4} 
        w="250px" 
        bg={useColorModeValue('white', 'gray.900')}
        borderRight="1px"
        alignItems="center"
        borderRightColor={useColorModeValue('gray.200', 'gray.700')}
        justifyContent={{ base: 'space-between', md: 'flex-end' }}
        boxShadow="xl"
      >
        <DrawerHeader>
        <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
          <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
          </Text>
          <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
        </Flex>
        </DrawerHeader>
        <DrawerBody>
        <VStack align="stretch" >
            <NavItem data={LinkItems}/>
        </VStack>
        </DrawerBody>
    </Box>
    </DrawerRoot>
</HStack>
);
};


