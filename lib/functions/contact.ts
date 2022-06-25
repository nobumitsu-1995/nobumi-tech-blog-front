export const sendEmail = (formData: {name: string, email: string, content: string}) => {
  const apiurl = `${process.env.NEXT_PUBLIC_AWS_API_URL}`

  fetch(apiurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(res => {
      console.log("run");
			alert(`${formData.name}様、お問い合わせを受け付けました。\r\nありがとうございました！`);
    })
    .catch(e => {
      console.error(e);
      alert("申し訳ありません。送信に失敗しました。しばらくお時間を置いたあともう一度お願いします。")
    })
}