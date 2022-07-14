import { css } from 'styled-components'

export const calcSpacing = (value: number) => {
  return value * 8
}

/**
 * Types de espaçamento padding
 */
export type PaddingTypes = {
  /**
   * padding
   */
  p?: number
  /**
   * padding-top
   */
  pt?: number
  /**
   * padding-right
   */
  pr?: number
  /**
   * padding-bottom
   */
  pb?: number
  /**
   * padding-left
   */
  pl?: number
}

/**
 * Types de espaçamento margin
 */
export type MarginTypes = {
  /**
   * margin
   */
  m?: number
  /**
   * margin-top
   */
  mt?: number
  /**
   * margin-right
   */
  mr?: number
  /**
   * margin-bottom
   */
  mb?: number
  /**
   * margin-left
   */
  ml?: number
}

/**
 * Types de espaçamento
 */
export type SpacingTypes = PaddingTypes & MarginTypes

/**
 * Inserir CSS de espaçamento margin
 */
export const setSpacingMargin = (props: MarginTypes) => {
  return css`
    ${props.m &&
    css`
      margin: ${calcSpacing(props.m)}px;
    `};
    ${props.mt &&
    css`
      margin-top: ${calcSpacing(props.mt)}px;
    `};
    ${props.mr &&
    css`
      margin-right: ${calcSpacing(props.mr)}px;
    `};
    ${props.mb &&
    css`
      margin-bottom: ${calcSpacing(props.mb)}px;
    `};
    ${props.ml &&
    css`
      margin-left: ${calcSpacing(props.ml)}px;
    `};
  `
}

/**
 * Inserir CSS de espaçamento padding
 */
export const setSpacingPadding = (props: PaddingTypes) => {
  return css`
    ${props.p &&
    css`
      padding: ${calcSpacing(props.p)}px;
    `};
    ${props.pt &&
    css`
      padding-top: ${calcSpacing(props.pt)}px;
    `};
    ${props.pr &&
    css`
      padding-right: ${calcSpacing(props.pr)}px;
    `};
    ${props.pb &&
    css`
      padding-bottom: ${calcSpacing(props.pb)}px;
    `};
    ${props.pl &&
    css`
      padding-left: ${calcSpacing(props.pl)}px;
    `};
  `
}
