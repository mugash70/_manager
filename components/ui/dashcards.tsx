// import { Link , Icon, Card, Button, Grid } from "@chakra-ui/react";
// import { FiHome } from 'react-icons/fi';

// const cardData = [
//   { id: 1, title: "Sales", icon: <FiHome />,link:'/dashboard/orders' },
//   { id: 2, title: "Stock/Items", icon: <FiHome />, link:'/dashboard/stocks'},
//   { id: 3, title: "Reports", icon: <FiHome />, link:'/dashboard/orders'},
//   { id: 4, title: "Orders", icon: <FiHome />,link:'/dashboard/orders' },
// ];

// export default function DashCards() {
//   return (
//     <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={4} mt={4} ml="20">
//      {cardData.map((card) => (
//         <Card.Root key={card.id} minWidth="280px" maxWidth="320px" boxShadow="2xl" borderRadius="lg"overflow="hidden"_hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>
//           <Card.Body gap="3" p={6}>
//             <Icon fontSize="24" color="teal.500">{card.icon}</Icon>
//             <Card.Title fontSize="xl" mt="4">{card.title}</Card.Title>
//           </Card.Body>
//           <Card.Footer  justifyContent="flex-end">
//             <Link variant="underline" href={card.link} >View</Link>
//           </Card.Footer>
//         </Card.Root>
//       ))}
//   </Grid>
//   );
// }
import { Icon, Card, Button, Grid, Box, Text } from "@chakra-ui/react";
import { FiHome } from 'react-icons/fi';
import NextLink from 'next/link';

const cardData = [
  { id: 1, title: "Sales", icon: <FiHome />, link: '/dashboard/stocks' },
  { id: 2, title: "Stock/Items", icon: <FiHome />, link: '/dashboard/stocks' },
  { id: 3, title: "Reports", icon: <FiHome />, link: '/dashboard/stocks' },
  { id: 4, title: "Orders", icon: <FiHome />, link: '/dashboard/stocks' },
];

export default function DashCards() {
  return (
    <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={4} mt={4} ml="20">
      {cardData.map((card) => (
        <Card.Root
          key={card.id}
          minWidth="280px"
          maxWidth="320px"
          boxShadow="2xl"
          borderRadius="lg"
          overflow="hidden"
          _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}
        >
          <Card.Body gap="3" p={6}>
            <Icon fontSize="24" color="teal.500">{card.icon}</Icon>
            <Card.Title fontSize="xl" mt="4">{card.title}</Card.Title>
          </Card.Body>
          <Card.Footer justifyContent="flex-end">
            <NextLink href={card.link} passHref>
              <Text as="a" variant="underline" color="teal.500" _hover={{ textDecoration: 'underline' }}>
                View
              </Text>
            </NextLink>
          </Card.Footer>
        </Card.Root>
      ))}
    </Grid>
  );
}

