import { createInjector, inject, mergeProps } from "unstateless";
import { useState } from "react";
import { HomePageComponent } from "./HomePage.component";
import { IHomePageInputProps, HomePageProps, IHomePageProps } from "./HomePage.d";

const injectHomePageProps = createInjector(({ }: IHomePageInputProps): IHomePageProps => {
    const [dates, setDates] = useState<[string, string] | null>(null);

    return {
        dates,
        setDates,
    };
});

const connect = inject<IHomePageInputProps, HomePageProps>(mergeProps(
    injectHomePageProps,
));

export const HomePage = connect(HomePageComponent);
