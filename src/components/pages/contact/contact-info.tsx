import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const ContactInfo = () => {
  return (
    <div className="flex h-full flex-col space-y-6">
      {/* Contact Information */}
      <Card className="flex-1 gap-3">
        <CardHeader>
          <CardTitle className="text-lg text-balance">
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex size-8 items-center justify-center rounded-full">
              <Mail className="text-primary size-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Email</h4>
              <p className="text-muted-foreground text-xs">
                {/* TODO: Add real email address */}
                example@example.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-primary/10 flex size-8 items-center justify-center rounded-full">
              <Phone className="text-primary size-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Phone</h4>
              <p className="text-muted-foreground text-xs">
                +91 (700) 594 3521
                <br />
                +91 (986) 2864 573
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-primary/10 mt-0.5 flex size-8 items-center justify-center rounded-full">
              <MapPin className="text-primary size-4" />
            </div>
            <div>
              <h4 className="text-sm font-medium">Address</h4>
              <p className="text-muted-foreground capitalize text-xs">
                Nongbah Bynther <br />
                Eastern west khasi hills district <br />
                meghalaya - 793120
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Hours */}
      <Card className="gap-3">
        <CardHeader>
          <CardTitle className="text-lg text-balance">Office Hours</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Monday - Friday</span>
              <span className="text-muted-foreground">9:00 AM - 4:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday</span>
              <span className="text-muted-foreground">Closed</span>
            </div>
            <div className="flex justify-between">
              <span>Sunday</span>
              <span className="text-muted-foreground">Closed</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Alternative Contact */}
      <Card className="gap-3">
        <CardHeader>
          <CardTitle className="text-lg text-balance">
            Prefer to Call?
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-3 text-sm">
            Speak directly with our team for immediate assistance.
          </p>
          <Button asChild variant="outline">
            <Link
              href={"tel:9876543210"}
              className={cn(
                buttonVariants({
                  className: "w-full px-6 py-4 cursor-pointer",
                  variant: "outline",
                }),
              )}
            >
              <Phone className="me-2 size-4" />
              Schedule a Call
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
