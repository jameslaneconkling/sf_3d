var fs = require('fs');
var shp2stl = require('shp2stl');
var inFile = 'data/bands_cleaned.shp';
shp2stl.shp2stl(inFile,
    {
        width: 100, //in STL arbitrary units, but typically 3D printers use mm
        height: 10,
        extraBaseHeight: 0,
        extrudeBy: "h",
        simplification: .8,
        binary: true,
        cutoutHoles: false,
        verbose: true,
        extrusionMode: 'straight'
    },
    function(err, stl) {
        fs.writeFileSync('sf_contours_10m.stl',  stl);
    }
);
