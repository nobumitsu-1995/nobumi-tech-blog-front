import React from "react";
import styled from "styled-components";

export type ButtonProps = {
	backgroundColor?: string;
	borderColor?: string;
	borderRadius?: string;
	color?: string;
	disabled?: boolean;
	fontSize?: string;
	fontWeight?: string;
	icon?: React.ReactNode;
	iconPosition?: "right" | "left";
	iconSpace?: string;
	label: string;
	margin?: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	padding?: string;
};

const StyledButton = styled.button<{
	backgroundColor: string;
	borderColor: string;
	borderRadius?: string;
	color: string;
	fontSize: string;
	fontWeight?: string;
	margin?: string;
	padding: string;
}>`
	background-color: ${({ backgroundColor }) => {
		return backgroundColor;
	}};
	border: 2px solid
		${({ borderColor }) => {
			return borderColor;
		}};
	border-radius: ${({ borderRadius }) => {
		return borderRadius;
	}};
	color: ${({ color }) => {
		return color;
	}};
	cursor: pointer;
	font-size: ${({ fontSize }) => {
		return fontSize;
	}};
	font-weight: ${({ fontWeight }) => {
		return fontWeight;
	}};
	margin: ${({ margin }) => {
		return margin;
	}};
	padding: ${({ padding }) => {
		return padding;
	}};
	position: relative;
	text-align: center;
	width: 100%;

	&:hover {
		opacity: 0.7;
		transition-duration: 0.3s;
	}

	&:disabled {
		cursor: not-allowed;
		opacity: 0.07;
	}
`;

const Icon = styled.div<{
	iconPosition?: "right" | "left";
	iconSpace?: string;
}>`
	align-items: center;
	bottom: 0;
	display: flex;
	margin: auto;
	position: absolute;
	top: 0;
	${({ iconPosition, iconSpace }) => {
		return (
			iconPosition &&
			iconSpace &&
			(iconPosition === "right" ? `right: ${iconSpace}` : iconPosition === "left" && `left: ${iconSpace}`)
		);
	}};
`;

const Button: React.FC<ButtonProps> = ({
	backgroundColor = "transparent",
	borderColor = "#9f9f9f",
	color = "#9f9f9f",
	fontSize = "16px",
	padding = "10px 0",
	disabled = false,
	...props
}) => {
	return (
		<StyledButton
			backgroundColor={backgroundColor}
			borderColor={borderColor}
			borderRadius={props.borderRadius}
			color={color}
			fontSize={fontSize}
			fontWeight={props.fontWeight}
			margin={props.margin}
			padding={padding}
			type="button"
			onClick={props.onClick}
			disabled={disabled}
		>
			<Icon iconPosition={props.iconPosition} iconSpace={props.iconSpace}>
				{props.icon}
			</Icon>
			{props.label}
		</StyledButton>
	);
};

export default Button;
