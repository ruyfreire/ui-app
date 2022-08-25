import React from 'react';
import { CSSProperties } from 'styled-components';
import { SpacingTypes } from '../../utils/styles';
export declare type RadiusProps = {
    topLeft?: number;
    topRight?: number;
    bottomLeft?: number;
    bottomRight?: number;
};
export declare type BorderProps = {
    width?: number;
    color?: string;
    style?: CSSProperties['borderStyle'];
};
/**
 * Props para o componente Box
 */
export declare type BoxProps = React.HtmlHTMLAttributes<HTMLDivElement> & SpacingTypes & {
    /**
     * Número ou objeto para determinar o border-radius
     */
    radius?: number | RadiusProps;
    /**
     * Número ou objeto com largura, cor e estilo da borda
     */
    border?: number | BorderProps;
    /**
     * Elevação do box-shadow do elemento
     */
    elevation?: number;
    /**
     * Cor de fundo do box
     */
    bgColor?: string;
};
/**
 * Box para auxiliar em agrupamento e espaçamentos
 *
 * @example
 * <Box mb={1}>
 *  Texto
 * </Box>
 */
export declare const Box: ({ ...props }: BoxProps) => JSX.Element;
