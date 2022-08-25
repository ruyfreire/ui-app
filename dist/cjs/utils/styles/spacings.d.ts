export declare const calcSpacing: (value: number) => number;
/**
 * Types de espaçamento padding
 */
export declare type PaddingTypes = {
    /**
     * padding
     */
    p?: number;
    /**
     * padding-top
     */
    pt?: number;
    /**
     * padding-right
     */
    pr?: number;
    /**
     * padding-bottom
     */
    pb?: number;
    /**
     * padding-left
     */
    pl?: number;
};
/**
 * Types de espaçamento margin
 */
export declare type MarginTypes = {
    /**
     * margin
     */
    m?: number;
    /**
     * margin-top
     */
    mt?: number;
    /**
     * margin-right
     */
    mr?: number;
    /**
     * margin-bottom
     */
    mb?: number;
    /**
     * margin-left
     */
    ml?: number;
};
/**
 * Types de espaçamento
 */
export declare type SpacingTypes = PaddingTypes & MarginTypes;
/**
 * Inserir CSS de espaçamento margin
 */
export declare const setSpacingMargin: (props: MarginTypes) => import("styled-components").FlattenSimpleInterpolation;
/**
 * Inserir CSS de espaçamento padding
 */
export declare const setSpacingPadding: (props: PaddingTypes) => import("styled-components").FlattenSimpleInterpolation;
export declare const getPropsMargin: (props: object) => {
    [k: string]: any;
};
