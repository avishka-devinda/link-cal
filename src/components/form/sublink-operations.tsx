import { Button } from '@components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@components/ui/dropdown-menu'
import { MoreVertical, Pencil,Trash2 } from 'lucide-react'
import React from 'react'

const SublinkOperations = () => {
  return (
    <div>
        <DropdownMenu>
  <DropdownMenuTrigger>
  <Button variant={'ghost'} className="mx-2 px-2">
        <MoreVertical className="w-4 h-4" />
        </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem className='flex '>
        <Pencil className="w-4 h-4 mr-2" />
        edit</DropdownMenuItem>
    <DropdownMenuItem className='flex text-red-500 '>
    <Trash2 className="w-4 h-4 mr-2" />

        delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}

export default SublinkOperations