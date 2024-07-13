// Generated with Ion on 7/12/2024, 5:08:51 PM
// Figma Link: https://www.figma.com/design/lttAn98b6yjA2bGr3UDN9J?node-id=2359:7072
import { GlobeSimple } from '@phosphor-icons/react/dist/ssr';
import clsx from 'clsx';

import Tag from '@/components/ion/Tag';

type OverviewHeaderProps = {
	description?: string;
	name?: string;
	link?: string;
	className?: string;
};

function OverviewHeader({
	description = 'Avatars function as personalized visual symbols, embodying users or entities within digital environments. These graphical representations are versatile, serving not only as profile pictures but also as placeholders in scenarios where actual images are not available. Their use enhances user engagement by introducing relatable imagery, making interactions within the system more human.',
	name = 'Avatar',
	link = 'ion.design/avatar',
	className = '',
}: OverviewHeaderProps) {
	return (
		<div className={clsx('w-[736px] flex flex-col gap-14', className)}>
			<div className="w-full flex justify-between items-center gap-4">
				<img src="/images/welcome/Logo.svg" alt="Logo" className="h-12 w-12" />
				<div className="flex justify-end items-center gap-1">
					<GlobeSimple size={16} weight={'regular'} />
					<div className="text-sm text-foreground">{link}</div>
				</div>
			</div>
			<div className="w-full flex flex-col gap-6">
				<div className="w-full flex flex-col gap-3">
					<Tag color="neutral">ION DESIGN SYSTEM</Tag>
					<div className="text-6xl leading-[72px] font-medium text-foreground w-full">{name}</div>
				</div>
				<div className="text-lg text-foreground w-full max-w-[736px]">{description}</div>
			</div>
		</div>
	);
}
export default OverviewHeader;
