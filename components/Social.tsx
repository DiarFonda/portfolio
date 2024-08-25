"use client";

import React, { useState } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Instagram,
  CopyIcon,
  Check,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { socials } from "@/lib/data";

export const Social = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("DiarFondaa@gmail.com");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000); // Reset copied state after 2 seconds
    } catch (err) {
      alert(`Failed to copy to clipboard: ${err}`);
    }
  };
  return (
    <div className="grid grid-cols-2 gap-8">
      {socials.map((social) => {
        return social.name === "Gmail" ? (
          <Popover key={social.name}>
            <PopoverTrigger>
              <div className="flex-1 flex flex-col justify-center gap-4 rounded-lg hover:bg-slate-800 dark:hover:bg-secondary-darker border-8 border-accent border-double p-5 dark:bg-primary-darker dark:hover:text-primary hover:text-secondary hover:border-solid hover:border-4 cursor-pointer transition	">
                <div className="w-full flex justify-between items-center">
                  <div>{social.icon}</div>
                </div>
                <h2 className="text-xl font-bold self-start">{social.name}</h2>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex justify-center items-center">
                Diarfondaa@gmail.com
                <div className="flex flex-col justify-center items-center ">
                  {isCopied ? (
                    <Check className="ml-4 text-accent" />
                  ) : (
                    <CopyIcon
                      className="ml-4 cursor-pointer hover:bg-slate-400 p-1 rounded-md"
                      onClick={copyToClipboard}
                    />
                  )}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        ) : (
          <Link
            key={social.name}
            className="flex-1 flex flex-col justify-center gap-4 rounded-lg hover:bg-slate-800 dark:hover:bg-secondary-darker border-8 border-accent border-double p-5 dark:bg-primary-darker dark:hover:text-primary hover:text-secondary hover:border-solid hover:border-4 cursor-pointer transition	"
            href={social.href}
            target="_blank"
          >
            <div className="w-full flex justify-between items-center">
              <div>{social.icon}</div>
            </div>
            <h2 className="text-xl font-bold">{social.name}</h2>
          </Link>
        );
      })}
    </div>
  );
};
