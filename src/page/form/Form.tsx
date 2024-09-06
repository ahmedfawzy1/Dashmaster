import { Alert, Button, MenuItem, Snackbar, SnackbarCloseReason, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Header from "../../components/Header/Header";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  contact: number;
};

export default function Form() {
  const [open, setOpen] = useState(false);
  const regEmail = /^\S+@\S+\.\S+$/i;
  const regPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = () => {
    handleClick();
    // console.log(data);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const roles = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manger",
      label: "Manger",
    },
    {
      value: "User",
      label: "User",
    },
  ];

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Header title={"CREATE USER"} subTitle={"Create a New User Profile"} IsHomePage={false} />
      <Stack sx={{ gap: 2 }} direction={"row"}>
        <TextField
          {...register("firstName", { required: true, minLength: 4 })}
          helperText={errors.firstName ? "First Name must be at least 4 characters long." : ""}
          error={Boolean(errors.firstName)}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          {...register("lastName", { required: true, minLength: 4 })}
          helperText={errors.lastName ? "Last Name must be at least 4 characters long." : ""}
          error={Boolean(errors.lastName)}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        {...register("email", { required: true, pattern: regEmail })}
        helperText={errors.email ? "Please enter a valid email address (user@example.com)." : ""}
        error={Boolean(errors.email)}
        label="Email"
        variant="filled"
      />
      <TextField
        {...register("contact", { required: true, pattern: regPhone })}
        helperText={errors.contact ? "Please enter a valid phone number" : ""}
        error={Boolean(errors.contact)}
        label="Contact Number"
        variant="filled"
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />

      <TextField id="filled-select-currency" select label="Role" defaultValue="User" helperText="Please select your currency" variant="filled">
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" sx={{ textTransform: "capitalize" }} variant="contained">
          Create New User
        </Button>

        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
          <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%", color: "#fff" }}>
            User has been successfully created!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
