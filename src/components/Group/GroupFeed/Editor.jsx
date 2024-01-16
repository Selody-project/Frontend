import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import axios from "axios";

const Editor = () => {
	const navigate = useNavigate();

	const [content, setContent] = useState("");

	const customUploadAdapter = (loader) => {
		return {
			upload() {
				return new Promise((resolve, reject) => {
					const formData = new FormData();
					loader.file.then((file) => {
						formData.append("file", file);

						axios
							.post("http://localhost:8080/api/v0/file/upload", formData)
							.then((res) => {
								resolve({
									default: res.data.data.uri,
								});
							})
							.catch((err) => reject(err));
					});
				});
			},
		};
	};

	function uploadPlugin(editor) {
		editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
			return customUploadAdapter(loader);
		};
	}

	const handleSubmit = () => {
		const data = {
			content,
		};

		axios.post("http://localhost:8080/api/v0/post", data).then((res) => {
			if (res.status === 200) {
				navigate("/", { replace: true });
			} else {
				alert("업로드 실패.");
			}
		});
	};

	return (
		<div className="Editor">
			<section>
				<CKEditor
					editor={ClassicEditor}
					data=""
					config={{ extraPlugins: [uploadPlugin] }}
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						console.log("Editor is ready to use!", editor);
					}}
					onChange={(event, editor) => {
						setContent(editor.getData());
						console.log({ event, editor, content });
					}}
					onBlur={(event, editor) => {
						console.log("Blur.", editor);
					}}
					onFocus={(event, editor) => {
						console.log("Focus.", editor);
					}}
				/>
			</section>
			<section>
				<div className="control-box">
					<div className="cancel-btn-wrapper">
						<button
							type="button"
							onClick={() => navigate(-1, { replace: true })}
						>
							취소
						</button>
					</div>
					<div className="submit-btn-wrapper">
						<button type="button" onClick={handleSubmit}>
							완료
						</button>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Editor;
