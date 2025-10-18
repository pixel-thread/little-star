import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-balance">Send us a Message</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <form className="space-y-8" action="">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name-aB3x9">First name</Label>
              <Input id="first-name-aB3x9" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name-cD4y8">Last name</Label>
              <Input id="last-name-cD4y8" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-eF5z7">Email</Label>
            <Input
              id="email-eF5z7"
              type="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email-eF5z7">Phone</Label>
            <Input id="phone-eF5z7" type="tel" placeholder="9876543210" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject-gH6w6">Subject</Label>
            <Input id="subject-gH6w6" placeholder="How can we help?" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message-iJ7v5">Message</Label>
            <Textarea
              id="message-iJ7v5"
              placeholder="Tell us more about your project..."
              className="min-h-[120px]"
            />
          </div>
          <Button className="w-full px-8 py-6 cursor-pointer">
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
