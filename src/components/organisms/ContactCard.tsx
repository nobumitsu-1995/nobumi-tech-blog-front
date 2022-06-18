import React, { useState } from "react";
import { Button, Paper } from "../atoms";
import { InputArea, TitleInPaper } from "../molecules";

const ContactCard = () => {
	const [message, setMessage] = useState({
		name: "",
		email: "",
		content: "",
	});
	const [error, setError] = useState({
		name: false,
		email: false,
		content: false,
	});

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, id } = e.target;
		setMessage({ ...message, [id]: value });
	};

	const submitForm = () => {
		setError({
			name: !message.name,
			email: !message.email,
			content: !message.content,
		});

		if (!message.name || !message.email || !message.content) return false;

		if (
			confirm(
				`以下の内容でよろしいですか？\r\n\r\nお名前：${message.name}\r\nメールアドレス：${message.email}\r\nお問合せ内容：${message.content}`,
			)
		) {
			alert(`${message.name}様、お問い合わせを受け付けました。\r\nありがとうございました！`);
			setMessage({
				name: "",
				email: "",
				content: "",
			});
		}
	};

	return (
		<Paper borderColor="#7C83CC" padding="40px 50px">
			<TitleInPaper text="メールアドレスでお問い合わせ" />
			<form>
				<InputArea
					error={error.name}
					id="name"
					label="名前"
					name="name"
					value={message.name}
					onChange={handleInputChange}
				/>
				<InputArea
					error={error.email}
					id="email"
					label="メールアドレス"
					name="email"
					value={message.email}
					onChange={handleInputChange}
				/>
				<InputArea
					error={error.content}
					id="content"
					label="お問い合わせ内容"
					name="content"
					value={message.content}
					type="textarea"
					onChange={handleInputChange}
				/>
				<Button
					backgroundColor="#3D70B8"
					borderColor="#3D70B8"
					borderRadius="5px"
					color="#fff"
					fontSize="20px"
					label="送信"
					onClick={submitForm}
				/>
			</form>
		</Paper>
	);
};

export default ContactCard;
