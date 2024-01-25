"use client"

import React from 'react' 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input'
import { Button } from '@components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@components/ui/card'
import { Label } from '@components/ui/label'
import { useToast } from '@components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'


const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),

      password: z.string(),
  })
   

const SignInForm = () => {
  const router = useRouter()
  const { toast } = useToast()
  
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
      })


  const onSubmit = async (values:z.infer<typeof formSchema>) => {
        const signInData = await signIn('credentials',{
          email: values.email,
          password: values.password,
          redirect: false,
        });
        if(signInData?.error) {
          toast({
            title: "Error",
            description: "Oops! something when wrong!",
            variant: 'destructive'
          })
            }else{
              toast({
                title: "Welcome back!",
                description: "You have successfully signed in to your account.",
                variant: "default",
              });
          router.refresh()
          router.push('/dashboard')
        }
    } 




  return (
    <div className="flex justify-center items-center h-screen">
      <div className="">

      <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Sign In an account</CardTitle>
        <CardDescription>
          Enter your email below to Sign In your account
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-2">
        <Button variant={'secondary'}>Sign in with google</Button>
      <div className="font-sm mx-auto my-4 flex w-full items-center justify-evenly font-normal text-zinc-700 dark:text-zinc-300 before:mr-4 before:block before:h-px before:flex-grow before:bg-zinc-200 after:ml-4 after:block after:h-px after:flex-grow after:bg-zinc-200">
          or
        </div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email"  placeholder="m@example.com" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>password</FormLabel>
              <FormControl>
                <Input  type="password" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">Sign in</Button>
      </form>
    </Form> 
    
      </CardContent>
     
    </Card>
    </div>
    </div>
  )
}

export default SignInForm