import { auth } from "@clerk/nextjs/server";

import { titleCase } from "~/lib/utils";

import { Button } from "~/app/_components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "~/app/_components/ui/card";

export default async function ChoosePlan({
	plan,
}: { plan: "free" | "premium" }) {
	// const [selectedPlan, setSelectedPlan] = useState<>("free");

	return (
		<div>
			<div className="space-y-8">
				<div className="space-y-2">
					<div className="text-2xl font-bold">Choose Your Plan</div>
					<div className=" text-muted-foreground ">
						Upgrade to unlock premium features and manage multiple businesses.
					</div>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<PricingCard
						name="free"
						description="For small businesses looking to manage a single location using only basic features."
						price={{ monthly: 0, yearly: 0 }}
						bulletPoints={[
							"Single business",
							"Default negative and positive review filters",
							"Automated review responses",
						]}
						isSelected={plan === "free"}
						// setIsSelected={() => setSelectedPlan("free")}
					/>
					<PricingCard
						name="premium"
						description="For growing businesses looking to manage multiple locations and unlock premium features."
						price={{ monthly: 5, yearly: 50 }}
						bulletPoints={[
							"Multiple Businesses",
							"Custom review filters",
							"Automated and manual review responses",
							// "Detailed analytics and reporting",
						]}
						isSelected={plan === "premium"}
						// setIsSelected={() => setSelectedPlan("premium")}
					/>
				</div>
			</div>
		</div>
	);
}

type Price = {
	monthly: number;
	yearly: number;
};

interface PricingCardProps {
	buttonVariant?: "outline" | "secondary";
	name: string;
	description: string | React.ReactNode | null;
	price: Price;
	bulletPoints: string[];
	isSelected: boolean;
	// setIsSelected: () => void;
}

async function PricingCard({
	name,
	description,
	price,
	bulletPoints,
	isSelected,
	// setIsSelected,
}: PricingCardProps) {
	return (
		<Card
			className="data-[selected=true]:ring-2 data-[selected=true]:ring-muted-foreground"
			data-selected={isSelected}
		>
			<CardHeader className="space-y-4">
				<CardTitle>{titleCase(name)}</CardTitle>
				<CardDescription className="space-y-4 text-muted-foreground">
					{description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="pb-4 space-x-1">
					<span className="text-3xl font-semibold">${price.monthly}</span>
					<span className="text-muted-foreground text-sm">/month</span>
				</div>
				<ul className="ml-6 list-disc [&>li]:mt-2 text-sm ">
					{bulletPoints.map((point) => (
						<li key={point}>{point}</li>
					))}
				</ul>
			</CardContent>
			<CardFooter className="pt-4">
				<form className="w-full" action={""}>
					{/* <Input
						type="radio"
						name="plan"
						id={name}
						value={name}
						className="hidden"
						onChange={() => setIsSelected()}
						defaultChecked={isSelected}
					/> */}
					<Button
						type="submit"
						variant={isSelected ? "default" : "outline"}
						className="w-full"
					>
						{isSelected ? "Selected" : "Select"}
					</Button>
				</form>
			</CardFooter>
		</Card>
	);
}
