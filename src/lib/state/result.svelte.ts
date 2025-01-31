export type Result = {
	day: string;
	location: string;
	activity: string;
	extras: Record<string, boolean>;
};

const initial: Partial<Result> & { extras: Record<string, boolean> } = {
	extras: {}
};

export const result = $state(initial);
