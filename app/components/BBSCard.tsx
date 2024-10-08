import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BBSDataType } from '../types/types';


interface BBSAllDataProps{
  bbsData: BBSDataType
}

const BBSCard = ({bbsData}: BBSAllDataProps) => {
  const {id, title, content, createdAt, username} = bbsData

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`} className="text-blue-500">Read More</Link>
      </CardFooter>
    </Card>
  )
}

export default BBSCard
