export type Result = {
	day: string;
	location: string;
	activity: string;
	extras?: string;
};

const initial: Partial<Result> = {};

export const result = $state(initial);
