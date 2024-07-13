'use client';
// Generated with Ion on 7/12/2024, 5:08:51 PM
// Figma Link: https://www.figma.com/design/lttAn98b6yjA2bGr3UDN9J?node-id=2610:35396
import { MusicNotes, Tag as TagIcon } from '@phosphor-icons/react/dist/ssr';
import { type MouseEvent, useState } from 'react';

import Button from '@/components/ion/Button';
import ComponentProperty from '@/components/ion/ComponentProperty';
import Divider from '@/components/ion/Divider';
import Input from '@/components/ion/Input';
import LineItem from '@/components/ion/LineItem';
import OverviewHeader from '@/components/ion/OverviewHeader';
import Tag from '@/components/ion/Tag';

function Welcome() {
	const [inputValue, setInputValue] = useState('');

	function applyClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('applyClickHandler fired');
	}
	function buttonOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('buttonOnClickHandler fired');
	}
	function disabledClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('disabledClickHandler fired');
	}
	function earlybird24DismissHandler(e: MouseEvent<SVGSVGElement>) {
		alert('earlybird24DismissHandler fired');
	}
	function enabledClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('enabledClickHandler fired');
	}
	function focusedClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('focusedClickHandler fired');
	}
	function gradientClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('gradientClickHandler fired');
	}
	function highClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('highClickHandler fired');
	}
	function hoverClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('hoverClickHandler fired');
	}
	function lowClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('lowClickHandler fired');
	}
	function mediumClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('mediumClickHandler fired');
	}
	function pressedClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('pressedClickHandler fired');
	}

	return (
		<div className="bg-background w-[1000px] flex flex-col gap-[72px] px-[132px] py-[72px] rounded-radius-sm">
			<OverviewHeader
				description="We’ll help guide you through our design system, explaining core use cases, functionality, and much more.

We’re super excited to see all of the beautiful products you build with ion!

Welcome aboard :)"
				name="Welcome to ion"
				link="ion.design"
				className="w-full"
			/>
			<Divider />
			<div className="w-full flex flex-col gap-5">
				<div className="w-full flex flex-col">
					<div className="text-xs font-semibold text-sub w-full">OVERVIEW</div>
					<div className="text-4xl font-medium text-foreground w-full">What is ion?</div>
				</div>
				<div className="w-full flex flex-col gap-4 text-lg text-foreground">
					<div className="w-full max-w-[736px]">
						ion offers an extensive collection of components, meticulously designed to empower you
						to create custom applications with ease.
					</div>
					<div className="w-full max-w-[736px]">
						Our design system ensures that the transition from design to development is seamless by
						instantly generating pixel-perfect code from the designs you create.
					</div>
					<div className="w-full max-w-[736px]">
						With ion, you can supercharge your design workflows without compromising on quality or
						detail.
					</div>
				</div>
			</div>
			<Divider />
			<div className="w-full flex flex-col gap-5">
				<div className="w-full flex flex-col">
					<div className="text-xs font-semibold text-sub w-full">ORGANIZATION</div>
					<div className="text-4xl font-medium text-foreground w-full">Designing with ion</div>
				</div>
				<div className="w-full flex flex-col gap-4">
					<div className="text-lg text-foreground w-full max-w-[736px]">
						Each component is thoughtfully placed on its own page, accompanied by best practices to
						guide your design decisions.
					</div>
					<div className="text-lg text-foreground w-full max-w-[736px]">
						Components are designed with customizable properties, allowing you to easily generate
						variants and adapt them to fit your specific needs.
					</div>
					<div className="w-full flex flex-col gap-1">
						<div className="bg-neutral-container w-full flex flex-col justify-center items-center p-10 rounded-radius-sm">
							<div className="w-full flex flex-col gap-8">
								<div className="w-full flex flex-col gap-5">
									<ComponentProperty
										name="state"
										subcomponent="ion/AvatarStatus/"
										isSubcomponentProperty={false}
										description="Controls the state of the button."
										className="w-full"
									/>
									<div className="bg-[#f9f8fc] w-full flex justify-center items-center gap-5 p-5 rounded-radius-sm">
										{[
											{
												children: 'enabled',
												onClick: enabledClickHandler,
											},
											{
												children: 'hover',
												onClick: hoverClickHandler,
											},
											{
												children: 'pressed',
												onClick: pressedClickHandler,
											},
											{
												children: 'focused',
												onClick: focusedClickHandler,
											},
											{
												children: 'disabled',
												onClick: disabledClickHandler,
											},
										].map(({ children, onClick }, index) => (
											<Button
												color="primary"
												onClick={onClick}
												size="md"
												variant="filled"
												key={index}
											>
												{children}
											</Button>
										))}
									</div>
								</div>
								<div className="w-full flex flex-col gap-5">
									<ComponentProperty
										name="emphasis"
										subcomponent="ion/AvatarStatus/"
										isSubcomponentProperty={false}
										description="Controls the outline and fill of the button."
										className="w-full"
									/>
									<div className="bg-[#f9f8fc] w-full flex justify-center items-center gap-5 p-5 rounded-radius-sm">
										{[
											{
												children: 'high',
												onClick: highClickHandler,
												variant: 'filled' as const,
											},
											{
												children: 'medium',
												onClick: mediumClickHandler,
												variant: 'outline' as const,
											},
											{
												children: 'low',
												onClick: lowClickHandler,
												variant: 'ghost' as const,
											},
											{
												children: 'gradient',
												onClick: gradientClickHandler,
												variant: 'gradient' as const,
											},
										].map(({ children, onClick, variant }, index) => (
											<Button
												color="neutral"
												onClick={onClick}
												size="md"
												variant={variant}
												key={index}
											>
												{children}
											</Button>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="text-lg text-foreground w-full max-w-[736px]">
						Each component is accompanied by examples, so you can immediately get a feel for how
						components look and function in real-world applications.
					</div>
					<div className="w-full flex flex-col gap-1">
						<div className="bg-neutral-container w-full flex flex-col justify-center items-center p-10 rounded-radius-sm">
							<div className="bg-background w-[400px] flex flex-col gap-7 px-10 py-8 rounded-radius-sm shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
								<div className="w-full flex flex-col gap-5">
									<div className="w-full flex items-center gap-3">
										<div className="bg-neutral flex items-start gap-2.5 p-2.5 rounded-radius-sm">
											<MusicNotes size={32} weight={'regular'} />
										</div>
										<div className="flex-1 w-full flex justify-between items-center gap-2.5">
											<div className="flex flex-col justify-center gap-1">
												<div className="text-base font-semibold text-foreground">VIP Ticket</div>
												<div className="text-[10px] leading-snug text-text-soft">
													2-Day Pass / Early Bird{' '}
												</div>
											</div>
											<div className="text-xs font-semibold text-foreground">$225.00</div>
										</div>
									</div>
									<div className="w-full flex flex-col gap-2">
										<div className="w-full flex items-start gap-2">
											<Input
												placeholder="Pet Friendly"
												value={inputValue}
												onChange={(e) => setInputValue(e.target.value)}
												className="flex-1 w-full"
											/>
											<Button
												variant="filled"
												color="primary"
												size="md"
												onClick={applyClickHandler}
											>
												Apply
											</Button>
										</div>
										<div className="flex items-center gap-2">
											<Tag
												iconLeading={<TagIcon size={12} weight={'bold'} />}
												color="neutral"
												onDismiss={earlybird24DismissHandler}
											>
												EARLYBIRD24
											</Tag>
										</div>
									</div>
								</div>
								<div className="w-full flex flex-col gap-2">
									{[
										{
											isDiscount: false,
											isTotal: false,
											label: 'Subtotal',
											value: '$300.00',
										},
										{
											isDiscount: true,
											isTotal: false,
											label: 'EARLYBIRD24',
											value: '-$75.00',
										},
										{
											isDiscount: false,
											isTotal: false,
											label: 'Tax',
											value: '$16.31',
										},
										{
											isDiscount: false,
											isTotal: true,
											label: 'Total',
											value: '$241.31',
										},
									].map(({ isDiscount, isTotal, label, value }, index) => (
										<LineItem
											className="w-full"
											isDiscount={isDiscount}
											isTotal={isTotal}
											label={label}
											value={value}
											key={index}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
					<div className="text-lg text-foreground w-full max-w-[736px]">
						ion has a robust set of local-variables, allowing you to swiftly make changes across the
						entire design system with just a few clicks. You can tailor the design system to meet
						your specific needs while maintaining consistency.
					</div>
				</div>
			</div>
			<Divider />
			<div className="w-full flex justify-center items-center gap-4 text-sm text-foreground">
				<img src="/images/welcome/Logo.svg" alt="Logo" className="h-5 w-5" />
				<div>team@ion.design</div>
			</div>
		</div>
	);
}
export default Welcome;
