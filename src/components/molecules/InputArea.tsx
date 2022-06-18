import React from "react";
import styled from "styled-components";
import { Input, Text } from "../atoms";

type InputProps = Omit<JSX.IntrinsicElements["input"], "ref">;
type TextAreaProps = Omit<JSX.IntrinsicElements["textarea"], "ref">;

type Props = (InputProps | TextAreaProps) & {
	error?: boolean;
	label: string;
	name: string;
	type?: "input" | "textarea";
};

const Area = styled.div`
	width: 100%;
`;

const TextArea = styled.textarea<{ error: boolean }>`
	border: 1px solid #aaa;
	border-radius: 3px;
	margin: ${({ error }) => {
		return error ? "0 0 10px" : "0 0 47px";
	}};
	padding: 5px;
	width: 100%;
`;

const InputArea: React.FC<Props> = ({ ...props }) => {
	const { label, name, error = false, type = "input", ...inputProps } = props;
	const capitalizedName = name[0].toUpperCase() + name.slice(1);

	return (
		<Area>
			<label htmlFor={name}>
				<Text color="#999" fontSize="20px" fontWeight="bold" text={label} margin="0 0 10px" />
			</label>
			{type === "textarea"
			?	<TextArea {...inputProps as TextAreaProps} rows={10} error={error}></TextArea>
			: <Input {...inputProps as InputProps} placeholder={capitalizedName} margin={error ? "0 0 10px" : "0 0 47px"} />
			}
			{error && (
				<Text
					color="#E63946"
					fontSize="12px"
					fontWeight="bold"
					text={`${label}を入力してください。`}
					margin="0 0 25px"
				/>
			)}
		</Area>
	);
};

export default InputArea;
