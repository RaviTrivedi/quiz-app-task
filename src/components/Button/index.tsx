import { Button, SxProps, Theme } from "@mui/material"
import { ReactNode } from "react";

interface ButtonProps {
    text: string | undefined | null;
    key?: string;
    variant?: "text" | "outlined" | "contained";
    fullWidth?: boolean;
    size?: "small" | "large" | "medium";
    color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
    sx?: SxProps<Theme> | undefined;
    disabled?: boolean;
    onClick?: () => void;
    endIcon?: ReactNode;
}

const ButtonComponent = ({
    key,
    variant,
    fullWidth,
    color,
    sx,
    disabled,
    onClick,
    endIcon,
    text,
    size
}: ButtonProps) => {
    return (
        <Button
            key={key}
            variant={variant}
            fullWidth={fullWidth}
            color={color}
            sx={sx}
            size={size}
            disabled={disabled}
            onClick={onClick}
            endIcon={endIcon}
        >
            {text}
        </Button>
    )
}

export default ButtonComponent