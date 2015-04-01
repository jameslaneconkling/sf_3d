## San Francisco in 3D

Source DEM is from the National Elevation Dataset (NED).

Isolines were produced using Roger Veciana i Rovira's raster isobands python script ([blog post](http://geoexamples.blogspot.com/2013/08/creating-vectorial-isobands-with-python.html) and [repo](https://github.com/rveciana/geoexamples/tree/master/python/raster_isobands)).

Additional preprocessing/data cleaning included:
* calculating area of each isoband and filtering out all features with area<1000 m2.
* simplifying vectors using qGIS's `simplify geometries` tool with a tolerance of 0.0001
* reprojecting from EPSG:4269 to EPSG:4326
