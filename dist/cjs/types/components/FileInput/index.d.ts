import React from 'react';
/**
 * Props para o componente FileInput
 */
export declare type FileInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
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
