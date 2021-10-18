let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"LDPE"},
{"name":"PLA"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Dropoff"},
{"name":"Segregation"},
{"name": "Losses"}
],
 "links": [
 {"source":"Incineration", "target":"Landfill", "value":0.0004, "optimal":"yes"} , 
{"source":"Incineration", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"HDPE", "target":"Households", "value":0.0375, "optimal":"yes"} , 
{"source":"LDPE", "target":"Households", "value":0.0008, "optimal":"yes"} , 
{"source":"PLA", "target":"Households", "value":1.881, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":0.0087, "optimal":"yes"} , 
{"source":"Households", "target":"Dropoff", "value":0.0008, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":1.9097, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Incineration", "value":0.0078, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.0007, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Incineration", "value":0.0007, "optimal":"yes"} , 
{"source":"Dropoff", "target":"Losses", "value":0.0001, "optimal":"yes"} , 
{"source":"Segregation", "target":"Incineration", "value":0.0085, "optimal":"yes"} ]}; 
