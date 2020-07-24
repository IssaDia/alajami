import React from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js'

export default function DraftTextArea () {
  return <input value={this.state.value} onChange={this.onChange} />;
}
  
