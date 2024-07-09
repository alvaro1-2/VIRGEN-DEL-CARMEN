// scripts/zoom.js
document.addEventListener("DOMContentLoaded", function () {
    const svgMap = document.getElementById("svgMap");

    svgMap.addEventListener("load", function () {
        const svgDoc = svgMap.contentDocument;
        const svgRoot = svgDoc.documentElement;

        svgRoot.style.cursor = "pointer";
        svgRoot.addEventListener("wheel", function (event) {
            event.preventDefault();
            const scale = 1 + event.deltaY * -0.01;
            const width = svgRoot.clientWidth;
            const height = svgRoot.clientHeight;
            const viewBox = svgRoot.viewBox.baseVal;
            const newWidth = width * scale;
            const newHeight = height * scale;

            viewBox.width = newWidth;
            viewBox.height = newHeight;
            viewBox.x += (width - newWidth) / 2;
            viewBox.y += (height - newHeight) / 2;
        });
    });
});
