let dataV={"nodes": [
{"name":"Pyrolysis"},
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name": "Losses"}
],
 "links": [
 {"source":"Pyrolysis", "target":"Losses", "value":0.0222, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.7147, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.6199, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0022, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.0927, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Pyrolysis", "value":0.1106, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":0.4325, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0499, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Pyrolysis", "value":0.0004, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Segregation", "value":0.0014, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0002, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.0766, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3573, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Pyrolysis", "value":0.1215, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.1965, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0393, "optimal":"yes"} ]}; 
