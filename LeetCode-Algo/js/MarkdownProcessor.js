function markdownToHtml(input) {
    // Split the input into paragraphs
    const paragraphs = input.split('\n\n');

    const html = paragraphs.map(paragraph => {
        // Handle blockquotes
        if (paragraph.startsWith('>')) {
            paragraph = paragraph
                .split('\n')
                .map(line => line.replace(/^> /, ''))
                .join('<br />');
            paragraph = `<blockquote>${paragraph}</blockquote>`;
        } else {
            // Handle line breaks within paragraphs
            paragraph = paragraph.replace(/\n/g, '<br />');
            // Handle strikethrough
            paragraph = paragraph.replace(/~~(.*?)~~/g, '<del>$1</del>');
        }
        // Wrap in <p> tags
        return `<p>${paragraph}</p>`;
    }).join('\n');

    return html;
}

// Example usage
const input = "This is a paragraph with a soft\n" + 
              "line break.\n\n" + 
              "This is another paragraph that has\n" + 
              "> Some text that\n" + "> is in a\n" + "> block quote.\n\n" + 
              "This is another paragraph with a ~~strikethrough~~ word.";

console.log(markdownToHtml(input));
