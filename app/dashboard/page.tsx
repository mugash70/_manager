import { Box,Heading,Flex,VStack,Drawer,DrawerContent,useDisclosure,} from "@chakra-ui/react"
import Image from "next/image"
import { ColorModeToggle } from "@/components/ui/color-mode-toggle"
import { Sidebar } from "@/components/ui/sidebar"
import Dashcards from '@/components/ui/dashcards'
export default  function Page() {
  return (
    <Flex>
      <Box flex="1" textAlign="center">
        <VStack>
        <Dashcards/>
        </VStack>
      </Box>
  </Flex>
  )
}