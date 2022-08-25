import React from 'react';
import { MarginTypes } from '../../utils/styles';
/**
 * Props para o componente FileInput
 */
export declare type FileInputProps = React.InputHTMLAttributes<HTMLInputElement> & MarginTypes & {
    /**
     * Texto descritivo
     */
    description?: string;
    /**
     * Texto de apoio extra
     */
    sub?: string;
    /**
     * Função executada quando um arquivo é anexado
     */
    onAdd: (files: FileList | null) => void;
};
/**
 * Espaço para fazer upload de arquivos
 */
export declare const FileInput: ({ description, sub, onAdd, ...props }: FileInputProps) => JSX.Element;
