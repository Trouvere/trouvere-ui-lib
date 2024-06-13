declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}

declare module '*.svg' {
    import type {FC, HTMLProps} from 'react';

    export const ReactComponent: FC<HTMLProps<SVGElement>>;
}
