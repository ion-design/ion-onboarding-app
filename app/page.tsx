"use client";
// Generated with Ion on 2/26/2024, 3:56:07 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=2610:35396
import Divider from "@/components/ion/Divider";
import { MouseEvent, useState } from "react";
import Button from "@/components/ion/Button";
import { MusicNotes, Tag as TagIcon } from "@phosphor-icons/react/dist/ssr";
import Input from "@/components/ion/Input";
import Tag from "@/components/ion/Tag";
import OverviewHeader from "@/components/OverviewHeader";
import ComponentProperty from "@/components/ComponentProperty";

function Welcome() {
  function highClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("highClickHandler fired");
  }
  function mediumClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("mediumClickHandler fired");
  }
  function lowClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("lowClickHandler fired");
  }
  function gradientClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("gradientClickHandler fired");
  }
  const [inputValue, setInputValue] = useState("");
  function applyClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("applyClickHandler fired");
  }
  function earlybird24ClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("earlybird24ClickHandler fired");
  }
  function earlybird24DismissHandler(e: MouseEvent<SVGSVGElement>) {
    alert("earlybird24DismissHandler fired");
  }
  return (
    <div className="bg-white w-full flex-col items-center flex gap-16 max-w-[800px] px-10 mx-auto py-16 rounded-lg h-fit">
      <OverviewHeader
        description="We’ll help guide you through our design system, explaining core use cases, functionality, and much more.

We’re super excited to see all of the beautiful products you build with ion!

Welcome aboard :)"
        name="Welcome to ion"
        link="docs"
        className="w-full"
      />
      <Divider />
      <div className="w-full flex-col flex gap-5 max-w-[750px]">
        <div className="w-full flex-col flex">
          <div className="text-xs font-semibold text-gray-600">OVERVIEW</div>
          <div className="text-4xl font-medium text-gray-800">What is ion?</div>
        </div>
        <div className="w-full flex-col flex gap-4 text-lg text-gray-800">
          <div>
            ion offers an extensive collection of components, meticulously
            designed to empower you to create custom applications with ease.
          </div>
          <div>
            Our design system ensures that the transition from design to
            development is seamless by instantly generating pixel-perfect code
            from the designs you create.
          </div>
          <div>
            With ion, you can supercharge your design workflows without
            compromising on quality or detail.
          </div>
        </div>
      </div>
      <Divider />
      <div className="w-full flex-col flex gap-5 max-w-[750px]">
        <div className="w-full flex-col flex">
          <div className="text-xs font-semibold text-gray-600 ">
            ORGANIZATION
          </div>
          <div className="text-4xl font-medium text-gray-800">
            Designing with ion
          </div>
        </div>
        <div className="w-full flex-col flex gap-4">
          <div className="text-lg text-gray-800">
            Each component is thoughtfully placed on its own page, accompanied
            by best practices to guide your design decisions.
          </div>
          <div className="text-lg text-gray-800">
            Components are designed with customizable properties, allowing you
            to easily generate variants and adapt them to fit your specific
            needs.
          </div>
          <div className="w-full flex-col flex gap-1">
            <div className="text-sm font-semibold text-gray-400">
              ion/Button
            </div>
            <div className="bg-gray-100 w-full flex-col flex justify-center items-center p-10 rounded-lg">
              <div className="w-full flex-col flex gap-8">
                <div className="w-full flex-col flex gap-5">
                  <ComponentProperty
                    isSubcomponentProperty={false}
                    name="emphasis"
                    subcomponent="ion/AvatarStatus/"
                    description="Controls the outline and fill of the button."
                    className="w-full"
                  />
                  <div className="bg-gray-50 w-full flex justify-center items-center gap-5 p-5 rounded-lg">
                    <Button
                      emphasis="high"
                      color="secondary"
                      size="md"
                      onClick={highClickHandler}
                    >
                      high
                    </Button>
                    <Button
                      emphasis="medium"
                      color="secondary"
                      size="md"
                      onClick={mediumClickHandler}
                    >
                      medium
                    </Button>
                    <Button
                      emphasis="low"
                      color="secondary"
                      size="md"
                      onClick={lowClickHandler}
                    >
                      low
                    </Button>
                    <Button
                      emphasis="gradient"
                      color="secondary"
                      size="md"
                      onClick={gradientClickHandler}
                    >
                      gradient
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg text-gray-800">
            Each component is accompanied by examples, so you can immediately
            get a feel for how components look and function in real-world
            applications.
          </div>
          <div className="w-full flex-col flex gap-1">
            <div className="text-sm font-semibold text-gray-400">ion/Tag</div>
            <div className="bg-gray-100 w-full flex-col flex justify-center items-center p-10 rounded-lg">
              <div className="bg-white w-3/5 flex-col flex gap-7 px-10 py-8 rounded-lg shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
                <div className="w-full flex-col flex gap-5">
                  <div className="w-full flex items-center gap-3">
                    <div className="bg-gray-900 flex items-start gap-2.5 p-2.5 rounded-lg">
                      <MusicNotes
                        size={32}
                        weight={"regular"}
                        className="text-white"
                      />
                    </div>
                    <div className="flex-1 flex justify-between items-center gap-2.5">
                      <div className="flex-col flex justify-center gap-1">
                        <div className="text-base font-semibold text-gray-800">
                          VIP Ticket
                        </div>
                        <div className="text-[10px] leading-snug text-gray-400">
                          2-Day Pass / Early Bird{" "}
                        </div>
                      </div>
                      <div className="text-xs font-semibold text-gray-800">
                        $225.00
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex-col flex gap-2">
                    <div className="w-full flex items-start gap-2">
                      <Input
                        placeholder="Pet Friendly"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="w-full"
                      />
                      <Button
                        emphasis="high"
                        color="primary"
                        size="md"
                        onClick={applyClickHandler}
                      >
                        Apply
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag
                        iconLeading={<TagIcon size={12} weight={"bold"} />}
                        type="filled"
                        color="simple"
                        onClick={earlybird24ClickHandler}
                        onDismiss={earlybird24DismissHandler}
                      >
                        EARLYBIRD24
                      </Tag>
                    </div>
                  </div>
                </div>
                <div className="w-full flex-col flex gap-2">
                  <div className="w-full flex justify-between items-start gap-2.5 text-[10px] leading-snug text-gray-800">
                    <div>Subtotal</div>
                    <div>$300.00</div>
                  </div>
                  <div className="w-full flex justify-between items-start gap-2.5 text-gray-400">
                    <div className="flex items-center gap-1">
                      <TagIcon size={12} weight={"bold"} />
                      <div className="text-[10px] leading-snug">
                        EARLYBIRD24
                      </div>
                    </div>
                    <div className="text-[10px] leading-snug">-$75.00</div>
                  </div>
                  <div className="w-full flex justify-between items-start gap-2.5 text-[10px] leading-snug text-gray-800">
                    <div>Tax</div>
                    <div>$16.31</div>
                  </div>
                  <div className="w-full flex justify-between items-start gap-2.5 text-sm font-semibold text-gray-800">
                    <div>Total</div>
                    <div>$241.31</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg text-gray-800">
            ion has a robust set of local-variables, allowing you to swiftly
            make changes across the entire design system with just a few clicks.
            You can tailor the design system to meet your specific needs while
            maintaining consistency.
          </div>
        </div>
      </div>
      <Divider />
      <div className="w-full flex justify-center items-center gap-4 text-sm text-right text-gray-800 max-w-[750px]">
        <a href="https://ion.design" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/welcome/Logo.svg"
            alt="Logo"
            className="w-5 h-[20px]"
          />
        </a>
        <a href="mailto:team@ion.design">team@ion.design</a>
      </div>
    </div>
  );
}
export default Welcome;
