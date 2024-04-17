import React from "react";
/*
function processLink(link) {
    if (link === "") {
        alert("Sorry, the paper's not yet published.");
        return "https://liuyifan22.github.io/";
    } else return link;
}
*/
function IconLink(props) {
    const { link, title, icon } = props;
    return (
        <div
            style={{ cursor: "pointer" }}
            rel="noopener noreferrer"
            onClick={() =>
                link === ""
                    ? alert("Sorry, the paper's not yet published.")
                    : window.open(link, "_blank")
            }>
            <i className={icon} /> {title}
        </div>
    );
}

export default IconLink;
