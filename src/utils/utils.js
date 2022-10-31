export const generateOtp = (length = 6) => {
  let chars = "1234567890";
  let otp = "";
  for (let i = 0; i < length; i++) {
    otp += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return otp;
};

export const dateGenerator = () => {
  const date = new Date();
  const newDate = date.toLocaleString("en-US", {
    day: "numeric",
    year: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return newDate;
};

export const videoUrlEmbed = (str) => {
  var res = str.split("=");
  var embeddedUrl = "https://www.youtube.com/embed/" + res[1];
  return embeddedUrl;
};
