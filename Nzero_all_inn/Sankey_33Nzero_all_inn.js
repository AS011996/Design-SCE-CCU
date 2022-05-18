let dataV={"nodes": [
{"name":"Landfill"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rLDPE"},
{"name":"Lumber"},
{"name":"Me-Lactate from alcoholysis"},
{"name": "Losses"}
],
 "links": [
 {"source":"LDPE", "target":"Households", "value":0.5853, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":0.7526, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":1.1791, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.1588, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":1.075, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0949, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.1897, "optimal":"yes"} , 
{"source":"Segregation", "target":"rLDPE", "value":0.3873, "optimal":"yes"} , 
{"source":"Segregation", "target":"Me-Lactate from alcoholysis", "value":0.498, "optimal":"yes"} , 
{"source":"rLDPE", "target":"LDPE", "value":0.213, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Lumber", "value":0.1317, "optimal":"yes"} , 
{"source":"rLDPE", "target":"Losses", "value":0.0426, "optimal":"yes"} ]}; 
