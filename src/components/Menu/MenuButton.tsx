import React from "react";

interface IMenuButtonProps {
    label: string;
}

export const MenuButton: React.FC<IMenuButtonProps> = (props) => {
    const { label } = props;

    return (
        <button>{label}</button>
    )
}