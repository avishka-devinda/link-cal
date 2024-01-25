import React from 'react'
import LinkCard from '@components/link-card'
import { Button } from '@components/ui/button'
import { AddLinkDialog } from '@components/form/add-link-form'

const page = () => {
  return (
    <div className='py-3 px-2'>
        <div className='flex justify-end items-center py-3 px-2'>
            <Button>Create Link</Button>
            <AddLinkDialog/>
        </div>
        <div className='grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-4'>
        <LinkCard title='massmellow jotime  II' counLink="10 " />
        </div>
    </div>
  )
}

export default page