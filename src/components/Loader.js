import React from "react";
import ContentLoader from "react-content-loader";

const Loader = (props) => (
    <ContentLoader
        speed={2}
        width={210}
        height={260}
        viewBox="0 0 210 260"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="6" y="9" rx="0" ry="0" width="141" height="112" />
        <rect x="571" y="215" rx="0" ry="0" width="38" height="22" />
        <rect x="6" y="130" rx="0" ry="0" width="140" height="24" />
        <rect x="5" y="169" rx="0" ry="0" width="78" height="32" />
        <rect x="115" y="168" rx="0" ry="0" width="32" height="32" />
    </ContentLoader>
);

export default Loader;
