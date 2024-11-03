'use client'
import {Flex,Text,Icon,Box, ClientOnly,Skeleton,} from "@chakra-ui/react"
import { IconType } from 'react-icons'
import { ColorModeToggle } from "@/components/ui/color-mode-toggle"
import {FiLogOut,} from 'react-icons/fi'
import NextLink from 'next/link';

interface NavItemProps {
    data: Array<{
        name: string;
        icon: IconType;
    }>;
}
export const NavItem = ({ data }: NavItemProps) => {
    return (
        <>
        <Flex direction="column" minH="78vh">
            <Flex  direction="column" flex="1">
                {data.slice(0, data.length - 1).map((link) => (
                    <Box as="a" key={link.name} style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
                        <Flex align="center" p="4" mx="4" borderRadius="lg" role="group" cursor="pointer" _hover={{ bg: 'cyan.400', color: 'white' }}>
                            {link.icon && <link.icon fontSize="16"  mr="2" />}
                            <NextLink href={link.link} passHref>
                                {link.name}
                            </NextLink>
                        </Flex>
                    </Box>
                ))}
            </Flex>
            <Box>
                <Box pos="absolute" top="4" right="4">
                    <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
                    <ColorModeToggle />
                    </ClientOnly>
                </Box>
                {data.length > 0 && (
                    <Box as="a" key={data[data.length - 1].name} style={{ textDecoration: "none" }} _focus={{ boxShadow: "none" }}>
                        <Flex align="center" p="4" mx="4" borderRadius="lg" role="group" cursor="pointer" _hover={{ bg: 'cyan.400', color: 'white' }}>
                            <Text mr="4" >{data[data.length - 1].name}</Text>
                            <Icon fontSize="16"><FiLogOut /></Icon>
                        </Flex>
                    </Box>
                )}
            </Box>
        </Flex>
        </>
    );
};