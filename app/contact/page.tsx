"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Mail, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { toast } = useToast();

  const formSchema = z.object({
    firstname: z.string().min(2, {
      message: "User Name must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
      message: "Last Name must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().startsWith("+", {
      message: "Please write full number with country code included",
    }),
    message: z.string({ required_error: "Message is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  });

  const handleSubmit = (data: any) => {
    fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application-json",
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (data?.id) {
          toast({
            title: "Message sent!",
            description: "Thank you for your message!",
          });
          form.reset();
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:gap-[30px]">
          <div className="md:h-[54%] order-2 md:order-none">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="flex flex-col gap-6 p-10 bg-slate-50 dark:bg-slate-800 rounded-xl "
              >
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-primary dark:text-secondary-darker">
                  Let's collaborate - contact me to create innovative and
                  impactful software solutions tailored to your needs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Firstname"
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Lastname"
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Email"
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Phonenumber"
                            className="w-full"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="h-[200px]"
                          placeholder="Type your message here."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  size="md"
                  className="max-w-40 cursor-pointer"
                  type="submit"
                >
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          <div className="flex-1 flex items-center md:justify-end order-1 md:order-none mb-8 md:mb-0">
            <ul className="flex flex-col gap-10">
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52] md:w-[72px] md:h-[72px] text-accent flex items-center justify-center">
                  <div className="text-[28px] ">
                    <Mail />
                  </div>
                </div>
                <div className="flex-1">
                  <p className=" text-primary dark:text-secondary">email</p>
                  <h3 className="text-xl">diarfondaa@gmail.com</h3>
                </div>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[52px] h-[52] md:w-[72px] md:h-[72px] text-accent flex items-center justify-center">
                  <div className="text-[28px]">
                    <MapPin />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-primary dark:text-secondary">city</p>
                  <h3 className="text-xl">prishtina, Kosova</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
