import React from 'react';
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

interface LinkCardProps {
  title: string;
  counLink: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, counLink }) => {
  return (
    <div>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>
           include {counLink} link
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default LinkCard;
