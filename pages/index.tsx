import Head from 'next/head'
import Image from 'next/image'
import { Spinner, Stack } from '@chakra-ui/react'

export default function Home() {
  return (
    <Stack direction='row' spacing={4}>
  <Spinner size='xs' />
  <Spinner size='sm' />
  <Spinner size='md' />
  <Spinner size='lg' />
  <Spinner size='xl' />
</Stack>
  )
}
