export default interface Dragable {
    onDrag: (callback: (e: DragEvent) => void) => void;
}
