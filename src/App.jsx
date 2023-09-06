import * as React from "react";
// Layout
import Card from "@mui/joy/Card";
import Grid from "@mui/joy/Grid";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";

// Useful buttons imports
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import { SvgIcon } from "@mui/joy";

import AddIcon from "@mui/icons-material/Add";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import Controller from "./components/Controller";
import Copyright from "./Copyright";
import IconLibrary from "./components/IconLibrary";

export default function App() {
  return (
    <Controller>
      <Stack direction="column" padding={2}>
        <Sheet sx={{ my: 2 }}>
          <Typography level="h1" fontSize="xxl">
            Scaffolding for MUI Joy Components
          </Typography>
        </Sheet>
        <Card>
          <Stack direction="row" spacing={2}>
            <Typography level="h1" fontSize="s">
              Nav bar
            </Typography>
            <Button endDecorator={<MenuIcon />} variant="solid">
              Solid
            </Button>
            <Button endDecorator={<ArrowDropDownIcon />} variant="soft">
              Soft
            </Button>
            <Button startDecorator={<AddIcon />} variant="outlined">
              Outlined
            </Button>
            <Button startDecorator={<SearchIcon />} variant="plain">
              Plain
            </Button>
          </Stack>
        </Card>
      </Stack>
      <Grid
        container
        padding={2}
        spacing={2}
        rowSpacing={1}
        sx={{ flexGrow: 1 }}
      >
        <Grid xs={12} lg={4} spacing={2} rowSpacing={1} sx={{ flexGrow: 1 }}>
          <IconLibrary />
        </Grid>
        <Grid
          container
          xs={12}
          lg={8}
          spacing={2}
          rowSpacing={1}
          sx={{ flexGrow: 1 }}
        >
          <Grid xs={12} lg={6}>
            <Stack
              spacing={2}
              sx={{
                // maxWidth: "60ch",
                "& *:not(path, i)": {
                  outline: "1px solid rgb(255 53 53 / 40%)",
                },
              }}
            >
              <Stack direction="row" spacing={1.5}>
                <Sheet variant="outlined" color="neutral" sx={{ p: 1 }}>
                  <InfoIcon />
                </Sheet>
                <Sheet variant="outlined" color="neutral" sx={{ p: 1 }}>
                  <Typography level="title-lg">
                    <i>title-lg</i>: Title of the component
                  </Typography>
                  <Typography level="body-lg">
                    <i>body-lg</i>: This is the description of the component
                    that contain some information of it.
                  </Typography>
                  <Typography level="body-md">
                    <i>body-md</i>: This is the description of the component
                    that contain some information of it.
                  </Typography>
                  <Typography level="body-sm">
                    <i>body-sm</i>: Metadata, e.g. a date.
                  </Typography>
                </Sheet>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <Sheet variant="outlined" color="neutral" sx={{ p: 1 }}>
                  <InfoIcon />
                </Sheet>
                <Sheet variant="outlined" color="neutral" sx={{ p: 1 }}>
                  <Typography level="title-md">
                    <i>title-md</i>: Title of the component
                  </Typography>
                  <Typography level="body-md">
                    <i>body-md</i>: This is the description of the component
                    that contain some information of it.
                  </Typography>
                  <Typography level="body-sm">
                    <i>body-sm</i>: Metadata, e.g. a date.
                  </Typography>
                </Sheet>
              </Stack>
            </Stack>
          </Grid>
          <Grid xs={12} lg={6}>
            <Stack
              spacing={2}
              sx={{
                // maxWidth: "60ch",
                "& *:not(path, i)": {
                  outline: "1px solid rgb(255 53 53 / 40%)",
                },
              }}
            >
              <Stack direction="row" spacing={2}>
                <Sheet variant="outlined" color="neutral" sx={{ p: 1, pl: 2 }}>
                  <Typography level="title-sm">
                    <i>title-sm</i>: Title of the component
                  </Typography>
                  <Typography level="body-sm">
                    <i>body-sm</i>: This is the description of the component
                    that contain some information of it.
                  </Typography>
                  <Typography level="body-xs">
                    <i>body-xs</i>: Metadata, e.g. a date.
                  </Typography>
                </Sheet>
              </Stack>
              <Card variant="outlined" sx={{ maxWidth: 400 }}>
                <Typography level="h1">National Parks</Typography>
                <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
                  Yosemite National Park
                </Typography>
                <Typography>
                  Yosemite National Park is a national park spanning 747,956
                  acres (1,169.4 sq mi; 3,025.2 km2) in the western Sierra
                  Nevada of Central California.
                </Typography>
              </Card>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Sheet>
        <Copyright />
      </Sheet>
    </Controller>
  );
}
