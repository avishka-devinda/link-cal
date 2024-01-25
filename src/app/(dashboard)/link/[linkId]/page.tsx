import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";
import { Button } from "@components/ui/button";
import Link from "next/link";
import { AddSubLinkDialog } from "@components/form/add-sublink-form";

const NoteCard = () => {
  return (
    <div className="p-5">
      <div className="flex justify-end py-5">

          <AddSubLinkDialog/>

      </div>
      <Card className="w-full my-3 bg-zinc-50 text-zinc-900" >
        <CardHeader>
          <CardTitle className="text-lg">massmellow joytime II</CardTitle>
          
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 gap-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">massmellow joytime II</CardTitle>
          <CardDescription>
            https://spotifiy/massmellow/joytime-ii
          </CardDescription>
        </CardHeader>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">massmellow joytime II</CardTitle>
          <CardDescription>
            https://spotifiy/massmellow/joytime-ii
          </CardDescription>
        </CardHeader>
      </Card>
      </div>
    </div>
  );
};

export default NoteCard;
