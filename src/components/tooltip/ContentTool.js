// import React, { useState } from "react"
// import styled from "styled-components"
// import { CKEditor } from "@ckeditor/ckeditor5-react"
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic"
// import parse from "html-react-parser"
// export default function ContentTool() {
//   const [text, setText] = useState("")
//   return (
//     <Wrapper>
//       <Editor>
//         <CKEditor
//           editor={ClassicEditor}
//           data={text}
//           onChange={(event, editor) => {
//             const data = editor.getData()
//             setText(data)
//           }}
//         />
//       </Editor>
//       <TextWrapper>
//         <h2>Content</h2>
//         <p>{parse(text)}</p>
//       </TextWrapper>
//     </Wrapper>
//   )
// }
// const Wrapper = styled.div`
//   padding: 120px 0 0 0;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   justify-items: center;
// `
// const TextWrapper = styled.div``
// const Editor = styled.div``
