import Markdown from "react-markdown";
import Help from '../component/help';
import './Timeline.css';
import markdown from './Timeline.md';

import "highlight.js/styles/a11y-dark.css";
import rehypeHighlight from "rehype-highlight";

export default function Timeline() {
    return (
        <div className="App">
            <div className='inner'>
                <a href='/'>⬅️ Back</a>
                <div className='scroll'>
                    <Markdown children={markdown} rehypePlugins={[rehypeHighlight]} />
                </div>
            </div>
            <Help />
        </div>
    );
}