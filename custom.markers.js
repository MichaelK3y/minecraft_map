/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        textStrokeColor: text outline color in HTML/CSS format (in quotes),
        textStrokeWidth: text outline width in pixels,
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

// Minecraft-style font for marker labels: Monocraft (https://github.com/IdreesInc/Monocraft, OFL license).
// OpenLayers draws labels to canvas immediately, so the markers layer must be redrawn
// once the font finishes loading, otherwise the fallback font stays on screen.
if (typeof FontFace !== "undefined") {
    new FontFace("Monocraft", "url('monocraft.ttf')").load().then(function (font) {
        document.fonts.add(font);
        try {
            if (unmined && unmined.markersLayer) unmined.markersLayer.changed();
        } catch (e) {
            // map not created yet; it will render with the loaded font on its own
        }
    });
}

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        {
            x: 330,
            z: -28,
            image: "pin_yellow.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Spawn",
            textColor: "yellow",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: 1230,
            z: -1315,
            image: "pin_pink.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Koli",
            textColor: "pink",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: 893,
            z: -1885,
            image: "pin_blue.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "morrelo",
            textColor: "dodgerblue",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: 345,
            z: 231,
            image: "pin_cyan.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Ika&Aru",
            textColor: "cyan",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: -3223,
            z: -278,
            image: "pin_lime.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Michael",
            textColor: "limegreen",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: 4185,
            z: 4263,
            image: "pin_red.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Simon",
            textColor: "tomato",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: -1740,
            z: 595,
            image: "pin_black.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "End",
            textColor: "darkgrey",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: 3127,
            z: 5645,
            image: "pin_gray.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Ancient City",
            textColor: "lightslategray",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: 4223,
            z: 2899,
            image: "pin_brown.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Mansion",
            textColor: "peru",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: -2328,
            z: 6699,
            image: "pin_brown.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Mansion",
            textColor: "peru",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },

        {
            x: -1949,
            z: 5876,
            image: "pin_light_gray.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Pale Garden",
            textColor: "lightgray",
            textStrokeColor: "rgba(0, 0, 0, 0.8)",
            textStrokeWidth: 3,
            offsetY: 10,
            font: "16px Monocraft, Arial",
        },




    ]
}
