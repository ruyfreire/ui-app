import React from 'react';
import { SpacingTypes } from '../../utils/styles';
/**
 * Props para o componente Grid
 */
export declare type GridProps = React.HtmlHTMLAttributes<HTMLDivElement> & SpacingTypes & {
    /**
     * flex-direction
     */
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse' | 'inherit' | 'initial';
    /**
     * align-items
     */
    alignItems?: 'initial' | 'inherit' | 'flex-start' | 'center' | 'flex-end' | 'stretch';
    /**
     * justify-content
     */
    justifyContent?: 'initial' | 'inherit' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'stretch';
    /**
     * Define o display como flex para controlar Grid items abaixo dele
     */
    container?: boolean;
    /**
     * Controla largura do item dentro de um Grid container
     */
    item?: boolean;
    /**
     * gap
     */
    gap?: number;
    /**
     * flex-wrap
     */
    flexWrap?: 'wrap' | 'nowrap' | 'initial' | 'inherit';
    /**
     * Determina a largura x-small do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    xs?: number | boolean;
    /**
     * Determina a largura small do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    sm?: number | boolean;
    /**
     * Determina a largura medium do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    md?: number | boolean;
    /**
     * Determina a largura large do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    lg?: number | boolean;
    /**
     * Determina a largura extra-large do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    xl?: number | boolean;
    /**
     * Determina a largura extra-extra-large do item em um grid de 12,
     * passar como bool true deixa-rá a largura dinâmica/responsiva
     */
    xxl?: number | boolean;
};
/**
 * Grid de 12 para alinhar/organizar elementos.
 * Use `container` no Grid Pai, e `item` nos Grid filhos
 *
 * @example
 * <Grid container>
 *  <Grid item xs={12}>
 *    Texto
 *   </Grid>
 *  <Grid item>
 *    Texto
 *   </Grid>
 * </Grid>
 */
export declare const Grid: ({ gap, flexDirection, alignItems, justifyContent, flexWrap, ...props }: GridProps) => JSX.Element;
