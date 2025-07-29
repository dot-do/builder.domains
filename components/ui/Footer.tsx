import { RiArrowRightUpLine } from "@remixicon/react"
import Link from "next/link"
import ThemeSwitch from "../ThemeSwitch"

const navigation = {
  product: [
    { name: "Enterprise", href: "#", external: false },
    { name: "Pricing", href: "/pricing", external: false },
    { name: "Docs", href: "#", external: false },
    { name: "Changelog", href: "/changelog", external: false },
  ],
  resources: [
    { name: "FAQs", href: "/pricing#faq-title", external: false },
    { name: "GitHub", href: "#", external: true },
    { name: "Discord", href: "#", external: true },
    { name: "YouTube", href: "#", external: true },
  ],
  company: [
    { name: "About", href: "/about", external: false },
    { name: "Careers", href: "#", external: true },
    { name: "Contact", href: "#", external: false },
    { name: "Status", href: "#", external: false },
  ],
  legal: [
    { name: "Imprint", href: "#", external: false },
    { name: "Privacy", href: "#", external: false },
    { name: "Terms", href: "#", external: false },
    { name: "DPA", href: "#", external: false },
  ],
}

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24 dark:border-gray-800">
          <p className="text-sm leading-5 text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Builder.domains, by do.industries Inc. All rights
            reserved.
          </p>
          <div className="rounded-full border border-gray-200 py-1 pl-1 pr-2 dark:border-gray-800">
            <div className="flex items-center gap-1.5">
              {/* <div className="relative size-4 shrink-0">
                <div className="absolute inset-[1px] rounded-full bg-emerald-500/20 dark:bg-emerald-600/20" />
                <div className="absolute inset-1 rounded-full bg-emerald-600 dark:bg-emerald-500" />
              </div> */}
              <div className="flex space-x-6">
              <ThemeSwitch />
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
