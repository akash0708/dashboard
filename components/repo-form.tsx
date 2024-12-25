"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  repositoryName: z.string().min(1, "Repository name is required"),
  technology: z.string().min(1, "Technology is required"),
  visibility: z.enum(["public", "private"]),
});

export function RepositoryForm() {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      repositoryName: "",
      technology: "",
      visibility: "public",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    try {
      const response = await fetch("/api/repo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      console.log(await response.json());
      toast({
        title: "Success!",
        description: "New repository created.",
      });
      setOpen(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="flex-1 md:flex-none">
          <Plus className="h-4 w-4 mr-2" />
          <span className="inline">Add Repository</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-[#175CD3]">
            Create New Repository
          </DialogTitle>
          <DialogDescription className="text-black">
            Fill in the details to create your new repository.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="repositoryName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Repository Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="my-awesome-project"
                      {...field}
                      className="border-[#B2DDFF] focus:border-[#175CD3]"
                    />
                  </FormControl>
                  {/* <FormDescription className="text-[#175CD3]">
                    Choose a unique name for your repository.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="technology"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Technology</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="React, Node.js, etc."
                      {...field}
                      className="border-[#B2DDFF] focus:border-[#175CD3]"
                    />
                  </FormControl>
                  {/* <FormDescription className="text-[#175CD3]">
                    Specify the main technology used in your project.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Visibility</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-[#B2DDFF] focus:border-[#175CD3]">
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <FormDescription className="text-[#175CD3]">
                    Choose whether your repository will be public or private.
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-[#175CD3] text-white hover:bg-[#1851A9]"
            >
              Create Repository
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
