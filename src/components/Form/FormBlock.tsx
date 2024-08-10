import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { Resolver, useForm } from "react-hook-form";
import { z } from "zod";
import Background from "../img/AllPhoto/images.jpg";
import ArrowDrop from "../img/ArrowDrop";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "../utils/form";
import { Input } from "../utils/input";

export declare const zodResolver: Resolver;

const formSubroOrgSchema = z.object({
  organizationName: z.string().min(1, "miss Name"),
  email: z.string().email(),
  password: z.string().min(8).max(100)
});

const FormBlock: React.FC<{}> = () => {
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

  return (
    <Form {...form}>
      <form
        style={{
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center border-[1px] bg-red-300"
      >
        <div className="p-[30px]">
          Der erste Schritt zur Schaffung Ihres eigenen Komforts
        </div>
        <div
          className="rounded-xl px-[93px] pt-[110px] pb-[150px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(91, 91, 91, 0.42) 29.5%, rgba(168, 167, 167, 0.514061) 54%, rgba(35, 35, 35, 0.592766) 74.5%, rgba(0, 0, 0, 0.7) 100%)"
          }}
        >
          <div className="bg-gray-00">
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDrop />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  borderBottom: "1px solid #000000"
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    marginRight: "10px"
                  }}
                >
                  Renovierungsarbeiten
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Ausmallen wende decke"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Wand durchbrucken"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Heizunkörpa tauschen"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Wasser versitsen"
                  />{" "}
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Neu Steckdosse"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Strom vorbeitung"
                  />
                </FormGroup>
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          id="password"
                          placeholder="Kommentar."
                          className="h-[164px] w-[977px] mt-[43px] focus-visible:ring-offset-[-5px] focus-visible:ring-shadow-none"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDrop />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  borderBottom: "1px solid #000000"
                }}
              >
                <Typography>Böden</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Vinyl-Boden"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Laminat Boden"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Echtholz"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Fliesen"
                  />{" "}
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Bodenheizung"
                  />
                </FormGroup>
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          id="password"
                          placeholder="Kommentar."
                          className="h-[164px] w-[977px] mt-[43px] focus-visible:ring-offset-[-5px] focus-visible:ring-shadow-none"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDrop />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  borderBottom: "0.5px solid #000000"
                }}
              >
                <Typography> Wandgestaltungen</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Wandmalerei"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Spachteln der Wände"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Verputzen von Wänden"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Fliesen für Wand"
                  />{" "}
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Paneele für Wände"
                  />
                </FormGroup>

                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          id="password"
                          placeholder="Kommentar."
                          className="h-[164px] w-[977px] mt-[43px] focus-visible:ring-offset-[-5px] focus-visible:ring-shadow-none"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDrop />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  borderBottom: "1px solid #000000"
                }}
              >
                <Typography>Küchen</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Projekt einer neuen Küche."
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Küche Montage"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Alte Küche Demontage"
                  />
                </FormGroup>
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          id="password"
                          placeholder="Kommentar."
                          className="h-[164px] w-[977px] mt-[43px] focus-visible:ring-offset-[-5px] focus-visible:ring-shadow-none"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDrop />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  borderBottom: "1px solid #000000"
                }}
              >
                <Typography>Bäder</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Projekt einer neuen Bade."
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Bade Montage"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Alte Bade Demontage"
                  />
                </FormGroup>
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          id="password"
                          placeholder="Kommentar."
                          className="h-[164px] w-[977px] mt-[43px] focus-visible:ring-offset-[-5px] focus-visible:ring-shadow-none"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ArrowDrop />}
                sx={{
                  backgroundColor: "transparent",
                  borderBottom: "1px solid #000000"
                }}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Wohnideen</Typography>
                {/* <div className="mt-2.5 ml-3">
                  <ArrowDrop rotate={isArrowRotated ? 180 : 0} />
                </div> */}
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Ändere Möbel Plannung und Montage"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Stein"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Glas"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        sx={{
                          // color: pink[800],
                          "&.Mui-checked": {
                            color: "black"
                          }
                        }}
                      />
                    }
                    label="Umfassende Gestaltung Ihrer Wohnung"
                  />{" "}
                </FormGroup>
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormControl>
                        <Input
                          type="text"
                          id="password"
                          placeholder="Kommentar."
                          className="h-[164px] w-[977px] mt-[43px] focus-visible:ring-offset-[-5px] focus-visible:ring-shadow-none"
                          required
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </AccordionDetails>
            </Accordion>
          </div>
          <div>
            <FormField
              name="kommentar"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormControl>
                    <Input
                      type="text"
                      id="kommentar"
                      placeholder="Kommentar."
                      className="h-[264px] w-[977px] mt-[43px] focus-visible:ring-offset-[-5px] focus-visible:ring-shadow-none"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col items-center mt-[100px]">
            <div className="text-[50px] flex w-[715px] text-center tracking-[3px] justify-center text-[#323232] text-[50px] border-[#323232] border-b-[1px]">
              Kontakt Info
            </div>
            <div className="grid grid-cols-2 mt-[70px] gap-16">
              <FormField
                name="vorname"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col ">
                    <FormControl>
                      <Input
                        type="outlined"
                        id="vorname"
                        placeholder="vorname"
                        required
                        className="h-[51px] w-[400px] focus-visible:ring-offset-[-5px] focus-visible:ring-shadow-none"
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
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <Input
                        type="text"
                        id="nachname"
                        placeholder="nachname"
                        className="h-[51px] w-[400px] focus-visible:ring-offset-[-5px] focus-visible:ring-shadow-none"
                        required
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
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <Input
                        type="text"
                        id="password"
                        placeholder="e-mail"
                        className="h-[51px] w-[400px] focus-visible:ring-offset-[-5px] outline-none focus-visible:ring-shadow-none"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="telefonnummer"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <Input
                        type="text"
                        id="telefonnummer"
                        placeholder="telefonnummer"
                        className="h-[51px] w-[400px] focus-visible:ring-offset-[-5px] outline-none focus-visible:ring-shadow-none"
                        required
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                // onClick={console.log}
                className="w-[401px] h-[78px] bg-[#C5D20D] text-[30px] mt-[140px] rounded-lg"
              >
                Anfrage Stellen
              </button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default FormBlock;
