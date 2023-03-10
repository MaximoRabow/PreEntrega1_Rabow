import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({tittle, imagen, detalle, precio, categoria, cantidad, valoracion ,id }) => {
  return (
    <div>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        id='card'>
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '280px' }}
            maxH={{ base: '100%', sm: '280px' }}
            src= {imagen}
            alt='img'
        />

        <Stack>
            <CardBody>
            <Heading size='md' id='titulocard'>
                {tittle}
            </Heading>

            <Text py='2' id='texto'>
                {detalle}
            </Text>
            <Text py='2' id='categ'>
             <b>Categoria:</b> {categoria}
            </Text>
            <Text py='2' id='valo'>
             <b>Valoracion:</b> {valoracion}
            </Text>
            <Text py='2' id='cant'>
             <b>Cantidad:</b> {cantidad}
            </Text>
            <Text py='2' id='precio'>
            <b>Precio:</b><span> $</span> {precio}
            </Text>
            </CardBody>

            <CardFooter>
            <Button variant='solid' colorScheme='blue' id='btncard'>
                <Link to={`/item/${id}`}>Detalle</Link>
            </Button>
            </CardFooter>
        </Stack>
        </Card>

    </div>
  )
}

export default Item