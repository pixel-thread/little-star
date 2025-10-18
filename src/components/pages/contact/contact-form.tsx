import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, ContactSchemaT } from "@/utils/validiation/contact";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import http from "@/utils/http";
import { env } from "@/env";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";
import { useState } from "react";

type Web3Response = {
  data: ContactSchemaT;
};
export const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    mutate,
    isPending,
    data,
    isSuccess: isEmailSent,
  } = useMutation({
    mutationFn: (data: ContactSchemaT) =>
      http.post<Web3Response>("https://api.web3forms.com/submit", {
        ...data,
        access_key: env.NEXT_PUBLIC_WEB3FORM_ACCESS_KEY,
      }),
    onSuccess: (data) => {
      if (data.success) {
        form.reset();
        setIsSuccess(true);
        return data;
      }
      setIsSuccess(false);
      return data;
    },
  });

  const form = useForm<ContactSchemaT>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactSchemaT> = (data) => mutate(data);

  return (
    <Card className="h-full w-full">
      <CardHeader>
        <CardTitle className="text-balance md:text-xl xl:text-3xl">
          Send us a Message
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="pb-8">
          {isEmailSent && (
            <div>
              {isSuccess ? (
                <Alert>
                  <CheckCircle2Icon />
                  <AlertTitle>Success! Your message has been sent</AlertTitle>
                  <AlertDescription>{data?.message}</AlertDescription>
                </Alert>
              ) : (
                <Alert variant={"destructive"}>
                  <AlertCircleIcon />
                  <AlertTitle>Error! Your message could not be sent</AlertTitle>
                  <AlertDescription>{data?.message}</AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8"
            action=""
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="please enter your first name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="space-y-2">
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="please enter your last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="please enter your email address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone no.</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="please enter your phone no."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="please enter your subject"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-2">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        rows={3}
                        className="min-h-[120px]"
                        placeholder="message"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              disabled={isPending}
              className="w-full px-8 py-6 cursor-pointer"
            >
              {isPending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
