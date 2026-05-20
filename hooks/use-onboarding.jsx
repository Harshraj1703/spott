"use client"

import { api } from "@/convex/_generated/api";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useConvexQuery } from "./use-convex-query";

const ATTENDEE_PAGES = ["/explore","/events","/my-tickets"];

export function useOnboarding(){
    const [showOnboarding , setShowOnboarding] = useState(false);
    const pathname = usePathname();
    const router = useRouter(); 

    const {data: currentUser, isLoading } = useConvexQuery(api.users.getCurrentUser );

    useEffect(()=>{
        if(isLoading || !currentUser)return;

        if(!currentUser.hasCompletedOnboarding){
            //check if the current page requires onboaridng
            const requiresOnboarding = ATTENDEE_PAGES.some((page)=>
            pathname.startsWith(page));

            if(requiresOnboarding){
                setShowOnboarding(true);     
            }
        }
    },[currentUser,pathname,isLoading]);

    const handleOnboardingComplete = () => {
        setShowOnboarding(false);
        router.refresh();
    }

    const handleOnboardingskip = ()=>{
        setShowOnboarding(false);
        router.push("/");
    };

    return{
        showOnboarding,
        handleOnboardingComplete,
        handleOnboardingskip,
        setShowOnboarding,
        needsOnboarding: currentUser && !currentUser.hasCompletedOnboarding,
    }


}