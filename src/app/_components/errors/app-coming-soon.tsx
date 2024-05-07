"use client";

export default function AppComingSoon() {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 px-8 py-16 text-center sm:px-16 md:py-28 lg:py-36">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
					Coming Soon
				</h1>
				<p className="max-w-[600px] text-stone-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-400">
					Responder is currently under construction. We&apos;re adding the finishing
					touches to bring you something special. Coming very soon!
				</p>
			</div>
		</div>
	);
}
