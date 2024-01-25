'use client'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SublinkOperations from "./sublink-operations";
import { useState } from "react";
import { Check, Plus } from "lucide-react";

export function AddLinkDialog() {

  const [editId, setEditId] = useState('')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Link</DialogTitle>
          <DialogDescription>
            type your link name and click save button.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
          <div className=" items-center space-y-2">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" placeholder="type your collection name" className="col-span-3" />
          </div>

          <section className="space-y-3">
          <Label htmlFor="name" className="text-right">
              Sub links
            </Label>
            {!editId? 
            <Card className="flex justify-between items-center">
              <CardContent className="p-3">
                <h2 className="text-base ">massmellow news song</h2>
                <p className="text-sm text-gray-300">
                  https://new.massmellow/song/new-world
                </p>
              </CardContent>
              <SublinkOperations />
            </Card>
            :
            <div className="flex">
            <Input id="name" placeholder="edit your link" className="col-span-3" />
          <Button className="px-4 ml-2"><Check className="w-4 h-4"/></Button>
            </div>
}
<div className="flex">
            <Input id="name" placeholder="edit your link" className="col-span-3" />
          <Button className="px-4 ml-2"><Plus className="w-4 h-4"/></Button>
            </div>
          </section>
        </div>
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
