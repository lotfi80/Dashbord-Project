import { Alert, Button, MenuItem, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

const Form = () => {
  const regMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regPhoneNumber = /^(\+?\d{10,15}|0\d{9,14})$/;
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [open, setOpen] = React.useState(false);
  //   const { onClose, autoHideDuration, open } = state;
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const onSubmit = (data) => {
    console.log("data", data);
    handleClick();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      noValidate
      autoComplete="off"
    >
      <Stack direction={"row"} spacing={2}>
        <TextField
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName) &&
            "First Name is required & minimum 3 characters"
          }
          {...register("firstName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
        />
        <TextField
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName) &&
            "Last Name is required & minimum 3 characters"
          }
          {...register("lastName", { required: true, minLength: 3 })}
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
        />
      </Stack>

      <TextField
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) && "Please use a valid mail "}
        {...register("email", {
          required: true,

          pattern: regMail,
        })}
        label="Email "
        variant="filled"
      />
      <TextField
        error={Boolean(errors.phone)}
        helperText={Boolean(errors.phone) && "Please use a valid Phone Number "}
        {...register("phone", {
          required: true,

          pattern: regPhoneNumber,
        })}
        label="Contact Number"
        variant="filled"
        name="phone"
      />
      <TextField
        error={Boolean(errors.address)}
        helperText={
          Boolean(errors.lastName) &&
          "Last Name is required & minimum 3 characters"
        }
        {...register("lastName", { required: true, minLength: 3 })}
        label="Address 1"
        variant="filled"
      />
      <TextField label="Address 2" variant="filled" />
      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
        >
          Create new User
        </Button>
        <Snackbar
          open={open}
          onClose={handleClose}
          autoHideDuration={6000}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
            Account created successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
