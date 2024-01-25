'use client'
import { useState, useEffect, SetStateAction } from "react";
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
import axios from "axios";

export function AddSubLinkDialog() {
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");

  // useEffect( () => {
  //   // Make an API call to fetch title when URL changes
  //   if (url) {
  //     axios.get(`/api/link?url=${url}`)
  //       .then(response => {
  //         setTitle(response.data.title);
  //       })
  //       .catch(error => {
  //         console.error("Error fetching title:", error);
  //       });
  //   }
  // }, [url]);



  const handleUrlChange = async(event:any ) => {

    setUrl(event.target.value);

    const link = event.target.value

    console.log(link,'link')
    try{
      const res = await  axios.get(`/api/link?url=${link}`)
      
      console.log(res.data.meta.title)

      setTitle(res.data.meta.title)

      }
      catch(err){
        console.log('error',err)
        setTitle('')

      }

    
  };

  const handleSave = () => {
    // Implement your save logic here, using 'url' and 'title'
    // You can use axios.post or your preferred method to save the data
    // e.g., axios.post('/api/save-link', { url, title })
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >create sub link</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Link</DialogTitle>
          <DialogDescription>
            Type your link name and click save button.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-3">
        {title &&
          <div className="items-center space-y-2">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Auto-generated title"
              className="col-span-3"
              value={title}
              readOnly
            />
          </div>
}
          <div className="items-center space-y-2">
            <Label htmlFor="url" className="text-right">
              URL
            </Label>
            <Input
              id="url"
              placeholder="Enter URL"
              className="col-span-3"
              value={url}
              onChange={handleUrlChange}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
