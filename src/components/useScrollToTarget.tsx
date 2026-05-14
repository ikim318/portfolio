import { useEffect, useRef, useState } from "react";

function useScrollToTarget(targetName: string) {
    const [isTarget, setIsTarget] = useState<boolean>(false);
    const targetRef = useRef<HTMLElement>(null);

    const scrollToTarget = () => {
        const element = document.querySelector(`#${targetName}`) as HTMLElement;
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;

            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (targetRef.current) {
                const targetRect = targetRef.current.getBoundingClientRect();
                if (targetRect.top < window.innerHeight / 3 && targetRect.bottom >= 0) {
                    setIsTarget(true);
                } else {
                    setIsTarget(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { targetRef, scrollToTarget, isTarget, setIsTarget, targetName };
}

export default useScrollToTarget;
