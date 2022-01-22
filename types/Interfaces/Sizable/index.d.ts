export default interface Sizable {
    onResize: (callback: (e: any) => void) => void;
    onStartResize: (callback: (e: any) => void) => void;
    onEndResize: (callback: (e: any) => void) => void;
}
