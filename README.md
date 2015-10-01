## San Francisco in 3D

Source DEM is from the National Elevation Dataset (NED).

Isolines were produced using Roger Veciana i Rovira's raster isobands python script ([blog post](http://geoexamples.blogspot.com/2013/08/creating-vectorial-isobands-with-python.html) and [repo](https://github.com/rveciana/geoexamples/tree/master/python/raster_isobands)).

Additional preprocessing/data cleaning included:
* calculating area of each isoband and filtering out all features with area<1000 m2.
* simplifying vectors using qGIS's `simplify geometries` tool with a tolerance of 0.0001
* reprojecting from EPSG:4269 to EPSG:4326

### shp2stl
Converted preprocessed shp file (*data > bands_cleaned.shp*) to `stl` using Doug McCune's [shp2stl node module](https://github.com/dougmccune/shp2stl) ( [blog](http://dougmccune.com/blog/2014/12/30/using-shp2stl-to-convert-maps-to-3d-models/)).  
