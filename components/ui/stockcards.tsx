import { Icon, Card, Button, Grid, Text, Box,Image,Flex, } from "@chakra-ui/react";
import { FiHome } from 'react-icons/fi';
import { Avatar } from "@/components/ui/avatar";

const cardData = [
  { id: 1, title: "Apple MacBook Pro", amount: "$1,299", stock: 25, image: "https://picsum.photos/id/180/200/300" },
  { id: 2, title: "Samsung Galaxy S21", amount: "$799", stock: 50, image: "https://picsum.photos/id/200/200/300" },
  { id: 3, title: "Sony WH-1000XM4", amount: "$299", stock: 15, image: "https://picsum.photos/id/250/200/300" },
  { id: 4, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 5, title: "Samsung Galaxy S21", amount: "$799", stock: 50, image: "https://picsum.photos/id/200/200/300" },
  { id: 6, title: "Sony WH-1000XM4", amount: "$299", stock: 15, image: "https://picsum.photos/id/250/200/300" },
  { id: 7, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 8, title: "Samsung Galaxy S21", amount: "$799", stock: 50, image: "https://picsum.photos/id/200/200/300" },
  { id: 9, title: "Sony WH-1000XM4", amount: "$299", stock: 15, image: "https://picsum.photos/id/250/200/300" },
  { id: 10, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 11, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 12, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 13, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 14, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 15, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 16, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 17, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
  { id: 18, title: "Nike Air Max", amount: "$120", stock: 75, image: "https://picsum.photos/id/290/200/300" },
];

export default function StockCards() {
  return (
    <Box maxH="90vh" maxW="100vw"  overflowY="auto" p={4}  borderRadius="lg" css={{'&::-webkit-scrollbar': { display: 'none' },'-ms-overflow-style': 'none','scrollbar-width': 'none',}} ml='20'>
    <Grid templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(6, 1fr)" }} gap={6}  mx="auto">
      {cardData.map((card) => (
        <Card.Root key={card.id} maxH='300px' boxShadow="2xl" borderRadius="lg" overflow="hidden">
          <Card.Body gap="3" p={3}>
            <Image src={card.image} alt={card.title}  maxH="30%"/>
            <Card.Title fontSize="md" mt="2" textStyle="xs">{card.title}</Card.Title>
            <Text textStyle="xs">Price: {card.amount}</Text>
            <Text textStyle="xs">In Stock: {card.stock}</Text>
            <Box  justifyContent="flex-end" ><Button variant="outline">Add stocks</Button></Box >
          </Card.Body>
    
        </Card.Root>
      ))}
    </Grid>
 </Box>
  );
}
