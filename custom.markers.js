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

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        {
            x: 330,
            z: -28,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Spawn",
            textColor: "yellow",
            offsetY: 10,
            font: "bold 16px Arial",
        },

        {
            x: 1230,
            z: -1315,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Koli",
            textColor: "yellow",
            offsetY: 10,
            font: "bold 16px Arial",
        },

        {
            x: 893,
            z: -1885,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "morrelo",
            textColor: "yellow",
            offsetY: 10,
            font: "bold 16px Arial",
        },

        {
            x: 345,
            z: 231,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Ika & Aru",
            textColor: "yellow",
            offsetY: 10,
            font: "bold 16px Arial",
        },

        {
            x: -3223,
            z: -278,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Michael",
            textColor: "yellow",
            offsetY: 10,
            font: "bold 16px Arial",
        },

        {
            x: 4185,
            z: 4263,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "Simon",
            textColor: "yellow",
            offsetY: 10,
            font: "bold 16px Arial",
        },

        {
            x: -1740,
            z: 595,
            image: "custom.pin.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.25,
            text: "End",
            textColor: "yellow",
            offsetY: 10,
            font: "bold 16px Arial",
        },




    ]
}
