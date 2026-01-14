import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6 min-w-lg", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Get in touch</CardTitle>
          <CardDescription>Get in touch description</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Fill form text
              </FieldSeparator>
              <Field>
                <FieldLabel htmlFor="fullname">Full Name</FieldLabel>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="full name"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="fullname">Phone</FieldLabel>
                <Input
                  id="fullname"
                  type="text"
                  placeholder="+91 1234567890"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Message</FieldLabel>
                <Input
                  id="message"
                  type="tel"
                  placeholder="m@example.com"
                  required
                />
              </Field>


              <Field>
                <Button type="submit">Get in touch</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center hid">
       Our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
