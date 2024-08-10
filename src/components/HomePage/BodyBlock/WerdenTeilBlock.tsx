import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "../../utils/form";

export declare const zodResolver: Resolver;

const formSubroOrgSchema = z.object({
  organizationName: z.string().min(1, "miss Name"),
  email: z.string().email(),
  password: z.string().min(8).max(100)
});

const WerdenTeilBlock: React.FC<{}> = () => {
  const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const form = useForm({
    defaultValues: {
      organizationName: "",
      email: "",
      password: ""
    }
    // resolver: zodResolver(formSubroOrgSchema),
  });

  async function onSubmit(values: z.infer<typeof formSubroOrgSchema>) {
    console.log("values:", values);
  }

  const teamMembers = [
    { item: "Team Member 1" },
    { item: "Team Member 2" },
    { item: "Team Member 3" },
    { item: "Team Member 4" },
    { item: "Team Member 5" }
  ];

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center"
      >
        <div className="text-[50px] flex w-[1146px] text-center tracking-[3px] justify-center text-[#323232] border-[#323232] border-b-[1px]">
          Werden Sie Teil unserer zufriedenen Kunden
        </div>
        <div className="flex flex-col border-[0.5px] border-[#000000] w-[50%] h-[515px] mt-[50px] rounded-xl p-16">
          <div className="flex flex-wrap gap-6 justify-between">
            <FormField
              name="vorname"
              control={form.control}
              render={({ field }) => (
                <FormItem
                  style={{
                    background: "#D9D9D98C",
                    padding: "10px",
                    borderRadius: "10px"
                  }}
                  className="flex flex-col "
                >
                  <FormControl>
                    <TextField
                      id="vorname"
                      label="vorname"
                      variant="standard"
                      className="h-[51px] w-[400px] focus-visible:ring-offset-[-5px] outline-none focus-visible:ring-shadow-none"
                      InputProps={{
                        placeholder: "vorname",
                        style: {
                          "&::placeholder": {
                            color: "#4A4A4A80" // Placeholder text color
                          }
                        }
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="nachname"
              control={form.control}
              render={({ field }) => (
                <FormItem
                  style={{
                    background: "#D9D9D98C",
                    padding: "10px",
                    borderRadius: "10px"
                  }}
                  className="flex flex-col"
                >
                  <FormControl>
                    <TextField
                      id="nachname"
                      label="nachname"
                      variant="standard"
                      className="h-[51px] w-[400px] focus-visible:ring-offset-[-5px] outline-none focus-visible:ring-shadow-none"
                      InputProps={{
                        placeholder: "nachname",
                        style: {
                          "&::placeholder": {
                            color: "#4A4A4A80" // Placeholder text color
                          }
                        }
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem
                  style={{
                    background: "#D9D9D98C",
                    padding: "10px",
                    borderRadius: "10px"
                  }}
                  className="flex flex-col"
                >
                  <FormControl>
                    <TextField
                      id="e-mail"
                      label="e-mail"
                      variant="standard"
                      className="h-[51px] w-[400px] focus-visible:ring-offset-[-5px] outline-none focus-visible:ring-shadow-none"
                      InputProps={{
                        placeholder: "e-mail",
                        style: {
                          "&::placeholder": {
                            color: "#4A4A4A80" // Placeholder text color
                          }
                        }
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex mt-[40px]">
            <FormField
              name="bewertung"
              control={form.control}
              render={({ field }) => (
                <FormItem
                  style={{
                    background: "#D9D9D98C",
                    padding: "10px",
                    borderRadius: "10px"
                  }}
                  className="flex flex-col"
                >
                  <FormControl>
                    <TextField
                      id="comment"
                      label="bewertung"
                      variant="standard"
                      className="h-[264px] w-[977px] mt-[43px] focus-visible:ring-offset-[-5px] outline-none focus-visible:ring-shadow-none"
                      InputProps={{
                        placeholder: "bewertung",
                        style: {
                          "&:placeholder": {
                            color: "#4A4A4A80"
                          }
                        }
                      }}
                      multiline
                      rows={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="h-[264px] mt-[43px] flex flex-col ml-[95px] justify-between">
              <div className="w-[72px] h-[70px] text-white">Rating</div>
              <button
                type="submit"
                onClick={console.log}
                className="w-[472px] h-[70px] bg-[#C5D20D] text-[30px] rounded-lg"
              >
                Bewertung hinterlassen
              </button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default WerdenTeilBlock;
