import { Box,Flex,VStack,} from "@chakra-ui/react"
import StockCards from '@/components/ui/stockcards'
export default  function Page() {
  return (
    <Flex>
      <Box flex="1" textAlign="center">
        <VStack>
        <StockCards/>
        </VStack>
      </Box>
  </Flex>
  )
}