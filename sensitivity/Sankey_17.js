let dataV={"nodes": [
{"name":"Landfill"},
{"name":"Incineration"},
{"name":"HDPE"},
{"name":"Households"},
{"name":"Curbside Collection"},
{"name":"Segregation"},
{"name":"rHDPE"},
{"name":"Lumber"},
{"name": "Losses"}
],
 "links": [
 {"source":"HDPE", "target":"Households", "value":2.4422, "optimal":"yes"} , 
{"source":"Households", "target":"Curbside Collection", "value":2.2872, "optimal":"yes"} , 
{"source":"Households", "target":"Losses", "value":0.3702, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Segregation", "value":2.2938, "optimal":"yes"} , 
{"source":"Curbside Collection", "target":"Losses", "value":0.184, "optimal":"yes"} , 
{"source":"Segregation", "target":"Landfill", "value":0.4049, "optimal":"yes"} , 
{"source":"Segregation", "target":"rHDPE", "value":1.889, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Incineration", "value":0.3994, "optimal":"yes"} , 
{"source":"rHDPE", "target":"HDPE", "value":1.0389, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Lumber", "value":0.2806, "optimal":"yes"} , 
{"source":"rHDPE", "target":"Losses", "value":0.17, "optimal":"yes"} ]}; 
