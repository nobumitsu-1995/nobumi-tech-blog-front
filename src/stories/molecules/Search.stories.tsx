import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconInput } from "../../components/molecules";
import "../../styles/globals.css";
import styled from "styled-components";
import Image from "next/image";

export default {
	title: "Molecules/IconInput",
	component: IconInput,
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof IconInput>;

export const StyledIconInput: ComponentStory<typeof IconInput> = args => (
	<IconInput
		placeholder="search..."
		onClick={() => console.log("clicked!")}
		icon={<Image src="/images/search.png" alt="search" width={16} height={16} />}
	/>
);
