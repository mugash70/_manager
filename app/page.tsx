import { Button, Fieldset, Input, Stack,Card,Flex } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
export default function Page () {
  return (
    <Flex gap="4" justify="center" mt={150}>
    <Card.Root>
      <Card.Body>
      <Fieldset.Root size="lg" maxW="md">
        <Stack>
          <Fieldset.Legend>Login</Fieldset.Legend>
          <Fieldset.HelperText>
          To access your account, provide the information requested in the fields below, then click "Login".
          </Fieldset.HelperText>
        </Stack>

        <Fieldset.Content>
          <Field label="USername/Account_id"><Input name="username" type="text" required/></Field>
          <Field label="Password"><Input name="password" type="password" required/></Field>
        </Fieldset.Content>
        <Button type="submit" alignSelf="flex-start">Login</Button>
      </Fieldset.Root>
      </Card.Body>
      </Card.Root>
      </Flex>
  )
}
