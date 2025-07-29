"use client";
import { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { Select } from "../Select";
import { Label } from "../Label";
// import LogoCloud from "./LogoCloud";

export default function HeroSection() {
  const [subdomain, setSubdomain] = useState("");
  const [selectedDomain, setSelectedDomain] = useState(".io.mw");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  // Mock list of taken subdomains for validation
  const takenSubdomains = [
    "youragent",
    "test",
    "admin",
    "api",
    "www",
    "mail",
    "ftp",
  ];

  const handleClaim = async () => {
    setError("");

    if (!subdomain.trim()) {
      setError("Please enter a subdomain");
      return;
    }

    // Basic subdomain validation
    const subdomainRegex = /^[a-z0-9]([a-z0-9-]*[a-z0-9])?$/;
    if (!subdomainRegex.test(subdomain.toLowerCase())) {
      setError("Subdomain can only contain letters, numbers, and hyphens");
      return;
    }

    setIsChecking(true);

    // Simulate API call delay
    setTimeout(() => {
      if (takenSubdomains.includes(subdomain.toLowerCase())) {
        setError(`${subdomain}${selectedDomain} is taken. Try another.`);
      } else {
        // Success - you can replace this with actual claim logic
        alert(`${subdomain}${selectedDomain} is available! Claiming...`);
      }
      setIsChecking(false);
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleClaim();
    }
  };

  return (
    <div className="flex w-full max-w-lg flex-col gap-6 mb-2">
      {/* Hero Content */}
      <h1 className="dark:text-primary text-black bg-clip-text pb-1 text-5xl sm:text-5xl font-semibold dark:from-primary/90 dark:to-primary">
        AI Agents Need Domains
      </h1>
      <p className="mx-auto max-w-lg text-center text-md text-muted-foreground dark:opacity-80">
        Claim and manage sub‑domains in 30 seconds – zero DNS pain, built for AI
        Agents.
      </p>

      {/* Subdomain Form */}
      <div className="w-full max-w-lg mx-auto space-y-4">
        <div className="space-y-4">
          {/* <Label htmlFor="subdomain-input" className="text-sm font-medium">
            Choose your subdomain
          </Label> */}

          {/* Domain input field */}
          <div className="flex items-center gap-0 group px-2">
            <Input
              id="subdomain-input"
              type="text"
              placeholder="youragent"
              value={subdomain}
              onChange={(e) => {
                setSubdomain(e.target.value);
                setError("");
              }}
              onKeyDown={handleKeyDown}
              hasError={!!error}
              className="-mr-1 rounded-r-none border-r-0 flex-[3] transition-all duration-200 group-hover:shadow-md"
              inputClassName="pr-1 text-lg placeholder:text-muted-foreground/60 focus:placeholder:text-muted-foreground/40 py-3"
            />
            <Select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              hasError={!!error}
              className="w-32 rounded-l-none flex-shrink-0 transition-all duration-200 group-hover:shadow-md"
              selectClassName="rounded-l-none text-lg py-3"
            >
              <option value=".io.mw">.io.mw</option>
              <option value=".ai.mw">.ai.mw</option>
              <option value=".db.mw">.db.mw</option>
            </Select>
          </div>

          {/* Claim button */}
          <Button
            onClick={handleClaim}
            disabled={isChecking}
            variant="primary"
            className="w-full sm:w-auto mx-auto text-sm font-base transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isChecking ? (
              <span className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                Checking...
              </span>
            ) : (
              "Claim Subdomain"
            )}
          </Button>
        </div>

        {error && (
          <div className="animate-in slide-in-from-top-1 duration-200">
            <p className="text-sm text-destructive text-center bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2">
              {error}
            </p>
          </div>
        )}
      </div>
      {/* <LogoCloud /> */}
    </div>
  );
}
