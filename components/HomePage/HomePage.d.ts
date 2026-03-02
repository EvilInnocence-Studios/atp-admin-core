export declare interface IHomePageProps {
    dates: [string, string] | null;
    setDates: (dates: [string, string] | null) => void;
}

// What gets passed into the component from the parent as attributes
export declare interface IHomePageInputProps {

}

export type HomePageProps = IHomePageInputProps & IHomePageProps;