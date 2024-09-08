import { TextField, TextFieldVariants } from "@mui/material"
import { ChangeEvent } from "react";

interface InputProps {
    id: string;
    label: string;
    variant: TextFieldVariants | undefined;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const Input = ({ id, label, variant, onChange, value }: InputProps) => {
    return (
        <TextField
            id={id}
            label={label}
            variant={variant}
            onChange={onChange}
            value={value}
        />
    )
}

export default Input