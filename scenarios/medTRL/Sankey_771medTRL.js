let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0655, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6241, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0058, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0848, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.3249, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.1792, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0502, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0029, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0016, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0007, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0319, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.1489, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.0819, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.0506, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0164, "optimal":"yes"} ]}; 
