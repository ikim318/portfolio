import type { TabsPropsT } from "../components/types";
import "../css/SideNav.css";

function SideNav({ navTabs }: TabsPropsT) {
    return (
        <nav className="side-nav">
            {navTabs.map((tab, idx) => (
                <button
                    key={idx}
                    onClick={tab.scrollToTarget}
                    className={tab.isTarget ? "active" : ""}>
                    {tab.targetName}
                </button>
            ))}
        </nav>
    );
}

export default SideNav;
