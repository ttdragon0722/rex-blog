interface SkillData {
	imgSrc: string;
	title: string;
	description: string;
}

interface SkillBlockProp extends SkillData {
	debug?: boolean;
}

export { SkillData, SkillBlockProp };
