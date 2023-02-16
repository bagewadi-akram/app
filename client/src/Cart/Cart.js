import React, { useState } from "react";
import "./cart.css";

import ReviewProducts from "./ReviewProducts";
import AddAddress from "./AddAddress";
import Payment from "./Payment";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import { useStateValue } from "../Context/StateProvider";

function Cart() {
  const [{ user }] = useStateValue();
  const steps = [
    {
      label: "Information",
      description: `Review product in your cart and proceed to Checkout`,
    },
    {
      label: "Shipping",
      description: `Add the shipping address for delivery`,
    },
    {
      label: "Payment",
      description: `Complete your payment `,
    },
  ];

  const first = <ReviewProducts />;
  const second = <AddAddress />;
  const third = <Payment />;
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className="cartNew">
      <div className="cartHeading">
        <h3>
          {user && "Welcome,"}{" "}
          {user ? user.fname : "Please login to explore more offers"}
        </h3>
      </div>
      <div className="cartContent">
        <div className="stepper">
          <Box sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                  // optional={
                  //   index === 2 ? (
                  //     <Typography variant="caption">Last step</Typography>
                  //   ) : null
                  // }
                  >
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{
                            mt: 1,
                            mr: 1,
                            fontWeight: 600,
                            color: "#111",
                            background: "#2abc",
                            paddingBottom: 0,
                          }}
                        >
                          {index === steps.length - 1 ? "Finish" : "Continue"}
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ color: "#111", mt: 1, mr: 1 }}
                        >
                          Back
                        </Button>
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {/* {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                  Reset
                </Button>
              </Paper>
            )} */}
          </Box>
        </div>
        <div className="cartItems">
          {activeStep === 0 && first}
          {activeStep === 1 && second}
          {activeStep === 2 && third}
        </div>
      </div>
    </div>
  );
}

export default Cart;
