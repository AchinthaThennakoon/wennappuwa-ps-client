import React from "react";
import { Box, Typography } from "@mui/material";
import {
  LocationOn,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
} from "@mui/icons-material";

const contactInfo = [
  { icon: <LocationOn />, text: "Puttalam Road, Wennappuwa" },
  { icon: <Phone />, text: "0312 255 276" },
  { icon: <Mail />, text: "wennappuwaps@gmail.com" },
];

const quickLinks = [
  { name: "Home", href: "/home" },
  { name: "About Us", href: "/about-us" },
  { name: "Downloads", href: "/downloads" },
  { name: "Services", href: "/services" },
  { name: "Online Payment", href: "/online-payment" },
];

const supportLinks = [
  { name: "Inquiry", href: "/inquiry" },
  { name: "Emergency", href: "/emergency" },
];
const socialLinks = [
  {
    icon: <Facebook />,
    link: "https://facebook.com",
    hoverColor: "hover:text-blue-600",
  },
  {
    icon: <Instagram />,
    link: "https://instagram.com",
    hoverColor: "hover:text-pink-600",
  },
  {
    icon: <Twitter />,
    link: "https://twitter.com",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: <LinkedIn />,
    link: "https://linkedin.com",
    hoverColor: "hover:text-blue-700",
  },
];

function Footer() {
  return (
    <>
      <Box className="bg-gray-800 text-white py-4 mt-8 pt-16 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between">
          <div className="flex-1 text-left">
            <Typography class="text-3xl uppercase font-bold">
              Wennappuwa Pradeshiya Sabha
            </Typography>

            {contactInfo.map(({ icon, text }, index) => (
              <div key={index} className="flex items-center mt-4">
                <div class="text-lg mr-2">{icon}</div>
                <Typography class="text-lg font-medium">{text}</Typography>
              </div>
            ))}

            <div className="flex items-center space-x-4 mt-12">
              {socialLinks.map(({ icon, link, hoverColor }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div class={`text-white  ${hoverColor}`}>
                    {" "}
                    {React.cloneElement(icon, { sx: { fontSize: 34 } })}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1 text-left ml-28">
            <Typography variant="body2" class="text-xl uppercase font-semibold">
              Quick Links
            </Typography>
            <div className="mt-8 space-y-1">
              {quickLinks.map((link) => (
                <Typography variant="body2" class="text-lg" key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                </Typography>
              ))}
            </div>
          </div>

          <div className="flex-1 text-left ml-28">
            <Typography variant="body2" class="text-xl uppercase font-semibold">
              Support
            </Typography>
            <div className="mt-8 space-y-1">
              {supportLinks.map((link) => (
                <Typography variant="body2" class="text-lg" key={link.name}>
                  <a
                    href={link.href}
                    className="text-white hover:text-blue-500"
                  >
                    {link.name}
                  </a>
                </Typography>
              ))}
            </div>
          </div>

          <div className="flex-1 text-left ml-28">
            <Typography variant="body2" class="text-xl uppercase font-semibold">
              Subscribe Us
            </Typography>
            <div className="mt-8 space-y-1">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-b text-base border-gray-300  px-3 py-2 w-64 "
              />
            </div>
            <div className="mt-6">
              <button className="bg-blue-500 text-white px-6 py-2  text-base hover:bg-blue-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Box>

      <Box className="bg-gray-200 text-black py-2">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-center">
          <Typography variant="body2" className="text-center text-sm">
            &copy; 2025 My Website. All Rights Reserved.
          </Typography>
        </div>
      </Box>
    </>
  );
}

export default Footer;
