import emailjs from "@emailjs/browser";

export const sendOtpToMail = (userName, email, otp) => {
  let templateParams = {
    from_name: "Reverr",
    to_name: userName,
    to_email: email,
    otp: otp,
  };

  return emailjs.send(
    "service_lfmmz8k",
    "template_n3pcht5",
    templateParams,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};

export const sendAccountHasBeenCreatedMail = (name, email) => {
  let templateParams = {
    subject: "Account Verification Confirmed",
    name: name,
    email: email,
    message:
      "Congratulations ! Welcome to reverr your account has been created successfully",
  };

  return emailjs.send(
    "service_lfmmz8k",
    "template_6lqwjap",
    templateParams,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};

export const sendInteredtedDealMail = (name, email, startupName) => {
  let templateParams = {
    subject: "Interested Deal",
    name: name,
    email: email,
    message: `You are interested in the ${startupName} and we will revert back for the same soon.
    `,
  };

  return emailjs.send(
    "service_lfmmz8k",
    "template_6lqwjap",
    templateParams,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};

export const sendUserInterestedDealToMail = (
  startup_name,
  investor_name,
  user_Name
) => {
  let templateParams = {
    investor_name,
    startup_name,
    user_Name,
  };

  return emailjs.send(
    "service_lfmmz8k",
    "template_xbc7yyl",
    templateParams,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  );
};
