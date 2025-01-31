const stepNavList = [
	{
		name: 'initial',
		next: 'security',
		prev: 'initial'
	},
	{
		name: 'security',
		next: 'langSelect',
		prev: 'initial'
	},
	{
		name: 'rejection',
		next: 'rejection',
		prev: 'initial'
	},
	{
		name: 'langSelect',
		next: 'day',
		prev: 'security'
	},
	{
		name: 'day',
		next: 'activity',
		prev: 'langSelect'
	},
	{
		name: 'activity',
		next: 'extras',
		prev: 'day'
	},
	{
		name: 'location',
		next: 'extras',
		prev: 'activity'
	},
	{
		name: 'extras',
		next: 'summary',
		prev: 'location'
	},
	{
		name: 'flowers',
		next: 'extras',
		prev: 'extras'
	},
	{
		name: 'summary',
		next: 'summary',
		prev: 'extras'
	}
] as const;
type StepNavList = typeof stepNavList;
type StepNav = StepNavList[number];
export type Step = StepNav['name'];
export const StepEnum = Object.freeze(
	stepNavList.reduce((acc, cur) => ({ ...acc, [cur.name]: cur.name }), {})
) as Record<Step, Step>;

function stepsFn() {
	let current = $state<Step>('initial');
	function getStep(stepName: Step): StepNav {
		const result = stepNavList.find((item) => item.name === stepName);
		if (undefined === result) throw new Error('Invalid step navigation');
		return result;
	}
	return {
		get current() {
			return current;
		},
		getStep,
		next: () => (current = getStep(current).next),
		prev: () => (current = getStep(current).prev),
		goto: (stepName: Step) => (current = stepName)
	};
}

export const steps = stepsFn();
