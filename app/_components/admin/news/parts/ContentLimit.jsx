import React, { useState } from "react";

function TruncatedHtml({ html, limit = 50 }) {
  const [expanded, setExpanded] = useState(false);

  // Strip tags to get plain text for counting/truncation
  const plainText = html.replace(/<[^>]+>/g, "");
  const isLong = plainText.length > limit;

  const truncatedText = plainText.slice(0, limit) + (isLong ? "..." : "");

  return (
    <div>
      {expanded || !isLong ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <div>{truncatedText}</div>
      )}

      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 ml-2 underline hover:text-blue-800"
          type="button"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
}

export default TruncatedHtml;
