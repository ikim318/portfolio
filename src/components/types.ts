import type { Dispatch, SetStateAction } from "react";

export type SkillItem = {
    name: string;
    level: number;
};

export type SkillData = {
    Skills: SkillItem[];
    Tools: SkillItem[];
};

export type InfoType = {
    // id: number;
    date: string;
    institution: string;
    role: string;
    description: string[];
    skills: string[];
};

export type ProjectType = {
    image: string;
    name: string;
    description: string;
    skills: string[];
    github: string;
};

export type TabsProps = {
    targetRef: React.RefObject<HTMLElement | null>;
    scrollToTarget: () => void;
    isTarget: boolean;
    targetName: string;
    setIsTarget: Dispatch<SetStateAction<boolean>>;
};

export type TabsPropsT = {
    navTabs: TabsProps[];
    id?: string;
};
