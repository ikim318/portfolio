import type { TabsPropsT } from "../components/types";

function SideNav({ navTabs }: TabsPropsT) {
    return (
        <nav className="side-nav">
            {navTabs.map((tab, idx) => (
                <button
                    key={idx}
                    onClick={tab.scrollToTarget}
                    className={
                        tab.isTarget ? "text-mainGray" : "text-lightGray hover:text-[#4a4a4a]"
                    }>
                    {tab.targetName}
                </button>
            ))}
        </nav>
    );
}

export default SideNav;
