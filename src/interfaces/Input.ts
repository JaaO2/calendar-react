interface Input {
    name: string;
    type: string;
    placeholder: string;
    ref: React.MutableRefObject<HTMLInputElement>;
    defaultValue?: string;
}