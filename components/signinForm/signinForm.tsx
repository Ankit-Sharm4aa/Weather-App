import React from "react";
import "./signinForm.css";
import googleIcon from "./images/icons8-google-48.svg";
import githubIcon from "./images/github-mark.svg";
import { Stack } from "@mui/material";
import { doSocialLogin } from "@/app/actions";
import Image from "next/image";
const SigninForm: React.FC = () => {
  const buttonData = [
    {
      id: 1,
      name: "Google",
      icon: googleIcon,
    },
    {
      id: 2,
      name: "Github",
      icon: githubIcon,
    },
  ];
  return (
    <form action={doSocialLogin}>
      <Stack direction={"column"} gap={2} className="signin-Options">
        {buttonData.map((button) => {
          return (
            <button
              key={button.id}
              type="submit"
              name="action"
              value={`${button.name.toLowerCase()}`}
              className={`${button.name}-btn`}
            >
              <Image
                src={button.icon.src}
                alt={`${button.name} icon`}
                className="signin-options-icon"
                width={24}
                height={24}
              />
              Sign in with {button.name}
            </button>
          );
        })}
      </Stack>
    </form>
  );
};

export default SigninForm;
