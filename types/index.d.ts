declare const bitui: {
    Typography: {
        Text: import("react").FC<import("./components/General/Typography/Text").ITextProps>;
        Title: import("react").FC<import("./components/General/Typography/Title").ITitle>;
        Link: import("react").FC<any>;
        Paragraph: import("react").FC<import("./components/General/Typography/Paragraph").IParagraph>;
    };
};
export default bitui;
