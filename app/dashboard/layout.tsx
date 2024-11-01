import { Box,Card,Flex,VStack,HStack} from "@chakra-ui/react"
import { Sidebar } from "@/components/ui/sidebar"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex>
      <Sidebar />
      <Box flex="1" textAlign="center" fontSize="xl" pt="20">
        <VStack w="90%">
          <div>{children}</div>
        </VStack>
      </Box>
  </Flex>
  )
}